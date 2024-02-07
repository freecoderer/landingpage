import React, { useState, useEffect, useRef } from 'react';
import PcRenew from './PcRenew';
import smMobileRenew from "./smMobileRenew";
import mdMobileRenew from "./mdMobileRenew";
import lgMobileRenew from "./lgMobileRenew";
import xlMobileRenew from "./xlMobileRenew";
import PcRenewsm from "./PcRenewsm";


function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            console.log('Window width:', window.innerWidth); // Add this line
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth;
}

function Renew() {
    const windowWidth = useWindowWidth();
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    }, [windowWidth]);

    let ComponentToRender;

    if (windowWidth < 390) {
        ComponentToRender = smMobileRenew;
    } else if (windowWidth >= 390 && windowWidth < 393){
        ComponentToRender = mdMobileRenew;
    } else if (windowWidth >= 393 && windowWidth < 430) {
        ComponentToRender = lgMobileRenew;
    } else if (windowWidth >= 430 && windowWidth < 915) {
        ComponentToRender = xlMobileRenew;
    } else if (windowWidth >= 915 && windowWidth < 1400) {
        ComponentToRender = PcRenewsm;
    } else {
        ComponentToRender = PcRenew;

    }

    return (
        <div>
            <ComponentToRender key={renderCount.current} />
        </div>
    );
}

export default Renew;