import { StaticImageData } from "next/image";

export interface DropDownProps {
    trigger: string;
    icon?: string | StaticImageData;
    children: React.ReactNode;
    className?: string;
    triggerClassName?: string;
}