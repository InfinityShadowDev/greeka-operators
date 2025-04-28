"use client";

import { useEffect, useState } from "react";

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const breakpoint = 768;

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, [breakpoint]);

    return isMobile;
};