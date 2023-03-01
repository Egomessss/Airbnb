import { useState } from "react"
import BottomNav from "../../components/BottomNav"
import Footer from "../../components/Footer"
import Listings from "../../components/Listings"

import MapApi from "../../components/MapApi"
import Navbar from "../../components/Navbar/Navbar/Navbar"
import StickyButton from "../../components/StickyButton"
import SwipeCarouselFilter from "../../components/SwipeCarouselFilter"
import ListingData from "../../assets/ListingsData.json"
import { useSearchParams } from "react-router-dom"

import NavMobile from "../../components/Navbar/Navbar/NavMobile"

function Homepage() {
  // opens and closes the mapbox map
  const [openMap, setOpenMap] = useState(false)

  // flips the state between true and false to open the map or the list
  const toogleMap = () => {
    setOpenMap((prevMode) => !prevMode)
  }

  //! filter settings
  // acess the search params in the url
  const [searchParams, setSearchParams] = useSearchParams()

  // retrieves the value of the filter parameter from the searchParams object. The get method is used to retrieve the value of a parameter by its name.
  const filter = searchParams.get("filter")

  // sets the filter params for the swipecarousel
  function setFilter(filter) {
    setSearchParams({ filter: filter })
  }

  const [removeFixedElements, setRemoveFixedElements] = useState(true)

  // removes the sticky map button and bottom nav when the modal is open
  const removeFixed = () => setRemoveFixedElements(false)

    // shows the sticky map button and bottom nav when the modal is closed
  const showFixed = () => setRemoveFixedElements(true)

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
            data={ListingData.filter(
              (listing) => !filter || listing.type_of_location === filter
            )}
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

      <Footer />
    </div>
  )
}

export default Homepage
