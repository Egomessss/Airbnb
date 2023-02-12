import React from "react"
import { MapIcon } from "@heroicons/react/24/solid"

import BottomNav from "../../components/BottomNav"

import Navbar from "../../components/Navbar/Navbar/Navbar"

import SwipeCarouselFilter from "../../components/SwipeCarouselFilter"

import SearchCard from "./SearchCard"
import MapApi from "../../components/MapApi"
import FooterSearchPage from "./FooterSearchPage"
import Drawer from "../../components/Drawer"

function SearchPage() {
  return (
    <div className="mx-auto  h-screen  bg-red-50">
      {/* Navigation and filter */}
      <div className="sticky top-0 z-10 bg-white px-6">
        <Navbar />
        {/* <SwipeCarouselFilter /> */}
      </div>
      {/* left section */}
      {/* <div className="md:relative md:flex md:h-[85vh] md:gap-5">
        <div className="hidden md:inline-block md:w-[60%]">
          <p className="pb-4 text-sm font-medium">
            Over 8 homes in your search area
          </p>
          <SearchCard />
        </div>
      </div> */}

      <div className="-mr-6 h-[660px] w-full border-2 border-black md:-mr-8 md:h-[1050px] md:w-[40%]">
        {/* <MapApi /> */}
      </div>
      {/* footer*/}
      <div className="w-[340px]"><Drawer /></div>
      
      <FooterSearchPage />

      {/* mobile navigation */}
      {/* <div className="sticky bottom-0 z-10 bg-white md:hidden">
        <BottomNav />
      </div> */}
    </div>
  )
}

export default SearchPage
