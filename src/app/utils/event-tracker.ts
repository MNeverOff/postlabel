import { UsageEventType } from '@/src/app/models/UsageEventType';
import prisma from '../../lib/prisma';

export interface EventData {
    usageEventTypeId? : number;
    pageHash?: string;
    filesNum?: number;
    pagesNum?: number;
    labelsNum?: number;
    payloadSize?: number;
    RMNum?: number;
    RMINum?: number;
    EbayRMNum?: number;
    PFNum?: number;
    createdAt?: Date;
}

export interface EventTypeData {
    filesNum: number;
    pagesNum: number;
    labelsNum: number;
}
  
type CacheData = Record<UsageEventType, EventTypeData>;

let cache: CacheData = {
    [UsageEventType.Upload]: { filesNum: 0, pagesNum: 0, labelsNum: 0 },
    [UsageEventType.Process]: { filesNum: 0, pagesNum: 0, labelsNum: 0 },
    [UsageEventType.Download]: { filesNum: 0, pagesNum: 0, labelsNum: 0 },
    [UsageEventType.Print]: { filesNum: 0, pagesNum: 0, labelsNum: 0 },
};
let cacheTimestamp: Date | null = null;

export class EventTracker {
    async trackEvent(type: UsageEventType, eventData: EventData) {
        const datetime = new Date();
        
        try {
            const usageEventType = await prisma.usageEventType.findFirst({
                where: {
                  name: type,
                },
            });

            if (!usageEventType) {
                throw new Error(`UsageEventType ${type} not found`);
            }

            const usageEvent = await prisma.usageEvent.create({
                data: {
                    usageEventTypeId: usageEventType.id,
                    pageHash: eventData.pageHash || '',
                    filesNum: eventData.filesNum,
                    pagesNum: eventData.pagesNum,
                    labelsNum: eventData.labelsNum,
                    payloadSize: eventData.payloadSize,
                    RMNum: eventData.RMNum,
                    RMINum: eventData.RMINum,
                    EbayRMNum: eventData.EbayRMNum,
                    PFNum: eventData.PFNum,
                    createdAt: datetime,
                },
            });
            
            console.log(usageEvent);
        } catch (e) {
            console.error(e);
        }
        finally {
            await prisma.$disconnect();
        }
    }

    async getEventData(): Promise<CacheData> {
        const datetime = new Date();

        // If the cache is less than 5 minutes old, return the cached data
        // This caching is only useful for single session though as it's Vercel, so need to monitor the database usage
        if (cache && cacheTimestamp && datetime.getTime() - cacheTimestamp.getTime() < 5 * 60 * 1000) {
            return cache;
        }
        
        const usageEvents = await prisma.usageEvent.findMany();
        const usageEventTypes = await prisma.usageEventType.findMany({
            select: {
                id: true,
                name: true
            }
        });

        const usageEventTypeMap = usageEventTypes.reduce((map: Record<number, UsageEventType>, eventType) => {
            map[eventType.id] = eventType.name as UsageEventType;
            return map;
        }, {} as Record<number, UsageEventType>);

        cache = {
            [UsageEventType.Upload]: { filesNum: 0, pagesNum: 0, labelsNum: 0 },
            [UsageEventType.Process]: { filesNum: 0, pagesNum: 0, labelsNum: 0 },
            [UsageEventType.Download]: { filesNum: 0, pagesNum: 0, labelsNum: 0 },
            [UsageEventType.Print]: { filesNum: 0, pagesNum: 0, labelsNum: 0 },
        };
          
        usageEvents.forEach(event => {
            const eventType = usageEventTypeMap[event.usageEventTypeId];
            if (eventType && cache[eventType]) {
                cache[eventType].filesNum += event.filesNum || 0;
                cache[eventType].pagesNum += event.pagesNum || 0;
                cache[eventType].labelsNum += event.labelsNum || 0;
            }
        });
          
        // Update the cache timestamp
        cacheTimestamp = datetime;
        
        await prisma.$disconnect();
        return cache;
    }
}