import { StaticImageData } from "next/image";
import { ElementType } from "react";

export interface IDropdown {
    trigger: string;
    icon: string | StaticImageData;
    componentToRender: ElementType;
    customTriggerClasses?: string;
    customIconClasses?: string;
}