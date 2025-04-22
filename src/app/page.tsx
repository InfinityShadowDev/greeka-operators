"use client";

import { DropDown, Filters, ListingBlock, SortOptions } from "@/components";
import { filter_icon, sort_icon } from "./data";
import { operatorListings } from "@/data";

const Home = () => {
  return (
    <main className="p-6 space-y-5">
      {/* --- Header Text --- */}
      <div>
        <h1 className="text-2xl font-bold">Ferry operators</h1>
        <p className="text-sm">
          Discover the <span className="font-semibold">57 ferry operators</span> we work with
        </p>
      </div>

      {/* --- Search Filters --- */}
      <div className="grid grid-cols-3 gap-3">
        <DropDown
          trigger="Filters"
          icon={filter_icon}
          menuIcon={false}
          triggerClassName="w-full"
        >
          <Filters />
        </DropDown>

        <DropDown
          trigger="Sort by: Reviews"
          icon={sort_icon}
          menuIcon={true}
          className="col-span-2"
          triggerClassName="w-full"
        >
          <SortOptions />
        </DropDown>
      </div>

      {/* --- Listings --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {operatorListings.map((listing, index) => (
          <ListingBlock
            key={index}
            listing={listing}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;