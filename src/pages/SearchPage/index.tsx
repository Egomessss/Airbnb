import React from "react"
import { MapIcon } from "@heroicons/react/24/solid"

import BottomNav from "../../components/BottomNav"

import Navbar from "../../components/Navbar/Navbar/Navbar"

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
      {/* left section */}
      <div className="h-[85vh] relative flex gap-5">
        <div className="w-[60%]">
          <p className="pb-4 text-sm font-medium">
            Over 8 homes in your search area
          </p>

          <SearchCard />
          <div className="flex items-center justify-center py-8">
            <Stack spacing={2}>
              <Pagination count={2} />
            </Stack>
          </div>
        </div>
        <div className="-mr-8 h-[1050px] w-[40%] border-2 border-black">
          {/* <MapApi /> */}
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
