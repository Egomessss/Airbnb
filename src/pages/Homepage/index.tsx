import { MapIcon } from "@heroicons/react/24/solid"
import React from "react"
import BottomNav from "../../components/BottomNav"
import Footer from "../../components/Footer"
import HomepageCard from "./HomepageCard"
import Navbar from "../../components/Navbar/Navbar"
import StickyButton from "../../components/StickyButton"
import SwipeCarouselFilter from "../../components/SwipeCarouselFilter"

function Homepage() {
  return (
    <div className="relative">
      <div className="sticky top-0 z-10 bg-white">
        <Navbar />
        <SwipeCarouselFilter />
      </div>
      <HomepageCard />
      <div className="sticky bottom-0 z-10 bg-white">
        <StickyButton />
        <BottomNav />
      </div>

      <Footer />
    </div>
  )
}

export default Homepage

// you can see the scrolling of the homecards trought the nav
// prevent sticky button and bottom nav from showing the search modal
// populate the cards and swipe carousel with the api data so no key error
