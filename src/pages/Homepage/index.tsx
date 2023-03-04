import { useEffect, useState } from "react"
import BottomNav from "../../components/BottomNav"
import Footer from "../../components/Footer"
import Listings from "../../components/Listings"
import MapApi from "../../components/MapApi"
import Navbar from "../../components/Navbar/Navbar/Navbar"
import StickyButton from "../../components/StickyButton"
import SwipeCarouselFilter from "../../components/SwipeCarouselFilter"
import AlertModal from "../../components/AlertModal"
import ListingData from "../../assets/ListingsData.json"

import { useSearchParams } from "react-router-dom"

import NavMobile from "../../components/Navbar/Navbar/NavMobile"

function Homepage() {
  // state for the alert modal
  const [openModal, setOpenModal] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      setOpenModal(true)
    }, 2000)
  }, [])


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
  function setFilter(filter:any) {
    setSearchParams({ filter: filter })
  }

  // filter for the filter carousel
  const [filteredLocationData, setFilteredLocationData] = useState<any[]>([])

  // filter the ListingData based on the filterByLocation value
  useEffect(() => {
    // the filter method returns a new array with all elements that pass the test implemented by the provided function. In this case, the function checks if the type_of_location of each listing object matches the filterByLocation value
    const filteredLocationParam = ListingData.filter((listing: any) => {
      const typeOfLocationMatch: boolean =
        listing.type_of_location === filterByLocation

      return typeOfLocationMatch
    })

    // filteredLocationParam array is then stored in  state using the setFilteredLocationData function. This allows the filtered data to be accessed and rendered in the component.
    setFilteredLocationData(filteredLocationParam)
  }, [filterByLocation])

  // filters for the filter modal

  const [priceFilter] = useState({
    minPrice: Number(searchParams.get("minPrice")),
    maxPrice: Number(searchParams.get("maxPrice")),
  })



  const [selectedAmenities] = useState<string[]>(
    searchParams.get("selectedAmenities")?.split(",") || []
  )


  const [superhost] = useState<boolean>(
    searchParams.get("superhost") === "true"
  )

  const [filteredData, setFilteredData] = useState<any[]>([])
 

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

    // only filters the amentiies if the selected amenities filter conditions are equal to the selected listing
    if (selectedAmenities.length) {
      filteredDataParams = filteredDataParams.filter((listing: any) => {
        const listingAmenities: any = listing.amenities
        return selectedAmenities.every((amenity) =>
          listingAmenities.includes(amenity)
        )
      })
    }
    // only filters if the superhost filter conditions are equal to the selected listing
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
     {openModal && <AlertModal  close={() => setOpenModal(false)}/>}
      <div className="sticky top-0 z-10 bg-white">
        <Navbar resetFilter={() => setFilteredData(ListingData)} />
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
          <div className="h-[1020px] w-full">
            <MapApi
              data={filterByLocation ? filteredLocationData : filteredData}
            />
          </div>
        ) : (
          // if no filter data is passed we render it normally
          // if filter data is passed we render the listings with the filter queries
          <div className="pb-10">
            <Listings
              days={null}
              guests={null}
              data={filterByLocation ? filteredLocationData : filteredData}
            />
          </div>
        )}
      </div>
      {removeFixedElements && (
        <div className="fixed bottom-0 z-30 mb-10 bg-white ">
          <StickyButton
            openMap={openMap}
            flipText={toogleMap}
          />
          {/* resets the filter and passes the original data */}
          <BottomNav resetFilter={() => setFilteredData(ListingData)} />
        </div>
      )}
      <div className="mt-10">
     
        <Footer />
      </div>
    </div>
  )
}


export default Homepage
