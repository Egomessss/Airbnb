import React from "react"
import Footer from "../components/Footer"
import HomepageCard from "../components/HomepageCard"
import Navbar from "../components/Navbar"
import SwipeCarouselFilter from "../components/SwipeCarouselFilter"

function Homepage() {
  return (
    <div>
      <div className="sticky top-0 z-10 bg-white">
        <Navbar />
        <SwipeCarouselFilter />
      </div>
      <HomepageCard />
      <Footer />
    </div>
  )
}

export default Homepage
