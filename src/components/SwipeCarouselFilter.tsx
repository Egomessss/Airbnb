import { useState } from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
// import required modules
import { Navigation } from "swiper"

import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline"

import ListingData from "../assets/ListingsData.json"
import filters from "../assets/filters.json"

import { Link } from "react-router-dom"
import FilterModal from "./FilterModal"
// each search parameter needs to match their title to the search query

function SwipeCarouselFilter(props:any) {
  const [openFilterDropdown, setOpenFilterDropdown] = useState(false)

  // prevents scrolling when modal is open
  const showFilterModal = () => {
    setOpenFilterDropdown(true)
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden"
    }
  }

  // price breakdown

  // extract the prices from the data
  const prices = ListingData.map((item) => item.price_per_night)

  // sorts the prices from smallest to biggest
  prices.sort((a, b) => a - b)

  const lowestPrice = prices[0]

  const highestPrice = prices[prices.length - 1]

  let medianPrice

  // Calculate the median price as the middle element of the sorted array. If the length of the array is even, use average of the two middle elements.
  const middle = Math.floor(prices.length / 2)
  if (prices.length % 2 === 0) {
    medianPrice = prices[middle - 1] + prices[middle] / 2
  } else {
    medianPrice = prices[middle]
  }

  const [priceFilter, setPriceFilter] = useState({
    minPrice: lowestPrice,
    maxPrice: highestPrice,
  })

  // updates the state of priceFilter when either of the input fields is changed.
  const handlePriceFilterChange = (e:any) => {
    let { name, value } = e.target

    // Validate max price input
    if (name === "maxPrice" && value > highestPrice) {
      // Set max price to the highest allowed value
      value = highestPrice
    }

    // the parseInt prevent the leading 0 on the inputs
    setPriceFilter({ ...priceFilter, [name]: parseInt(value, 10) })
  }

  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])

  const [superhost, setSuperhost] = useState(false)

  // clear the filters
  const clearFilters = () => {
    setPriceFilter({
      minPrice: lowestPrice,
      maxPrice: highestPrice,
    })
    setSelectedAmenities([])
    setSuperhost(false)
  }

  // handle the search params submission to filter the homepage listings
  const handleSubmit = () => {
    const searchParams = new URLSearchParams()
    // Only append parameters if at least one filter is being used
    if (priceFilter.minPrice && priceFilter.maxPrice) {
      searchParams.append("minPrice", priceFilter.minPrice.toString())
      searchParams.append("maxPrice", priceFilter.maxPrice.toString())
    }

    if (selectedAmenities.length > 0) {
      searchParams.append("selectedAmenities", selectedAmenities.join(","))
    }

    if (superhost) {
      searchParams.append("superhost", superhost.toString())
    }

    // Redirect to search results page with query parameters as state
    window.location.href = `/?${searchParams.toString()}`
  }

  return (
    <div className="mx-auto hidden w-[600px] items-center justify-center gap-2 py-6 md:flex">
      <Swiper
        slidesPerView="auto"
        spaceBetween={60}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide className="my-2 flex h-[51px] w-[77px]  flex-col flex-wrap items-center justify-center decoration-2 underline-offset-8 hover:underline hover:decoration-gray-300  focus:underline focus:decoration-black">
          {/* get a random number as links to the random listing */}
          <Link
            to={`/ListingPage/${
              ListingData[Math.floor(Math.random() * ListingData.length)].id
            }`}
            className="flex flex-col items-center justify-center"
          >
            <img
              className="h-[28px] w-[28px]"
              alt=""
              src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
            />
            <p className="mt-1 whitespace-nowrap text-xs">Surprise me</p>
          </Link>
        </SwiperSlide>
        {filters.map((data) => {
          return (
            <SwiperSlide
              key={data.id}
              className="my-2 flex h-[51px] w-[77px]  flex-col flex-wrap items-center justify-center decoration-2 underline-offset-8 hover:underline hover:decoration-gray-300  focus:underline focus:decoration-black"
            >
              <button
                onClick={() => props.setFilter(`${data.title}`)}
                className="flex w-full flex-col items-center justify-center"
              >
                <img
                  className="h-[28px] w-[28px]"
                  alt={data.title}
                  src={data.link}
                />
                <p className="mt-1 whitespace-nowrap text-xs">{data.title}</p>
              </button>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <button
        onClick={showFilterModal}
        className="relative hidden items-center gap-1 rounded-xl border-2 p-3 font-semibold md:flex"
      >
        <AdjustmentsHorizontalIcon className="h-5" />
        <p className="text-xs">Filters</p>
      </button>
      {openFilterDropdown && (
        <FilterModal closeFilterDropdown={() => setOpenFilterDropdown(false)} />
      )}
    </div>
  )
}

export default SwipeCarouselFilter

//! how i got the amenities data

// const amenities = [
//   "Kitchen",
//   "Wifi",
//   "TV",
//   "Essentials",
//   "Heating",
//   "Air conditioning",
//   "Washer",
//   "Dryer",
//   "Free parking on premises",
//   "Hot tub",
//   "Gym",
//   "Pool",
//   "Pets allowed",
//   "Suitable for events",
//   "Smoking allowed",
//   "Wheelchair accessible",
//   "Elevator",
//   "Fire extinguisher",
//   "Carbon monoxide detector",
//   "Smoke detector",
//   "First aid kit",
//   "Safety card",
//   "Lock on bedroom door",
//   "Private bathroom",
//   "Bed linens",
//   "Extra pillows and blankets",
//   "Shampoo",
//   "Hangers",
//   "Hair dryer",
//   "Iron",
//   "Laptop-friendly workspace",
// ]

// function getRandomAmenities(num) {
//   const randomAmenities = new Set(); //  prevents duplicates

//   while (randomAmenities.size < num) { // loops until we have enough unique amenities
//     const randomIndex = Math.floor(Math.random() * amenities.length);
//     randomAmenities.add(amenities[randomIndex]);
//   }

//   return Array.from(randomAmenities); // convert the Set to an array before returning it
// }
