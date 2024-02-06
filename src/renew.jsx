import React, { useState, useEffect } from 'react';
import PcRenew from './PcRenew';
import smMobileRenew from "./smMobileRenew";
function Renew() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('resize', handleWindowResize);
    }, [windowWidth]);

    let ComponentToRender;
    console.log(windowWidth);

    if (windowWidth>=900) {
        ComponentToRender = PcRenew;
    } else {
        ComponentToRender = smMobileRenew;
    }

    return (
        <div>
            <ComponentToRender />
        </div>
    );
}

export default Renew;