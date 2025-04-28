import { StaticImageData } from "next/image";

export interface DropDownProps {
    trigger: string;
    icon?: string | StaticImageData;
    menuIcon: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    triggerClassName?: string;
}