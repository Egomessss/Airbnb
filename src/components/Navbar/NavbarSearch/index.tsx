import { Fragment, useState } from "react"
import { Dialog, Transition, Popover } from "@headlessui/react"

import NavLeftSide from "../Navbar/NavLeftSide"
import NavRightSide from "../Navbar/NavRightSide"

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline"

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline"

import SearchInputModal from "./SearchInputModal"

import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file
import { DateRangePicker } from "react-date-range"
import { createSearchParams, Link, useSearchParams } from "react-router-dom"
import useDebounce from "../../../hooks/useDebounce"
import { format } from "date-fns"

export default function NavbarSearchDrawer({ open, setOpen }: any) {
  // ! destination autocomplete pop over data
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

  // !checkin/out and calendar data
  const [openChooseDates, setOpenChooseDates] = useState(false)

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
  const handleSelection = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }
  // formats the data so it can be shown in the navbar when a user select from the range picker
  const formattedStartDate = format(new Date(startDate), "dd MMM")
  const formattedendDate = format(new Date(endDate), "dd MMM")
  //! Guest popover data

  const [adultGuests, setAdultsGuests] = useState(1)

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

  // search query

  const router = useSearchParams()
  console.log(router.entries)

  return (
    <Transition.Root
      show={open}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-10"
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-30 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed top-0 flex max-w-full ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                {/* Content */}
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <div className="hidden h-[160px] w-screen flex-col bg-white py-4 px-20 shadow-xl md:flex">
                    {/* top section of searchnavbar drawer */}
                    <div className="flex w-full justify-between ">
                      <NavLeftSide />
                      <NavRightSide />
                    </div>

                    {/* Middle section of searchnavbar drawer */}
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
                          {searchInput && (
                            <SearchInputModal searchValue={searchInput} />
                          )}
                        </div>

                        {/* checkin popover */}

                        <div className="flex w-[35%] items-center justify-start">
                          <Popover className="relative w-full rounded-full border-gray-300 hover:bg-gray-300">
                            {({ open }) => (
                              <>
                                <Popover.Button
                                  onClick={() => setOpenChooseDates(true)}
                                >
                                  <div className=" py-3 px-8 ">
                                    <p className="whitespace-nowrap text-xs font-semibold">
                                      Check in | Check out
                                    </p>
                                    <p className="whitespace-nowrap text-sm  text-gray-400">
                                      {formattedStartDate} - {formattedendDate}
                                    </p>
                                  </div>
                                  <XMarkIcon
                                    onClick={() => {
                                      setStartDate(new Date())
                                      setEndDate(new Date())
                                    }}
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
                                      <button
                                        onClick={() => setOpenChooseDates(true)}
                                        className=" flex  rounded-3xl bg-gray-300 px-4 py-2 text-sm font-semibold  "
                                      >
                                        Choose dates
                                      </button>

                                      {/* Choose dates */}
                                      {openChooseDates && (
                                        <div>
                                          <DateRangePicker
                                            minDate={new Date()}
                                           
                                            staticRanges={[]}
                                            inputRanges={[]}
                                            showDateDisplay={false}
                                            months={2}
                                            direction="horizontal"
                                            ranges={[selectionRange]}
                                            onChange={handleSelection}
                                          />
                                        </div>
                                      )}
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
                                  <div className="relative min-w-[80px]">
                                    <p className="text-left text-xs font-semibold">
                                      Who
                                    </p>
                                    <p className="w-18 whitespace-nowrap text-sm text-gray-400">
                                      {adultGuests > 0
                                        ? `${adultGuests} ${
                                            adultGuests > 1 ? `guests` : `guest`
                                          }`
                                        : `Add guests`}
                                    </p>
                                    <XMarkIcon
                                      onClick={() => setAdultsGuests(0)}
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
                                          <h2 className="font-semibold">
                                            Adults
                                          </h2>
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
                                          <h2 className="font-semibold">
                                            Children
                                          </h2>
                                          <p className="text-sm text-gray-400">
                                            Ages 2-12
                                          </p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                          <MinusIcon
                                            onClick={
                                              handleDecrementClickChildren
                                            }
                                            className="h-10 rounded-full border-2 p-2"
                                          />
                                          <p>{childrenGuests}</p>
                                          <PlusIcon
                                            onClick={
                                              handleIncrementClickChildren
                                            }
                                            className="h-10 rounded-full border-2 p-2"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex w-[350px] justify-between border-b-2 py-6">
                                        <div className="flex flex-col">
                                          <h2 className="font-semibold">
                                            Infants
                                          </h2>
                                          <p className="text-sm text-gray-400">
                                            Under 2
                                          </p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                          <MinusIcon
                                            onClick={
                                              handleDecrementClickInfants
                                            }
                                            className="h-10 rounded-full border-2 p-2"
                                          />
                                          <p>{infantsGuests}</p>
                                          <PlusIcon
                                            onClick={
                                              handleIncrementClickInfants
                                            }
                                            className="h-10 rounded-full border-2 p-2"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex w-[350px] justify-between py-6">
                                        <div className="flex flex-col">
                                          <h2 className="font-semibold">
                                            Pets
                                          </h2>
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
                              to={{
                                pathname: "/SearchPage",
                                search: `?${createSearchParams({
                                  location: searchInput,
                                  startDate: startDate.toISOString(),
                                  endDate: endDate.toISOString(),
                                  adultGuests,
                                })}`,
                              }}
                            >
                              <MagnifyingGlassIcon className="h-5 w-5" />
                              <p className="font-semibold md:hidden">Search</p>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
