import { IListingBlock } from "@/data";
import { ArrowRightCircle } from "lucide-react";
import Image from 'next/image';
import ReactCountryFlag from "react-country-flag";

interface ListingBlockProps {
    listing: IListingBlock;
    customClasses?: string;
}

const ListingBlock: React.FC<ListingBlockProps> = ({
    listing,
    customClasses = "",
}) => {
    const { image, title, rating, reviewsCount, description, ferryTypes, operatesIn, countryCode, popularVessels, vessels, ctaText } = listing;

    return (
        <div className={`flex flex-col gap-4 border border-neutral-300 rounded-lg h-full w-full ${customClasses}`}>

            <div className="flex flex-col gap-2 bg-neutral-50 p-3 border-b border-neutral-300 md:flex-row md:justify-between md:items-center">
                <div className="relative w-full h-fit">
                    <Image
                        src={image}
                        alt={title}
                        objectFit="contain"
                        className="rounded-lg"
                    />
                </div>

                <div className="md:w-80 flex flex-col md:justify-end md:items-end">
                    <h3 className="text-2xl md:text-xl font-semibold">{title}</h3>
                    <div className="flex items-center space-x-2">
                        <span className="text-yellow-500 text-2xl">{"★".repeat(rating)}</span>
                        <span className="text-neutral-800 md:text-sm">by <strong>{reviewsCount} customers</strong></span>
                    </div>
                </div>
            </div>

            <div className="px-4 flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h4 className="font-semibold">Operates in:</h4>
                            <span className="text-gray-600 flex gap-2 items-center justify-start text-md">
                                <ReactCountryFlag countryCode={countryCode} svg />
                                {operatesIn}
                            </span>
                        </div>

                        <div>
                            <h4 className="font-semibold">Ferry Types: <span className="font-normal">{ferryTypes}</span></h4>
                            <h4 className="font-semibold">Vessels number: <span className="font-normal">{vessels}</span></h4>
                        </div>

                        <div>
                            <h4 className="font-semibold">Popular Vessels:</h4>
                            <div className="flex justify-start items-center text-blue-500 md:text-md flex-wrap">
                                {popularVessels.map((vessel, index) => (
                                    <h1 key={index} className="mr-1">
                                        {vessel}{index < popularVessels.length - 1 ? ", " : ""}
                                    </h1>
                                ))}
                            </div>
                        </div>
                    </div>

                    <p className="text-gray-700">{description.length > 425 ? description.slice(0, 425) + "..." : description}</p>
                </div>

                <button className="cursor-pointer flex justify-end py-4 mt-4 gap-2 font-semibold w-full bg-transparent text-blue-500 border-t border-neutral-300">
                    {ctaText} <ArrowRightCircle />
                </button>
            </div>

        </div>
    );
}

export default ListingBlock;