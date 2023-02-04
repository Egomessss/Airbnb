import React from "react"
import { MapIcon } from "@heroicons/react/24/solid"

import BottomNav from "../../components/BottomNav"

import Navbar from "../../components/Navbar/Navbar"

import SwipeCarouselFilter from "../../components/SwipeCarouselFilter"

import FooterMobile from "../ListingPage/FooterMobile"
import SearchCard from "./SearchCard"
import MapApi from "../../components/MapApi"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"

function SearchPage() {
  return (
    <div className="px-6">
      {/* Navigation and filter */}
      <div className="sticky top-0 z-10 bg-white">
        <Navbar />
        <SwipeCarouselFilter />
      </div>
      {/* mid section */}
      <div className="flex gap-6 relative">
        <div className="w-[60%] h-">
          <p className="py-4 text-sm font-medium">
            Over 1,000 homes within map area
          </p>

          <SearchCard />
          <div className="flex justify-center items-center py-6">
            {" "}
            <Stack spacing={2}>
              <Pagination count={10} />
            </Stack>
          </div>
        </div>
        <div className="fixed right-0 w-[40%] h-[1071px] border-2 border-black -mr-6">
          <MapApi />
        </div>
      </div>
      {/* bottom */}
      <div className="sticky bottom-0 z-10 bg-white">
        <BottomNav />
      </div>

      <FooterMobile />
    </div>
  )
}

export default SearchPage
