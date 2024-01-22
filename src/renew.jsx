import React, { useState, useEffect } from 'react';
import MobileRenew from './MobileRenew';
import PcRenew from './PcRenew';

function Renew() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <div>
            {windowWidth <= 360 ? <MobileRenew /> : <PcRenew />}
        </div>
    );
}

export default Renew;