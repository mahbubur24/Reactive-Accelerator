import { useState } from "react";
import CatagoryIcon from "../ui/Catagory-icon";
import ExpenseIcon from "../ui/Expense-icon";
import FilterIcon from "../ui/Filter-icon";
import IncomeIcon from "../ui/Income-icon";
import Catagory from "./Catagory";
import Filter from "./Filter";
import ItemList from "./Item-list";

export default function ItemShow({
  icon,
  title,
  categoryData,
  filterData,
  listData,
  editHandler,
}) {
  const [showCat, setShowcat] = useState(false);
  const [showFil, setShowFil] = useState(false);
  const [filtered, setFiltered] = useState("");
  let categoryItem = {};

  console.log(filtered);
  let showBlock = false;

  if (title === "Income") {
    showBlock = true;
  }
  function showCategoryhandler() {
    setShowFil(false);
    setShowcat(!showCat);
  }
  function showFilterhandler() {
    setShowcat(false);
    setShowFil(!showFil);
  }

  // Catagory Handler
  function handleFilter(itemId) {
    console.log(itemId);
    console.log(typeof itemId);
    console.log(parseInt(itemId));

    console.log(typeof Number(itemId));

    const temp = categoryData.find((item) => {
      return Number(item.id) === Number(itemId);
    });
    console.log(temp);
  }

  // Filter Data

  return (
    <div className="border rounded-md relative">
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        {showBlock && (
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-teal-600 text-white rounded-md text-center object-center place-content-center text-base">
              <IncomeIcon></IncomeIcon>
            </div>
            <div>
              <h3 className="text-xl font-semibold leading-7 text-gray-800">
                {title}
              </h3>
            </div>
          </div>
        )}

        {!showBlock && (
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-pink-600 text-white rounded-md text-center object-center place-content-center text-base">
              <ExpenseIcon></ExpenseIcon>
            </div>
            <div>
              <h3 className="text-xl font-semibold leading-7 text-gray-800">
                {title}
              </h3>
            </div>
          </div>
        )}

        <div>
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={showCategoryhandler}
              >
                <CatagoryIcon></CatagoryIcon>
              </button>
            </div>
            <div
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="filter-button"
              tabindex="-1"
              id="filter-dropdown"
            >
              {showCat && (
                <Catagory
                  categoryList={categoryData}
                  onFilter={handleFilter}
                ></Catagory>
              )}
            </div>
          </div>

          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="filter-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={showFilterhandler}
              >
                <FilterIcon></FilterIcon>
              </button>
            </div>

            <div
              className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              {showFil && <Filter></Filter>}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 divide-y">
        <ItemList listData={listData} filteredData={filtered}></ItemList>
      </div>
    </div>
  );
}
