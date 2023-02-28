import React, { useEffect, useState } from "react"
import { MapIcon } from "@heroicons/react/24/solid"

import BottomNav from "../../components/BottomNav"

import Navbar from "../../components/Navbar/Navbar/Navbar"

import SearchCard from "./SearchCard"
import MapApi from "../../components/MapApi"
import FooterSearchPage from "./FooterSearchPage"

import StickyButton from "../../components/StickyButton"
import SearchPagination from "./SearchPagination"

import Listings from "../../components/Listings"
import ListingData from "../../assets/ListingsData.json"
import { useLocation, useSearchParams } from "react-router-dom"
import { differenceInDays, format } from "date-fns"
import Footer from "../../components/Footer"

function SearchPage() {
  const [openMap, setOpenMap] = useState(false)

  // opens and closes the mapbox map
  const toogleMap = () => {
    setOpenMap((prevMode) => !prevMode)
  }

  //  url searchparams filter

  //  gets the current location object, which we store in the location variable.
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  // creates a new instance of the URLSearchParams object, passing in the search property of the location object.

  // gives us access to the query parameters, which we store in separate variables (locationParam, guestsParam, startDateParam, and endDateParam).

  const locationParam = searchParams.get("location")

  const guestsParam = searchParams.get("guests")
  console.log(guestsParam)

  const startDateParam = searchParams.get("startDate")
  const endDateParam = searchParams.get("endDate")

  // formats the dataparams into a human-readable format
  const formattedStartDate = format(new Date(startDateParam), "dd MMMM yy")
  const formattedEndDate = format(new Date(endDateParam), "dd MMMM yy")

  const startDate = new Date(startDateParam)
  const endDate = new Date(endDateParam)

  const daysInBetween = Math.round(
    (endDate.getTime() - startDate.getTime()) / 86400000
  )

  const guests = Number(guestsParam)
  

  // stores the filtered data
  const [filteredData, setFilteredData] = useState([])


  // use the useEffect hook to run the filtering logic whenever the query parameters change

  useEffect(() => {
    // filter the data based on the query parameters. We compare each item's properties (location, guests, start date, and end date) with the corresponding query parameters, and return only the items that match.
    const filteredDataParams = ListingData.filter((listing) => {
      // if locationparam is empty return everything if not return just the selected location
      const locationMatch = !locationParam || locationParam === listing.location

      // check if the number of guests parsed by the user is lesser or equal to the listing limit
      const guestMatch = guests <= listing.accommodates

      return locationMatch && guestMatch
    })
    // Set the filtered data in the state
    setFilteredData(filteredDataParams)
  }, [locationParam, guestsParam])
  // , guestsParam, startDateParam, endDateParam

  const range = `${formattedStartDate} and ${formattedEndDate}`



  // ! pagination

  // sets the current page and the post per page in the pagination component
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(4)

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  // fetches the data from the filtered json file
  const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost)

  // change page
  const changePage = (pageNumber) => setCurrentPage(pageNumber)

  const decrementPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const incrementPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  const pageNumbers = []

  // get us the amount of pages based on the total posts variable and postsperpage
  for (let i = 1; i <= Math.ceil(filteredData.length / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="md:px-10 ">
      <Navbar />

      {/* left section in full and middle in mobile*/}
      <main className="flex md:relative ">
        {/* full screen listing data */}
        <div className="hidden px-4 md:inline-block lg:w-[60%]">
          <p className="py-4 text-sm font-medium">
            Over <span className="font-semibold">{filteredData.length}</span>
            homes available between
            <span className="font-semibold">{range}</span>
            <span className="font-semibold">
              {locationParam ? `in ${locationParam}` : ""}
            </span>
            - for <span className="font-semibold">{guestsParam}</span>
            {guests > 1 ? `guests` : `guest`}
          </p>
          <Listings days={daysInBetween} guests={guests} data={currentPosts} />

          <SearchPagination
            changePage={changePage}
            currentPage={currentPage}
            decrementPage={decrementPage}
            incrementPage={incrementPage}
            pageNumbers={pageNumbers}
          />
        </div>

        <div className="hidden w-full border-2 md:min-h-[995px] md:w-[40%] lg:inline-flex">
          {/* <MapApi /> */}
        </div>

        {/* open the map or the listing info */}
        {openMap ? (
          <div className="flex flex-col px-4 md:hidden">
            <p className="pb-4 text-sm font-medium">
              Over {filteredData.length} homes available between {locationParam}
              {range} - for {guestsParam} guests
            </p>
            {/* changes thisssssssssssssssssssssssss */}
            <Listings days={daysInBetween} guests={guests} data={currentPosts} />
            <SearchPagination
              changePage={changePage}
              currentPage={currentPage}
              decrementPage={decrementPage}
              incrementPage={incrementPage}
              pageNumbers={pageNumbers}
            />
          </div>
        ) : (
          <div className="h-[700px] w-full md:hidden">{/* <MapApi /> */}</div>
        )}
        <div className="md:hidden">
          <StickyButton toogleMap={toogleMap} />
        </div>
      </main>

      {/* mobile navigation */}
      <div className="sticky bottom-0 z-10 bg-white md:hidden">
        <BottomNav />
      </div>
      <Footer/>
    </div>
  )
}

export default SearchPage
