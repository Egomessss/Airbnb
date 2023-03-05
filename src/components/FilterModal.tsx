import { XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { Link } from "react-router-dom"
import amenities from "../assets/amenities.json"
import ListingData from "../assets/ListingsData.json"

function FilterModal({ closeFilterDropdown }: any) {
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
  const handlePriceFilterChange = (e: any) => {
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
    <div className="absolute top-0 h-[calc(100vh-56px)] w-full overflow-auto rounded-lg border-[1px] bg-white px-4 md:top-44 md:h-[600px] md:w-[600px] ">
      <div className="flex h-14 items-center justify-between border-b-2 ">
        <button
          aria-label="close"
          onClick={closeFilterDropdown}
        >
          <XMarkIcon className="h-5" />
        </button>
        <p>Filters</p>
        {/* empty html tag so we can justify between technique utilized by the airbnb folks */}
        <p></p>
      </div>
      {/* price filter */}
      <div className="h-[170px] border-b-2">
        <h2 className=" pt-4 font-semibold">Price range</h2>
        <p>The average nightly price is €{medianPrice}</p>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <div className="relative py-4">
              <p className="absolute p-2 text-xs text-gray-400">min price €</p>
              <input
                className="h-14  w-full min-w-[125px] rounded-lg border-[1px] pt-2 pl-2"
                type="number"
                name="minPrice"
                min={lowestPrice}
                value={priceFilter.minPrice}
                onChange={handlePriceFilterChange}
              />
            </div>
            <p>-</p>
            <div className="relative">
              <p className="absolute p-2 text-xs text-gray-400">max price €</p>
              <input
                className="h-14 w-full min-w-[125px] rounded-lg border-[1px] pt-2 pl-2"
                type="number"
                name="maxPrice"
                max={highestPrice}
                value={priceFilter.maxPrice}
                onChange={handlePriceFilterChange}
              />
            </div>
          </div>
        </div>
      </div>
      {/* amenities section */}
      <div className="py-4">
        <h2 className=" pb-4 font-semibold">Amenities</h2>
        <ul className="flex w-full flex-wrap gap-4">
          {amenities.map((amenity, index) => {
            return (
              <li
                key={index}
                className="w-[250px] "
              >
                <label
                  key={index}
                  className="flex items-center gap-3"
                >
                  {/* creates a list of checkboxes for the amneties */}
                  <input
                    className="h-5 w-5"
                    type="checkbox"
                    value={amenity}
                    checked={selectedAmenities.includes(amenity)}
                    onChange={(e) =>
                      e.target.checked
                        ? // If the checkbox is checked , the setSelectedAmenities function is called with a new array that includes the current amenity in addition to the existing selected amenities.
                          setSelectedAmenities([...selectedAmenities, amenity])
                        : // If the checkbox is unchecked , the setSelectedAmenities function is called with a new array that excludes the current amenity.
                          setSelectedAmenities(
                            // If a is not equal to amenity, the element is included in the new array. If a is equal to amenity, the element is excluded from the new array.
                            selectedAmenities.filter((a) => a !== amenity)
                          )
                    }
                  />
                  {amenity}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
      {/* top tier section */}
      <div className="py-4">
        <h2 className="font-semibold">Top-tier stays</h2>
        <label className="flex items-center gap-3 pt-4">
          <input
            className="h-5 w-5"
            type="checkbox"
            value="Superhost"
            checked={superhost}
            onChange={(e) => setSuperhost(e.target.checked)}
          />
          Superhost
        </label>
      </div>
      <div className="bottom-0 z-50 -mx-4 flex items-center justify-between rounded-lg border-t-[1px] bg-white py-4  px-4 shadow-xl">
        <button
          aria-label="clear all filters"
          onClick={clearFilters}
          className="font-semibold underline"
        >
          Clear all
        </button>
        <Link
          to="/"
          onClick={handleSubmit}
        >
          <button
            aria-label="show filters"
            className=" flex w-[100px] rounded-md bg-[#E21C61] p-2 font-semibold text-white"
          >
            Show
          </button>
        </Link>
      </div>
    </div>
  )
}

export default FilterModal
