import { NextApiRequest, NextApiResponse } from 'next';
import { EventTracker } from '@/src/app/utils/event-tracker';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const eventTracker = new EventTracker();

    try {
        const eventData = await eventTracker.getEventData();
        res.status(200).json(eventData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the request.' });
    }
}