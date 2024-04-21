import { NextApiRequest, NextApiResponse } from 'next';
import { EventTracker } from '@/src/app/utils/event-tracker';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { actionType, eventData } = req.body;
    const eventTracker = new EventTracker();

    try {
        await eventTracker.trackEvent(actionType, eventData);
        res.status(200).json({ message: 'Usage event tracked successfully' });
    } catch (error) {
        console.error('Error tracking event:', error);
        res.status(500).json({ message: 'Error tracking event' });
    }
}