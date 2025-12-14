import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase';

export default function PageTracker() {
    const location = useLocation();

    useEffect(() => {
        // Log page view whenever the location changes
        logEvent(analytics, 'page_view', {
            page_path: location.pathname + location.search,
            page_title: document.title
        });
        // console.log(`Page View Logged: ${location.pathname}`); // Debug
    }, [location]);

    return null;
}
