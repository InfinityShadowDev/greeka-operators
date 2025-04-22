import Image from "next/image";
import { IDropdown } from "./data";

const DropDown: React.FC<IDropdown> = ({ trigger, icon, componentToRender: Component }) => {
    return (
        <div className="">
            <button className="flex items-center gap-2 p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-200 ease-in-out">
                <Image
                    src={icon}
                    alt="icon"
                    className="w-5 h-5"
                />
                <span>{trigger}</span>
            </button>
            <div className="mt-2">
                {<Component />}
            </div>
        </div>
    );
}

export default DropDown;