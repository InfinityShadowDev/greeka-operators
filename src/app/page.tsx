"use client";

import { DropDown, Filters, ListingBlock, SortOptions } from "@/components";
import { filter_icon, sort_icon } from "./data";
import { operatorListings } from "@/data";
import { useState } from "react";
import { useIsMobile } from "@/hooks/useMobile";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  const isMobile = useIsMobile();

  const toggleFilters = () => {
    setIsOpen((prev) => !prev)
  };

  return (
    <main className="p-6 space-y-5">
      {/* --- Header Text --- */}
      <div>
        <h1 className="text-2xl md:text-4xl font-bold">Ferry operators</h1>
        <p className="text-sm md:text-base">
          Discover the <span className="font-semibold">57 ferry operators</span> we work with
        </p>
      </div>

      {/* --- Search Filters --- */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:max-w-lg">
        <DropDown
          trigger="Filters"
          icon={filter_icon}
          menuIcon={false}
          onClick={!isMobile ? () => toggleFilters() : undefined}
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

        <DropDown
          trigger="Search"
          icon={sort_icon}
          menuIcon={false}
          triggerClassName="w-full"
          className="hidden md:block"
        >
          <SortOptions />
        </DropDown>
      </div>

      {/* --- Sidebar --- */}
      <div className="grid grid-cols-1 md:grid-cols-[245px_1fr] gap-0">
        <aside className="hidden md:flex top-20 h-max md:flex-col md:gap-2">
          {isOpen && (
            <Filters className="border border-neutral-300 rounded-lg" />
          )}
        </aside>

        {/* --- Listings --- */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {operatorListings.map((listing, index) => (
            <ListingBlock
              key={index}
              listing={listing}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;