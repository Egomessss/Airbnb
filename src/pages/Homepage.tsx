import React from "react"
import Footer from "../components/Footer"
import HomepageCard from "../components/HomepageCard"
import Navbar from "../components/Navbar"
import ScrollFilter from "../components/ScrollFilter"

function Homepage() {
  return (
    <div>
      <Navbar />
      <ScrollFilter />
      <HomepageCard />
      <Footer />
    </div>
  )
}

export default Homepage
