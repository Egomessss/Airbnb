import { useEffect, useState } from "react"
import BottomNav from "../../components/BottomNav"
import Footer from "../../components/Footer"
import Listings from "../../components/Listings"

import MapApi from "../../components/MapApi"
import Navbar from "../../components/Navbar/Navbar/Navbar"
import StickyButton from "../../components/StickyButton"
import SwipeCarouselFilter from "../../components/SwipeCarouselFilter"
import ListingData from "../../assets/ListingsData.json"
import { useLocation, useSearchParams } from "react-router-dom"

import NavMobile from "../../components/Navbar/Navbar/NavMobile"

function Homepage() {
  // opens and closes the mapbox map
  const [openMap, setOpenMap] = useState(false)

  // flips the state between true and false to open the map or the list
  const toogleMap = () => {
    setOpenMap((prevMode) => !prevMode)
  }

  //! filter params settings
  // acess the search params in the url
  const [searchParams, setSearchParams] = useSearchParams()

  // retrieves the value of the filter parameter from the searchParams object. The get method is used to retrieve the value of a parameter by its name.
  const filter = searchParams.get("filter")

  // sets the filter params for the swipecarousel
  function setFilter(filter) {
    setSearchParams({ filter: filter })
  }

  const location = useLocation()

  const [priceFilter, setPriceFilter] = useState({
    minPrice: Number(searchParams.get("minPrice")),
    maxPrice: Number(searchParams.get("maxPrice")),
  })

  // console.log(priceFilter)

  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(
    searchParams.get("selectedAmenities")?.split(",") || []
  )
  // console.log(selectedAmenities)

  const [superhost, setSuperhost] = useState(
    searchParams.get("superhost") === "true"
  )

  //! prices data

  // extract the prices from the data
  const prices = ListingData.map((item) => item.price_per_night)

  // sorts the prices from smallest to biggest
  prices.sort((a, b) => a - b)

  const lowestPrice = prices[0]

  const highestPrice = prices[prices.length - 1]

  //! filtered data

  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    const filteredDataParams = ListingData.filter((listing: any) => {
      const typeOfLocationMatch: boolean =
        !filter || listing.type_of_location === filter

      const priceMatch: boolean =
        listing.price_per_night >= priceFilter.minPrice &&
        listing.price_per_night <= priceFilter.maxPrice

      // function that takes an array of selected amenities (selectedAmenities) and a listing object (listing) as parameters and returns a boolean value indicating whether all the amenities in selectedAmenities are included in the listing.amenities array.
      const checkAmenitiesMatch = (
        selectedAmenities: string[],
        listing: any
      ): boolean => {
        const listingAmenities: any = listing.amenities

        const isAmenities: boolean = selectedAmenities.every((amenity) =>
          listingAmenities.includes(amenity)
        )
        return isAmenities
      }

      const amenitiesMatch: boolean = checkAmenitiesMatch(
        selectedAmenities,
        listing
      )
      // calls the checkamenities match with two arguments
      const superHostMatch: boolean = superhost && listing.isSuperhost

      return (
        typeOfLocationMatch && priceMatch && amenitiesMatch && superHostMatch
      )
    })
    // Set the filtered data in the state
    setFilteredData(filteredDataParams)
  }, [filter, priceFilter, selectedAmenities, superhost])

  // ! fixed elements toogle

  const [removeFixedElements, setRemoveFixedElements] = useState(true)

  // removes the sticky map button and bottom nav when the modal is open
  const removeFixed = () => setRemoveFixedElements(false)

  // shows the sticky map button and bottom nav when the modal is closed
  const showFixed = () => setRemoveFixedElements(true)

  // add blur to background
  const blur = () => {}

  return (
    <div className="relative px-6 md:px-20">
      <div className="sticky top-0 z-10 bg-white">
        <Navbar />
        <NavMobile
          showFixed={showFixed}
          removeFixed={removeFixed}
        />
        <SwipeCarouselFilter
          ListingData={ListingData}
          setFilter={setFilter}
        />
      </div>
      <div>
        {/* open the map with the sticky button and hides the homecards
      make a function for the button that opens and closes the map */}
        {openMap ? (
          <div className="h-[1000px] w-full">
            <MapApi />
          </div>
        ) : (
          // if no filter data is passed we render it normally
          // if filter data is passed we render the listings with the filter queries

          <Listings
            days={null}
            guests={null}
            data={filteredData}
          />
        )}
      </div>
      {removeFixedElements && (
        <div className="fixed bottom-0 z-30 mb-10 bg-white ">
          <StickyButton
            openMap={openMap}
            flipText={toogleMap}
          />
          <BottomNav />
        </div>
      )}
      <div className="mt-10">
        {" "}
        <Footer />
      </div>
    </div>
  )
}

export default Homepage
