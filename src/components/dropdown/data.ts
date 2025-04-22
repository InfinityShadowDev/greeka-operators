import { StaticImageData } from "next/image";

export interface DropDownProps {
    trigger: string;
    icon?: string | StaticImageData;
    menuIcon: boolean;
    children: React.ReactNode;
    className?: string;
    triggerClassName?: string;
}