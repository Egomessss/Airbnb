import React from "react"
import HomepageCard from "../components/HomepageCard"
import Navbar from "../components/Navbar"
import ScrollFilter from "../components/ScrollFilter"

function Homepage() {
  return (
    <div>
      <Navbar />
      <ScrollFilter />
      <HomepageCard/>
    </div>
  )
}

export default Homepage
