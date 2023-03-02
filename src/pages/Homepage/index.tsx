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

  // acess the search params in the url

  const [searchParams, setSearchParams] = useSearchParams()

  //! filter by location params settings
  // retrieves the value of the filter parameter from the searchParams object. The get method is used to retrieve the value of a parameter by its name.
  const filterByLocation = searchParams.get("filter")

  // sets the filter params for the swipecarousel
  function setFilter(filter) {
    setSearchParams({ filter: filter })
  }

  // filter for the filter carousel

  const [filteredLocationData, setFilteredLocationData] = useState([])

  useEffect(() => {
    const filteredLocationParam = ListingData.filter((listing: any) => {
      const typeOfLocationMatch: boolean =
        listing.type_of_location === filterByLocation

      return typeOfLocationMatch
    })
    // Set the filtered data in the state
    setFilteredLocationData(filteredLocationParam)
  }, [filterByLocation])

  // filters for the filter modal

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

  const [filteredData, setFilteredData] = useState([])
  console.log(filteredData)

  // executes a function when the component mounts and whenever the specified dependencies[priceFilter, selectedAmenities, superhost] change
  useEffect(() => {
    let filteredDataParams = ListingData

    // only filters if the price filter conditions are met
    if (priceFilter.minPrice && priceFilter.maxPrice) {
      filteredDataParams = filteredDataParams.filter((listing: any) => {
        return (
          listing.price_per_night >= priceFilter.minPrice &&
          listing.price_per_night <= priceFilter.maxPrice
        )
      })
    }

    // only filters if the selected amenities filter conditions are met
    if (selectedAmenities.length) {
      filteredDataParams = filteredDataParams.filter((listing: any) => {
        const listingAmenities: any = listing.amenities
        return selectedAmenities.every((amenity) =>
          listingAmenities.includes(amenity)
        )
      })
    }
    // only filters if the superhost filter conditions are met
    if (superhost) {
      filteredDataParams = filteredDataParams.filter((listing: any) => {
        return listing.isSuperhost
      })
    }
    // set the filtered data to the params if any is selected
    setFilteredData(filteredDataParams)
  }, [priceFilter, selectedAmenities, superhost])

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
            data={
              filterByLocation
                ? filteredLocationData
                : filteredData.length >1
                ? filteredData
                : ListingData
            }
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

// disclaimer the data and the images are merely placeholders to build this airbnb clone, the data here is just to serve the purpose of showing the functionality, the data that is relevant is properly arranged and managed

export default Homepage
