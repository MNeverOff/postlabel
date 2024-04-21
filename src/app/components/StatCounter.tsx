'use client'

import { useEffect, useState } from 'react';
import { UsageEventType } from '@/src/app/models/UsageEventType';
import { EventTypeData } from '@/src/app/utils/event-tracker';

function StatCounter() {
    const [data, setData] = useState<Record<UsageEventType, EventTypeData> | null>(null);

    useEffect(() => {
        // Fetch the event data from the queryUsage API
        const fetchEventData = async () => {
            try {
                const response = await fetch('/api/queryUsage', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const eventData: Record<UsageEventType, EventTypeData> = await response.json();
                setData(eventData);
            } catch (error) {
                console.error('Error fetching event data:', error);
            }
        };

        fetchEventData();
    }, []);

    if (!data) {
        return <div className="mt-4 p-4 bg-slate-200 rounded-md">Loading...</div>;
    }

    return (
        <div className="mt-4 p-4 bg-slate-200 rounded-md">

            <p className="text-center mb-2"><span className="text-xl font-bold">{data.Process.filesNum.toLocaleString()}</span> files with <span className="text-xl font-bold">{data.Process.pagesNum.toLocaleString()}</span> pages processed</p>
            <p className="text-center"><span className="text-xl font-bold">{(data.Download.labelsNum + data.Print.labelsNum).toLocaleString()}</span> labels printed and downloaded </p>
            <p className="m-auto mt-2 text-center text-sm leading-relaxed">Within the last 12 months</p>
        </div>
    );
}

export default StatCounter;