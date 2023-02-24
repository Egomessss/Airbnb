import React, { useEffect, useState } from "react"
import { MapIcon } from "@heroicons/react/24/solid"

import BottomNav from "../../components/BottomNav"

import Navbar from "../../components/Navbar/Navbar/Navbar"

import SwipeCarouselFilter from "../../components/SwipeCarouselFilter"

import SearchCard from "./SearchCard"
import MapApi from "../../components/MapApi"
import FooterSearchPage from "./FooterSearchPage"

import StickyButton from "../../components/StickyButton"
import SearchPagination from "./SearchPagination"

import Listings from "../../components/Listings"
import ListingData from "../../assets/ListingsData.json"
import { useLocation, useSearchParams } from "react-router-dom"
import { format } from "date-fns"

function SearchPage() {
  const [openMap, setOpenMap] = useState(false)

  // opens and closes the mapbox map
  const toogleMap = () => {
    setOpenMap((prevMode) => !prevMode)
  }

 

  //! filter by location type settings
  // const [searchParams, setSearchParams] = useSearchParams()

  // const filter = searchParams.get("filter")

  // function setFilter(filter) {
  //   setSearchParams({ filter: filter })
  // }

  // const filteredData = currentPosts.filter((listing) => {
  //   !filter || listing.type_of_location === filter
  // })

  //  search params

  // const [searchParams, setSearchParams] = useSearchParams()
  // const startDate = searchParams.get("startDate")
  // const endDate = searchParams.get("endDate")

  // const location = searchParams.get("location")
  // const guests = searchParams.get("guests")
  // const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
  // const formattedendDate = format(new Date(endDate), "dd MMMM yy")

  // const range = `${formattedStartDate} - ${formattedendDate}`

  //  now i need to match this search params to the listing data and filter it
  // add the setFilter function the navbar

  // add an object query?

  // im flexible needs to return all
  //date needs to return two matchable string range?
  // guests needs to be

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  const locationParam = searchParams.get("location")
  console.log(locationParam)
  const guestsParam = searchParams.get("guests")

  const startDateParam = searchParams.get("startDate")
  const endDateParam = searchParams.get("endDate")
  const formattedStartDate = format(new Date(startDateParam), "dd MMMM yy")
  const formattedEndDate = format(new Date(endDateParam), "dd MMMM yy")

  const [filteredData, setFilteredData] = useState([])
  console.log(filteredData)


  useEffect(() => {
    // Filter the data based on the query parameters
    const filteredDataParams = ListingData.filter((item) => {
      return (
        item.location === locationParam 
        // && 
        // item.accommodates <= guestsParam
        // item.startDate >= startDateParam &&
        // item.endDate <= endDateParam
      )
    })
    // Set the filtered data in the state
    setFilteredData(filteredDataParams)
  }, [locationParam, guestsParam, startDateParam, endDateParam])



  const range = `${formattedStartDate} - ${formattedEndDate}`

  // const filteredParamsData = currentPosts.filter((listing) => {
  //   !filter || listing.type_of_location === filter ||
  //     listing.location === location
  // })


   // ! pagination
  // fetches the data from the json file
  const [posts] = useState(filteredData)

  // sets the current page and the post per page in the pagination component
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(4)

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  // console.log(currentPosts)
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

  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav className="md:px-10">
      {/* top section  Navigation and filter */}
      <Navbar />
      {/* <SwipeCarouselFilter
        ListingData={ListingData}
        setFilter={setFilter}
      /> */}

      {/* left section in full and middle in mobile*/}
      <main className="flex md:relative ">
        {/* full screen listing data */}
        <div className="hidden px-4 md:inline-block lg:w-[60%]">
          <p className="pb-4 text-sm font-medium">
            Over 8 homes in {locationParam} - {range} - for {guestsParam} guests
          </p>
          <Listings data={filteredData} />
          {/* <SearchCard currentPosts={currentPosts} /> */}
          <SearchPagination
            changePage={changePage}
            currentPage={currentPage}
            decrementPage={decrementPage}
            incrementPage={incrementPage}
            pageNumbers={pageNumbers}
          />
        </div>

        <div className="hidden w-full border-2 md:min-h-[980px] md:w-[40%] lg:inline-flex">
          {/* <MapApi /> */}
        </div>

        {/* open the map or the listing info */}
        {openMap ? (
          <div className="flex flex-col px-4 md:hidden">
            <p className="pb-4 text-sm font-medium">
              Over 8 homes in your search area
            </p>
            <SearchCard />
            <SearchPagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              changePage={changePage}
              currentPage={currentPage}
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
    </nav>
  )
}

export default SearchPage
