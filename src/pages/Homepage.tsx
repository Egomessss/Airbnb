import React from "react"
import Footer from "../components/Footer"
import HomepageCard from "../components/HomepageCard"
import Navbar from "../components/Navbar"
import SwipeCarouselFilter from "../components/SwipeCarouselFilter"

function Homepage() {
  return (
    <div>
      <Navbar />
      <SwipeCarouselFilter/>
      <HomepageCard />
      <Footer />
    </div>
  )
}

export default Homepage
