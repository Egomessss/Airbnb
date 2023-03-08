import { Dialog, Transition } from "@headlessui/react";
import { AdjustmentsHorizontalIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import amenities from "../assets/amenities.json"
import ListingData from "../assets/ListingsData.json"

type FilterProps = { removeBottom: () => void }

export default function Filter({ removeBottom }: FilterProps) {

    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        document.body.style.overflow = "unset"
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
        removeBottom()
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
        <>
            <div className="flex items-center">
                <button aria-label="show filters"
                    onClick={openModal}
                    className="relative hidden items-center gap-1 rounded-xl border-2 p-3 font-semibold md:flex"
                >
                    <AdjustmentsHorizontalIcon className="h-5" />
                    <p className="text-xs">Filters</p>
                </button>
                {/* mobile */}
                <button className="md:hidden" aria-label="show filters" onClick={openModal} >
                    <AdjustmentsHorizontalIcon className="h-full w-5" />
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-50 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="md:fixed md:inset-0 md:bg-black/30" aria-hidden="true" />
                    {/* Full-screen scrollable container */}
                    <div className="fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                        {/* Container to center the panel */}
                        <div className="flex items-center justify-center p-4">
                            {/* The actual dialog panel  */}
                            <Dialog.Panel className="mx-auto h-[100dvh] md:w-[800px] md:rounded-lg md:h-[700px] lg:h-[1000px] md:overflow-y-scroll  bg-white md:shadow-xl  p-2 md:px-6 overflow-y-scroll ">
                                {/* header */}
                                <header>
                                    <div className="flex h-14 items-center justify-between border-b-2 ">
                                        <button
                                            aria-label="close"
                                            onClick={closeModal}
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
                                        <div className="flex items-center justify-center gap-2">
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
                                </header>
                                <main className="overflow-y-scroll md:overflow-y-hidden py-4">
                                    <h2 className=" pb-4 font-semibold">Amenities</h2>
                                    <ul className="flex w-full flex-wrap gap-4">
                                        {amenities.map((amenity, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="md:w-[48%] w-full"
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
                                </main>
                                <footer className="flex flex-col gap-4 h-[100px] border-t-[1px]">
                                    <div className="py-4 h-[80px]">
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
                                    <div className=" flex justify-between border-t-[1px] py-6">
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
                                                className=" flex  rounded-md bg-[#E21C61] p-2 font-semibold text-white"
                                            >
                                                Show
                                            </button>
                                        </Link>
                                    </div>

                                </footer>


                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
