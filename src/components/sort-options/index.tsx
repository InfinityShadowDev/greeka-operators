const SortOptions: React.FC = () => {
    return (
        <div className="p-4 w-48">
            <ul className="text-sm flex flex-col gap-2">
                <li className="cursor-pointer hover:font-semibold">Reviews</li>
                <li className="cursor-pointer hover:font-semibold">Price</li>
                <li className="cursor-pointer hover:font-semibold">Popularity</li>
            </ul>
        </div>
    );
};

export default SortOptions;