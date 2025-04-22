import { IListingBlock } from "@/data";
import { ArrowRightCircle } from "lucide-react";
import Image from 'next/image';

interface ListingBlockProps {
    listing: IListingBlock;
    customClasses?: string;
}

const ListingBlock: React.FC<ListingBlockProps> = ({
    listing,
    customClasses = "",
}) => {
    const { image, title, rating, reviewsCount, description, ferryTypes, operatesIn, popularVessels, vessels, ctaText } = listing;

    return (
        <div className={`flex flex-col gap-4 border border-neutral-300 rounded-lg h-full w-full ${customClasses}`}>

            <div className="flex flex-col gap-2 bg-neutral-50 p-3 border-b border-neutral-300">
                <div className="relative w-full h-fit">
                    <Image
                        src={image}
                        alt={title}
                        objectFit="contain"
                        className="rounded-lg"
                    />
                </div>

                <div>
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <div className="flex items-center space-x-2">
                        <span className="text-yellow-500 text-2xl">{"★".repeat(rating)}</span>
                        <span className="text-neutral-800">by <strong>{reviewsCount} customers</strong></span>
                    </div>
                </div>
            </div>

            <div className="px-4 flex flex-col gap-4">
                <div>
                    <h4 className="font-semibold">Operates in:</h4>
                    <p className="text-gray-600">{operatesIn}</p>
                    {/* To display flag use a npm flag library */}
                </div>

                <div>
                    <h4 className="font-semibold">Ferry Types: <span className="font-normal">{ferryTypes}</span></h4>
                    <h4 className="font-semibold">Vessels number: <span className="font-normal">{vessels}</span></h4>
                </div>

                <div>
                    <h4 className="font-semibold">Popular Vessels:</h4>
                    <ul className="flex text-blue-500">
                        {popularVessels.map((vessel, index) => (
                            <li key={index} className="mr-2">
                                {vessel}{index < popularVessels.length - 1 ? ", " : ""}
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="text-gray-700">{description}</p>

                <button className="flex justify-end py-4 mt-4 gap-2 font-semibold w-full bg-transparent text-blue-500 border-t border-neutral-300">
                    {ctaText} <ArrowRightCircle />
                </button>
            </div>

        </div>
    );
}

export default ListingBlock;