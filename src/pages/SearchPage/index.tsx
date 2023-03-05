import { useEffect, useState } from "react"
import { MapIcon } from "@heroicons/react/24/solid"

import BottomNav from "../../components/BottomNav"

import Navbar from "../../components/Navbar/Navbar/Navbar"

import StickyButton from "../../components/StickyButton"
import SearchPagination from "./SearchPagination"

import Listings from "../../components/Listings"
import ListingData from "../../assets/ListingsData.json"
import { useLocation } from "react-router-dom"
import { format } from "date-fns"
import Footer from "../../components/Footer"
import NavMobile from "../../components/Navbar/Navbar/NavMobile"
import MapApi from "../../components/MapApi"

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

  const startDateParam = searchParams.get("startDate")
  const endDateParam = searchParams.get("endDate")

  // formats the dataparams into a human-readable format
  const formattedStartDate = startDateParam
    ? format(new Date(startDateParam), "PP")
    : ""
  const formattedEndDate = endDateParam
    ? format(new Date(endDateParam), "PP")
    : ""
  const startDate = startDateParam ? new Date(startDateParam) : null

  const endDate = endDateParam ? new Date(endDateParam) : null

  const daysInBetween = endDate && startDate
  ? Math.round((endDate.getTime() - startDate.getTime()) / 86400000)
  : 0;

  const guests = Number(guestsParam)

  // stores the filtered data
  const [filteredData, setFilteredData] = useState<any[]>([])

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
  const changePage = (pageNumber:number) => setCurrentPage(pageNumber)

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
      <Navbar resetFilter={null} />
      <NavMobile
        removeFixed={null}
        showFixed={null}
      />
      {/* left section in full and middle in mobile*/}
      <main className="flex md:relative ">
        {/* full screen listing data */}
        <div className="hidden px-4 md:inline-block lg:w-[60%]">
          <p className="py-4 text-sm font-medium">
            Over
            <span className="mr-2 font-semibold">{filteredData.length}</span>
            homes available between
            <span className="mx-2 font-semibold">{range}</span>
            <span className="mr-2 font-semibold">
              {locationParam ? `in ${locationParam}` : ""}
            </span>
            - for <span className="mr-2 font-semibold">{guestsParam}</span>
            {guests > 1 ? `guests` : `guest`}
          </p>
          <Listings
            days={daysInBetween}
            guests={guests}
            data={currentPosts}
          />

          <SearchPagination
            changePage={changePage}
            currentPage={currentPage}
            decrementPage={decrementPage}
            incrementPage={incrementPage}
            pageNumbers={pageNumbers}
          />
        </div>

        <div className="hidden w-full border-2 md:min-h-[995px] md:w-[40%] lg:inline-flex">
          <MapApi data={currentPosts} />
        </div>

        {/* open the map or the listing info */}
        {openMap ? (
          <div className="h-[700px] w-full md:hidden">
            <MapApi data={currentPosts} />
          </div>
        ) : (
          <div className="flex flex-col  px-4 md:hidden">
            <p className="py-4 text-sm font-medium">
              <span className="mr-2 font-semibold">{filteredData.length}</span>
              listings available between
              <span className="mx-2 font-semibold">{range}</span>
              <span className="mr-2 font-semibold">
                {locationParam ? `in ${locationParam}` : ""}
              </span>
              - for <span className="mr-2 font-semibold">{guestsParam}</span>
              {guests > 1 ? `guests` : `guest`}
            </p>

            <div className=" mb-32">
              <Listings
                days={daysInBetween}
                guests={guests}
                data={currentPosts}
              />
              <SearchPagination
                changePage={changePage}
                currentPage={currentPage}
                decrementPage={decrementPage}
                incrementPage={incrementPage}
                pageNumbers={pageNumbers}
              />
            </div>
          </div>
        )}
        <div className="md:hidden">
          <StickyButton
            openMap={openMap}
            flipText={toogleMap}
          />
        </div>
      </main>

      {/* mobile navigation */}
      <div className="sticky bottom-0 z-10 bg-white md:hidden">
        <BottomNav resetFilter={null} />
      </div>
      <Footer />
    </div>
  )
}

export default SearchPage
