// components/PreventRefresh.js

import { useEffect } from 'react';

const PreventRefresh = () => {
    useEffect(() => {
        const preventRefresh = (event) => {
            if (event.key === 'F5' || (event.ctrlKey && event.key === 'r')) {
                event.preventDefault();
            }
        };

        const preventContextMenu = (event) => {
            event.preventDefault();
        };

        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = '';
        };

        document.addEventListener('keydown', preventRefresh);
        document.addEventListener('contextmenu', preventContextMenu);
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            document.removeEventListener('keydown', preventRefresh);
            document.removeEventListener('contextmenu', preventContextMenu);
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return null; // این کامپوننت نیازی به رندر ندارد
};

export default PreventRefresh;
