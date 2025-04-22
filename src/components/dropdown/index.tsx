"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { DropDownProps } from "./data";

const DropDown: React.FC<DropDownProps> = ({
    trigger,
    icon,
    children,
    className = "",
    triggerClassName = "",
}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleOutside);
        return () => document.removeEventListener("mousedown", handleOutside);
    }, []);

    return (
        <div className={`relative ${className}`} ref={ref}>
            <button
                onClick={() => setOpen(!open)}
                className={`border border-neutral-300 rounded-lg px-3 py-1 flex items-center gap-2 ${triggerClassName}`}
            >
                {icon && <Image src={icon} alt="icon" width={14} height={14} />}
                <span className="text-sm font-medium">{trigger}</span>
                <span className="ml-auto">{open ? "▲" : "▼"}</span>
            </button>

            <div
                className={`absolute z-50 top-full mt-2 w-max bg-white border border-neutral-300 shadow-md rounded-lg transition-all duration-200 ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
            >
                {children}
            </div>
        </div>
    );
};

export default DropDown;