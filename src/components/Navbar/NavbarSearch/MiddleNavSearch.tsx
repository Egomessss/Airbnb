import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline"

import { Popover, Transition } from "@headlessui/react"

import { Fragment, useState } from "react"

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline"
import GuestsPopOver from "./GuestsPopOver"

import SearchInputModal from "./SearchInputModal"

import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file
import { DateRangePicker } from "react-date-range"
import { Link } from "react-router-dom"

// add debounce function to the search bar so it waits for the user to complete inputting in the search bar before the search starts

function MiddleNavSearch() {
  // ! destination pop over data
  const data = [
    {
      id: 1,
      title: "I'm Flexible",
      link: "https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg",
    },
    {
      id: 2,
      title: "South America",
      link: "https://a0.muscache.com/im/pictures/06a30699-aead-492e-ad08-33ec0b383399.jpg?im_w=320",
    },
    {
      id: 3,
      title: "Spain",
      link: "https://a0.muscache.com/im/pictures/a0fd6dfc-6bec-4abb-850e-9ab78ed7bf37.jpg?im_w=320",
    },
    {
      id: 4,
      title: "Africa",
      link: "https://a0.muscache.com/im/pictures/7e9673a5-4164-4708-a047-8d281b5980e7.jpg?im_w=320",
    },
    {
      id: 5,
      title: "France",
      link: "https://a0.muscache.com/im/pictures/f0ece7c0-d9b2-49d5-bb83-64173d29cbe3.jpg?im_w=320",
    },
    {
      id: 6,
      title: "United States",
      link: "https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320",
    },
  ]
  // destionation popover
  const [destinationSelected, SetDestinationSelected] = useState(false)

  // !searchinput data
  // state for the inputbox
  const [searchInput, setSearchInput] = useState("")

  const resetInput = () => {
    setSearchInput("")
  }

  // sets the searchinput based on the user input and fetches the data accordingly
  const handleSearchInputChange = (e: any) => setSearchInput(e.target.value)

  console.log(
    fetch(
      "https://airbnb19.p.rapidapi.com/api/v1/searchDestination?query=Chicago&country=USA"
    )
  )

  // !checkin data
  const [openChooseDates, setOpenChooseDates] = useState(false)
  const [openFlexibleDates, setOpenFlexibleDates] = useState(false)

  const handleChooseDates = () => {
    setOpenChooseDates(true)
    setOpenFlexibleDates(false)
  }

  const handleFlexibleDates = () => {
    setOpenChooseDates(false)
    setOpenFlexibleDates(true)
  }

  const [dateIncrement, SetDateIncrement] = useState(0)

  // creates a start and end date starting from the current day so you can't go back
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  // stores the start and end date
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }

  // sets the start and end date in the calendar
  const handleSelection = (ranges: any) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  //! Guest popover data
  const [adultGuests, setAdultsGuests] = useState(0)

  const handleIncrementClickAdults = () => setAdultsGuests(adultGuests + 1)
  const handleDecrementClickAdults = () => setAdultsGuests(adultGuests - 1)

  const [childrenGuests, setChildrenGuests] = useState(0)

  const handleIncrementClickChildren = () =>
    setChildrenGuests(childrenGuests + 1)
  const handleDecrementClickChildren = () =>
    setChildrenGuests(childrenGuests - 1)

  const [infantsGuests, setInfantsGuests] = useState(0)

  const handleIncrementClickInfants = () => setInfantsGuests(infantsGuests + 1)
  const handleDecrementClickInfants = () => setInfantsGuests(infantsGuests - 1)

  const [petsGuests, setPetsGuests] = useState(0)

  const handleIncrementClickPets = () => setPetsGuests(petsGuests + 1)
  const handleDecrementClickPets = () => setPetsGuests(petsGuests - 1)

  return (
    <nav className="flex w-full justify-center py-4">
      <div className="hidden h-[65px] w-[820px] min-w-[700px] cursor-pointer items-center rounded-full border-[1px] border-gray-300 bg-white shadow hover:shadow-lg md:flex ">
        {/* destination popover */}
        {/* this onclick is supposed to invert the colors */}
        <div
          onClick={() => SetDestinationSelected(true)}
          className={
            destinationSelected
              ? "relative flex h-full w-[35%] flex-col items-center rounded-full bg-white"
              : "relative flex h-full w-[35%] flex-col items-center rounded-full"
          }
        >
          <Popover className="relative">
            {({ open }) => (
              <>
                <div className="flex flex-col items-center justify-center">
                  <Popover.Button className="mt-3 h-[20px] w-[200px] text-left text-xs font-semibold">
                    Where
                  </Popover.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute top-14 left-[80%] z-50 mt-5 w-screen max-w-sm -translate-x-1/2 transform ">
                    <div className="h-[470px] w-[494px] rounded-[40px] border-[1px] bg-white px-12 py-10">
                      <p className="mb-8 text-sm font-semibold">
                        Search by region
                      </p>
                      <div className="relative grid grid-cols-3 gap-y-7">
                        {data.map((img) => {
                          return (
                            <div>
                              <img
                                className="h-[122px] w-[122px] cursor-pointer rounded-xl border-[1px] hover:border-black"
                                alt={img.title}
                                src={img.link}
                              />
                              <p className="mt-2 text-xs font-medium">
                                Countryside
                              </p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <input
            className="w-[200px]  bg-inherit text-sm text-gray-500"
            id="searchInput"
            name="searchInput"
            type="text"
            onChange={handleSearchInputChange}
            placeholder="Search Destinations"
            value={searchInput}
          />
          <XMarkIcon
            onClick={resetInput}
            className="absolute top-5 right-4 h-6 w-6 rounded-full bg-gray-200 p-1 hover:bg-gray-300"
          />
          {/* shows the modal if the user has input anything in the input box */}
          {searchInput && <SearchInputModal />}
        </div>

        {/* checkin popover */}

        <div className="flex w-[35%] items-center justify-start">
          <Popover className="relative w-full rounded-full border-gray-300 hover:bg-gray-300">
            {({ open }) => (
              <>
                <Popover.Button onClick={() => setOpenChooseDates(true)}>
                  <div className=" py-4 px-8 ">
                    <p className="whitespace-nowrap text-xs font-semibold">
                      Check in | Check out
                    </p>
                    <p className="whitespace-nowrap text-sm  text-gray-400">
                      Add dates
                    </p>
                  </div>
                  <XMarkIcon
                    onClick={resetInput}
                    className="absolute top-5 right-2 h-6 w-6 rounded-full bg-gray-200 p-1 hover:bg-gray-300"
                  />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute right-[370px] z-50 mt-2 w-screen max-w-sm translate-x-1/2 ">
                    <div className="flex h-[470px] w-[820px] flex-col items-center justify-center rounded-[40px] border-[1px] bg-white px-12 py-10">
                      <div className="flex w-[300px] justify-between rounded-3xl bg-gray-300 p-1 ">
                        <button
                          onClick={handleChooseDates}
                          className="rounded-3xl bg-white py-2 px-5 text-sm font-semibold "
                        >
                          Choose dates
                        </button>
                        <button
                          onClick={handleFlexibleDates}
                          className="rounded-3xl bg-white py-2 px-5 text-sm font-semibold "
                        >
                          Flexible dates
                        </button>
                      </div>
                      {/* conditional render if i click the popover button set the choose dates to true
                      if i click the flexible dates it check the choose dates to false and the flexible dates to true */}

                      {/* Choose dates */}
                      {openChooseDates && (
                        <div>
                          <DateRangePicker
                            staticRanges={[]}
                            inputRanges={[]}
                            showDateDisplay={false}
                            months={2}
                            direction="horizontal"
                            ranges={[selectionRange]}
                            onChange={handleSelection}
                          />
                          <div className="mt-4 flex gap-4 text-xs">
                            <button className="hover:border-1 w-24 rounded-3xl border-[1px] px-2 py-[8px] hover:border-black">
                              Exact dates
                            </button>
                            <button className="hover:border-1 w-24 rounded-3xl border-[1px] px-2 py-[8px] hover:border-black">
                              ± 1 day
                            </button>
                            <button className="hover:border-1 w-24 rounded-3xl border-[1px] px-2 py-[8px] hover:border-black">
                              ± 2 days
                            </button>
                            <button className="hover:border-1 w-24 rounded-3xl border-[1px] px-2 py-[8px] hover:border-black">
                              ± 3 days
                            </button>
                            <button className="hover:border-1 w-24 rounded-3xl border-[1px] px-2 py-[8px] hover:border-black">
                              ± 7 days
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Flexible dates */}
                      {openFlexibleDates && (
                        <div className="flex flex-col gap-6">
                          <div className="height-[300px] p-[30px]">
                            <h1 className="text-lg font-semibold ">
                              How long would you like to stay?
                            </h1>
                            <div className=" flex items-center justify-center gap-2">
                              <button className="rounded-3xl border-[1px] p-2 hover:border-black">
                                Weekend
                              </button>
                              <button className="rounded-3xl border-[1px] p-2 hover:border-black">
                                Week
                              </button>
                              <button className="rounded-3xl border-[1px] p-2 hover:border-black">
                                Month
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <h1 className="text-lg font-semibold">
                              When do You want to go?
                            </h1>
                          </div>
                        </div>
                      )}
                      <div></div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>

        {/* Guest popover */}

        <div className="flex h-full w-[30%]  items-center justify-center gap-12 rounded-full hover:bg-gray-300">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button>
                  <div className="relative">
                    <p className="text-left text-xs font-semibold">Who</p>
                    <p className="whitespace-nowrap text-sm text-gray-400">
                      Add guests
                    </p>
                    <XMarkIcon
                      onClick={resetInput}
                      className="absolute top-1 left-[85px] h-6 w-6 rounded-full bg-gray-200 p-1 hover:bg-gray-300"
                    />
                  </div>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute right-8 z-50 mt-6 w-screen max-w-sm translate-x-1/2 ">
                    <div className="flex h-[400px] w-[405px] flex-col items-center justify-center rounded-[40px] border-[1px] bg-white px-12 py-10">
                      <div className="flex w-[350px] justify-between border-b-2 py-6">
                        <div className="flex flex-col">
                          <h2 className="font-semibold">Adults</h2>
                          <p className="text-sm text-gray-400">
                            Ages 13 or above
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <MinusIcon
                            onClick={handleDecrementClickAdults}
                            className="h-10 rounded-full border-2 p-2"
                          />
                          <p>{adultGuests}</p>
                          <PlusIcon
                            onClick={handleIncrementClickAdults}
                            className="h-10 rounded-full border-2 p-2"
                          />
                        </div>
                      </div>
                      <div className="flex w-[350px] justify-between border-b-2 py-6">
                        <div className="flex flex-col">
                          <h2 className="font-semibold">Children</h2>
                          <p className="text-sm text-gray-400">Ages 2-12</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <MinusIcon
                            onClick={handleDecrementClickChildren}
                            className="h-10 rounded-full border-2 p-2"
                          />
                          <p>{childrenGuests}</p>
                          <PlusIcon
                            onClick={handleIncrementClickChildren}
                            className="h-10 rounded-full border-2 p-2"
                          />
                        </div>
                      </div>
                      <div className="flex w-[350px] justify-between border-b-2 py-6">
                        <div className="flex flex-col">
                          <h2 className="font-semibold">Infants</h2>
                          <p className="text-sm text-gray-400">Under 2</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <MinusIcon
                            onClick={handleDecrementClickInfants}
                            className="h-10 rounded-full border-2 p-2"
                          />
                          <p>{infantsGuests}</p>
                          <PlusIcon
                            onClick={handleIncrementClickInfants}
                            className="h-10 rounded-full border-2 p-2"
                          />
                        </div>
                      </div>
                      <div className="flex w-[350px] justify-between py-6">
                        <div className="flex flex-col">
                          <h2 className="font-semibold">Pets</h2>
                          <a className="text-sm font-semibold text-gray-400 underline">
                            Bringing a service animal?
                          </a>
                        </div>
                        <div className="flex items-center gap-4">
                          <MinusIcon
                            onClick={handleDecrementClickPets}
                            className="h-10 rounded-full border-2 p-2"
                          />
                          <p>{petsGuests}</p>
                          <PlusIcon
                            onClick={handleIncrementClickPets}
                            className="h-10 rounded-full border-2 p-2"
                          />
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <button className="flex h-[50px] items-center  justify-center rounded-3xl bg-[#DA0A64] text-white md:w-[50px] lg:w-[90px]">
            <Link
              className="flex gap-2"
              to={"/SearchPage"}
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
              <p className="font-semibold md:hidden">Search</p>
            </Link>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default MiddleNavSearch
