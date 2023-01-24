import React from "react"
import Footer from "../components/Footer"
import HomepageCard from "../components/HomepageCard"
import Navbar from "../components/Navbar"
import ScrollFilter from "../components/ScrollFilter"

function Homepage() {
  return (
    <div >
      <Navbar />
      <ScrollFilter />
      <div className="flex flex-wrap gap-4">
        <HomepageCard />
        <HomepageCard />
        <HomepageCard />
        <HomepageCard />
        <HomepageCard />
        <HomepageCard />
        <HomepageCard />
        <HomepageCard />
        <HomepageCard />
        <HomepageCard />
        <HomepageCard />
        <HomepageCard />
      </div>

      <Footer />
    </div>
  )
}

export default Homepage
