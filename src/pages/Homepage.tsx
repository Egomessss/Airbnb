import { MapIcon } from "@heroicons/react/24/solid"
import React from "react"
import Footer from "../components/Footer"
import HomepageCard from "../components/HomepageCard"
import Navbar from "../components/Navbar"
import StickyButton from "../components/StickyButton"
import SwipeCarouselFilter from "../components/SwipeCarouselFilter"

function Homepage() {
  return (
    <div className="relative">
      <div className="sticky top-0 z-10 bg-white">
        <Navbar />
        <SwipeCarouselFilter />
      </div>
      <HomepageCard />
      <StickyButton />
      <Footer />
    </div>
  )
}

export default Homepage
