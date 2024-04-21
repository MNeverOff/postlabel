import { NextRequest, NextResponse } from 'next/server';
import { EventTracker } from '@/src/app/utils/event-tracker';

export async function GET(request: NextRequest) {
    const eventTracker = new EventTracker();

    try {
        const eventData = await eventTracker.getEventData();
        return NextResponse.json(eventData);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error ocurred when attempting to query usage data.' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    const { actionType, eventData } = await request.json();
    const eventTracker = new EventTracker();

    try {
        await eventTracker.trackEvent(actionType, eventData);
        return NextResponse.json({ message: 'Usage event recorded successfully.' });
    } catch (error) {
        console.error('Error tracking event:', error);
        return NextResponse.json({ error: 'Error recording usage data.' }, { status: 500 });
    }
}