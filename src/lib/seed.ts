import prisma from './prisma';
import { UsageEventType } from '@/src/app/models/UsageEventType';

const load = async () => {
    try {
        await prisma.usageEventType.deleteMany()
        console.log('Deleted records in Usage Event Types table')

        const usageEventTypes = Object.values(UsageEventType)
        
        await prisma.usageEventType.createMany({
            data: usageEventTypes.map(name => ({ name })),
        })
        console.log('Added Usage Event Types data')
    } catch (e) {
        console.error(e)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

load()