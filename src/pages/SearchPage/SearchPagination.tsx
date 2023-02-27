import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

import React from "react"

function SearchPagination({
  changePage,
  currentPage,
  decrementPage,
  incrementPage,
  pageNumbers,
}) {
  return (
    <nav className="flex justify-center gap-4">
      <button>
        <ChevronLeftIcon
          onClick={decrementPage}
          className="h-5"
        />
      </button>

      <div className="flex gap-4">
        {pageNumbers.map((number) => (
          <button
            onClick={() => changePage(number)}
            key={number}
            className={
              // if the number of the page matches current page change the bg color to black so the user knows the currentpage
              number === currentPage
                ? "h-7 w-7 rounded-full bg-black  text-white hover:bg-gray-300"
                : "h-7 w-7 rounded-full  hover:bg-gray-300 "
            }
          >
            {number}
          </button>
        ))}
      </div>
      <button>
        <ChevronRightIcon
          onClick={incrementPage}
          className="h-5"
        />
      </button>
    </nav>
  )
}

// change the color of bg to black if selected

export default SearchPagination
