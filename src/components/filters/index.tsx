const Filters: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`p-4 w-56 ${className}`}>
            <h3 className="text-sm font-semibold mb-3">Filters</h3>
            <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="text-sm">Eco Friendly</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="text-sm">Wi-Fi Onboard</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="text-sm">Pet Friendly</span>
                </label>
            </div>
        </div>
    );
};

export default Filters;