import { IListingBlock, operatorListings } from "@/data";
import { LucideLocationEdit, X } from "lucide-react";
import { useState } from "react";

const Filters: React.FC<{ className?: string, onClick?: () => void, setFilterItems: React.Dispatch<React.SetStateAction<IListingBlock[]>> }> = ({ className, onClick, setFilterItems }) => {
    const [ferryTypes, setFerryTypes] = useState<{ [key: string]: boolean }>({
        normal: false,
        highSpeed: false,
    });
    const [selectedCountry, setSelectedCountry] = useState<string>("");

    const toggleFerryType = (type: string) => {
        const updatedFerryTypes = { ...ferryTypes, [type]: !ferryTypes[type] };
        setFerryTypes(updatedFerryTypes);

        filterListings(updatedFerryTypes, selectedCountry);
    };

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const country = e.target.value;
        setSelectedCountry(country);
        filterListings(ferryTypes, country);
    };

    const filterListings = (ferryTypes: { [key: string]: boolean }, country: string) => {
        const filtered = operatorListings.filter((listing) => {
            const matchesCountry = country ? listing.operatesIn === country : true;
            const matchesFerryTypes =
                (ferryTypes.normal && listing.ferryTypes.includes("normal")) ||
                (ferryTypes.highSpeed && listing.ferryTypes.includes("highSpeed")) ||
                (!ferryTypes.normal && !ferryTypes.highSpeed);
            return matchesCountry && matchesFerryTypes;
        });

        setFilterItems(filtered);
    };

    return (
        <div className={`p-4 w-full border border-neutral-200 rounded-md ${className}`}>
            <div className="items-center justify-between mb-4 hidden md:flex">
                <h3 className="text-base font-semibold">Filters</h3>
                <button
                    className="text-xl font-bold"
                    onClick={onClick}
                >
                    <X className="w-4 h-auto" />
                </button>
            </div>

            {/* --- Operating In --- */}
            <div className="relative flex flex-col gap-2 mb-6">
                <label htmlFor="country" className="text-sm font-medium flex items-center gap-2">
                    Operating in
                </label>

                <div className="relative">
                    <LucideLocationEdit className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />

                    <select
                        id="country"
                        name="country"
                        className="w-full border border-gray-300 rounded pl-10 pr-3 py-2 text-sm text-gray-700 appearance-none"
                        value={selectedCountry}
                        onChange={handleCountryChange}
                    >
                        <option value="">Select a country</option>
                        {operatorListings.map((listing) => (
                            <option key={listing.countryCode} value={listing.operatesIn}>
                                {listing.operatesIn}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* --- Ferry Types --- */}
            <div className="flex flex-col gap-2">
                <h4 className="text-sm font-semibold mb-2">Ferry types</h4>

                <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                        type="checkbox"
                        checked={ferryTypes.normal}
                        onChange={() => toggleFerryType("normal")}
                        className="w-4 h-4"
                    />
                    Normal ferries
                </label>

                <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                        type="checkbox"
                        checked={ferryTypes.highSpeed}
                        onChange={() => toggleFerryType("highSpeed")}
                        className="w-4 h-4"
                    />
                    High-speed ferries
                </label>
            </div>
        </div>
    );
};

export default Filters;