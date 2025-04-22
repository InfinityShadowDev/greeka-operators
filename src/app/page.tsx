"use client";

import { DropDown, Filters, SortOptions } from "@/components";
import { filter_icon, sort_icon } from "./data";

const Home = () => {
  return (
    <div className="p-6 space-y-5">
      <div>
        <h1 className="text-2xl font-bold">Ferry operators</h1>
        <p className="text-sm">
          Discover the <span className="font-semibold">57 ferry operators</span> we work with
        </p>
      </div>

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
    </div>
  );
};

export default Home;