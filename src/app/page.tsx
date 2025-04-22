"use client";

import { DropDown, Filters, SortOptions } from "@/components";
import { filter_icon, sort_icon } from "./data";

const Home = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Ferry operators</h1>
        <p className="text-sm">
          Discover the <span className="font-semibold">57 ferry operators</span> we work with
        </p>
      </div>

      <div className="flex gap-3">
        <DropDown trigger="Filters" icon={filter_icon}>
          <Filters />
        </DropDown>

        <DropDown trigger="Sort by: Reviews" icon={sort_icon}>
          <SortOptions />
        </DropDown>
      </div>
    </div>
  );
};

export default Home;