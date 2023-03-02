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

  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(
    searchParams.get("selectedAmenities")?.split(",") || []
  )

  const [superhost, setSuperhost] = useState(
    searchParams.get("superhost") === "true"
  )

  //! filtered data

  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    // filter the data based on the query parameters. We compare each item's properties (location, guests, start date, and end date) with the corresponding query parameters, and return only the items that match.
    const filteredDataParams = ListingData.filter((listing) => {
      const typeOfLocationMatch = !filter || listing.type_of_location === filter

      const priceMatch =
      priceFilter.minPrice < listing.price_per_night   
      &&
      priceFilter.maxPrice > listing.price_per_night  
      console.log(priceMatch)

      // const amenitiesMatch = (): boolean => {
      //   if (selectedAmenities.length > 0) {
      //     const listingAmenities = listing.amenities.split(",")
      //     return selectedAmenities.every((amenity) =>
      //       listingAmenities.includes(amenity)
      //     )
      //   }
      //   return true
      // }

      // const superHostMatch = superhost && !listing.isSuperhost

      return (
        typeOfLocationMatch && priceMatch
        //  && amenitiesMatch && superHostMatch
      )
    })
    // Set the filtered data in the state
    setFilteredData(filteredDataParams || ListingData)
  }, [filter, priceFilter, selectedAmenities, superhost])

  // const data = filteredData
  //     : ListingData

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

          <Listings data={filteredData} />
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
<div className="mt-10"> <Footer /></div>
     
    </div>
  )
}

export default Homepage
