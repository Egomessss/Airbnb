import React, { useState } from "react"
import { MapIcon } from "@heroicons/react/24/solid"

import BottomNav from "../../components/BottomNav"

import Navbar from "../../components/Navbar/Navbar/Navbar"

import SwipeCarouselFilter from "../../components/SwipeCarouselFilter"

import SearchCard from "./SearchCard"
import MapApi from "../../components/MapApi"
import FooterSearchPage from "./FooterSearchPage"

import StickyButton from "../../components/StickyButton"

function SearchPage() {
  const [openMap, setOpenMap] = useState(false)

  // opens and closes the mapbox map
  const toogleMap = () => {
    setOpenMap((prevMode) => !prevMode)
  }

  return (
    <div className="mx-auto md:">
      {/* top section  Navigation and filter */}
      <div className="sticky top-0 z-10 bg-white px-6">
        <Navbar />
        <SwipeCarouselFilter />
      </div>
      {/* left section in full and middle in mobile*/}
      <div className="md:relative md:flex md:h-[85vh]">
        
        <div className="hidden px-4 md:inline-block md:w-[60%]">
          <p className="pb-4 text-sm font-medium">
            Over 8 homes in your search area
          </p>
          <SearchCard />
        </div>

        <div className="hidden h-[700px] w-full md:-mr-8 md:inline-flex md:h-[1050px] md:w-[40%]">
          <MapApi />
        </div>
        {/* open the map or the listing info */}
        {openMap ? (
          <div className="flex flex-col px-4 md:hidden">
            <p className="pb-4 text-sm font-medium">
              Over 8 homes in your search area
            </p>
            <SearchCard />
          </div>
        ) : (
          <div className="h-[700px] w-full md:hidden">
            {/* <MapApi /> */}
          </div>
        )}
        <div className="md:hidden">
           <StickyButton toogleMap={toogleMap} />
        </div>
       
      </div>

      {/* mobile navigation */}
      <div className="sticky bottom-0 z-10 bg-white md:hidden">
        <BottomNav />
      </div>
      {/* footer*/}
      <FooterSearchPage />
    </div>
  )
}

export default SearchPage
