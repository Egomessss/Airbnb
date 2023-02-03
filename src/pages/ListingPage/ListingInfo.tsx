import {
  FlagIcon,
  ShieldExclamationIcon,
  StarIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid"

import {
  ChevronRightIcon,
  LanguageIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline"
import ListingCarousel from "./ListingCarousel"
import ListingCarouselSpace from "./ListingCarouselSpace"
import Calendar from "../../components/Calendar"
import { FaMedal, FaCalendarAlt } from "react-icons/fa"
import { TbBeach } from "react-icons/tb"
import { SlDiamond } from "react-icons/sl"
import { CiLocationOn, CiCalendar } from "react-icons/ci"
import Info from "./Info"

import MobileBtn from "../../components/MobileBtn"
import CalendarMobile from "../../components/CalendarMobile"
import ReviewsCarousel from "./ReviewsCarousel"
import Map from "../../components/MapApi"
import MapApi from "../../components/MapApi"

function ListingInfo() {
  return (
    // Intro
    <div>
      <div className="py-6 flex flex-col gap-2">
        <div>
          <h1 className="font-semibold text-2xl">Luz Beach Rooftop</h1>
          <h1 className="font-semibold text-2xl">Penthouse</h1>
        </div>
        <div className="text-sm font-semibold">
          <ul className="flex gap-5 ">
            <li className="flex items-center">
              <StarIcon className="h-4" />
              4.89
            </li>
            <li className="font-semibold underline underline-offset-1">
              110 reviews
            </li>
            <li className="flex gap-1 items-center font-normal">
              <FaMedal className="h-3 " />
              Superhost
            </li>
          </ul>
          <p className=" font-semibold underline underline-offset-1 mt-1">
            Luz, Lagos, Faro, Portugal
          </p>
        </div>
      </div>

      {/* body */}
      {/* falta mudar o list style */}
      <Info>
        <div className="flex">
          <p>
            <span className="font-semibold">This is a rare find.</span> Pedro's
            place on Airbnb is usually fully booked.
          </p>
          <SlDiamond className="block h-[32px] w-[42px] fill-[#E31C5F]" />
        </div>
      </Info>

      <Info>
        <div className="flex justify-between mb-2">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Entire rental unit</h3>
            <h3 className="text-xl font-semibold">hosted by Pedro</h3>
          </div>
          <div className="relative">
            <img
              src="https://a0.muscache.com/im/pictures/user/1f9954af-c6cb-425d-b975-d2a7e32ea999.jpg?im_w=240"
              alt=""
              className="w-[54px] h-[54px] rounded-full"
            />
            <FaMedal className="text-2xl absolute text-yellow-500  z-20 bottom-1 -right-2" />
          </div>
        </div>

        <div className="text-sm">
          <ul className="flex gap-2">
            <li className="flex items-center">8 guests</li>
            <li>3 bedrooms</li>
            <li>4 beds</li>
            <li>3 bathrooms</li>
          </ul>
        </div>
      </Info>

      <Info>
        <ul className="flex flex-col gap-3">
          <li className="flex gap-3">
            <div>
              <FaMedal className="block h-[24px] w-[24px]" />
            </div>
            <div>
              <h4 className="font-semibold">Pedro is a Superhost</h4>
              <p className="text-sm text-gray-500">
                Superhosts are experienced, highly rated hosts who are commited
                to proving great stays for their guests
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <div>
              <CiLocationOn className="block h-[24px] w-[24px]" />
            </div>
            <div>
              <h4 className="font-semibold">Great location</h4>
              <p className="text-sm text-gray-500">
                95% of recent guests gave the location a 5-star rating
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <div>
              <CiCalendar className="block h-[24px] w-[24px]" />
            </div>

            <h4 className="font-semibold">Free cancellation for 48 hours</h4>
          </li>
        </ul>
      </Info>

      <Info>
        <img
          className="h-6 mb-4"
          src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
          alt="aircover"
        />
        <p className="text-sm mb-4 leading-4">
          Every booking includes free protection from Host cancellations,
          listing inaccuracies, and other issues like trouble checking in
        </p>
        <a
          href=""
          className="underline text-sm font-semibold"
        >
          Learn more
        </a>
      </Info>

      <div className="border-t-[1px] pt-8 pb-6">
        <div className="flex gap-2">
          <LanguageIcon className="block h-[24px] w-[18px]" />
          <div className="text-sm">
            <p>Some info has been automatically translated.</p>
            <a
              href=""
              className="underline font-semibold"
            >
              Show original language
            </a>
          </div>
        </div>
        <div className="pt-8">
          <p className="leading-5">
            With the best view of Vila da Luz, a wonderful exclusive terrace,
            Jacuzzi, 3 suites, a large and spacious room facing the sea and
            private elevator. Close to supermarkets, bars, restaurants, with the
            beach a 5-minute walk. Our Penthouse is a house you won't forget.
          </p>
          <a
            href=""
            className="flex items-center underline font-semibold pt-4"
          >
            Show more <ChevronRightIcon className="block h-5" />
          </a>
        </div>
      </div>

      <Info>
        <div>
          <h2 className="text-xl font-semibold mb-4">Where you'll sleep</h2>
          <ListingCarouselSpace />
        </div>
      </Info>
      {/* falta link */}
      <Info>
        <div>
          <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <TbBeach className="block h-[24px] w-[24px]" />
              <p>Beach access - Beachfront</p>
            </div>
            <div className="flex gap-2">
              <TbBeach className="block h-[24px] w-[24px]" />
              <p>Beach access - Beachfront</p>
            </div>
            <div className="flex gap-2">
              <TbBeach className="block h-[24px] w-[24px]" />
              <p>Beach access - Beachfront</p>
            </div>
            <div className="flex gap-2">
              <TbBeach className="block h-[24px] w-[24px]" />
              <p>Beach access - Beachfront</p>
            </div>
            <div className="flex gap-2">
              <TbBeach className="block h-[24px] w-[24px]" />
              <p>Beach access - Beachfront</p>
            </div>
          </div>
          <div className="mt-8">
            <MobileBtn
              text={"Show all 37 amenities"}
              link={""}
            />
          </div>
        </div>
      </Info>
      {/* adicionar mapa */}
      <Info>
        <div>
          <h2 className="text-xl font-semibold mb-4">Where you'll be</h2>
          <p className="mb-4">Luz, Lagos, Faro, Portugal</p>
          <div className="w-[342px] h-[218px] border-black border-2">
            <MapApi />
          </div>
        </div>
      </Info>

      <Info>
        <h2 className="text-xl font-semibold mb-4">7 nights in Luz, Lagos</h2>
        <p className="text-sm">30 may 2023-5 Jun 2023</p>

        <CalendarMobile />
        <button className="underline font-semibold text-sm">Clear dates</button>
      </Info>

      <Info>
        <div className="flex gap-2 font-semibold text-xl items-center mb-6">
          <StarIcon className="h-4" />
          <p> 4.89</p>
          <p>110 reviews</p>
        </div>

        <ReviewsCarousel />
        <MobileBtn text={"Show all 110 reviews"} />
      </Info>

      <Info>
        <div>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Hosted by Pedro</h2>
              <p className="text-sm text-gray-400">Joined in November 2015</p>
              <p className="text-sm text-gray-400">Professional Host</p>
            </div>

            <div className="relative">
              <img
                src="https://a0.muscache.com/im/pictures/user/1f9954af-c6cb-425d-b975-d2a7e32ea999.jpg?im_w=240"
                alt=""
                className="w-[54px] h-[54px] rounded-full"
              />
              <FaMedal className="text-2xl absolute text-yellow-500  z-20 bottom-1 -right-2" />
            </div>
          </div>

          <ul className="flex flex-col gap-3 mt-6 mb-10">
            <li className="flex gap-3 items-center">
              <StarIcon className="h-5 w-5" />
              <p>601 Reviews</p>
            </li>
            <li className="flex gap-3 items-center">
              <ShieldCheckIcon className="h-5 w-5" />
              <p>Identity verified</p>
            </li>
            <li className="flex gap-3 items-center">
              <FaMedal className="h-5 w-5" />
              <p>Superhost</p>
            </li>
          </ul>

          <div>
            <h3 className="font-semibold">Pedro is a Superhost</h3>
            <p>
              Superhosts are experienced, highly rated hosts who are committed
              to providing great stays for guests.
            </p>
            <div className="flex flex-col gap-3 my-6">
              <p>Policy number: 61658/AL</p>
              <p>Response rate: 98%</p>
              <p>Response time: Within an hour</p>
            </div>
          </div>

          <MobileBtn text={"Contact host"} />
          <div className="flex items-center">
            <p className="my-6 text-xs">
              To protect your payment, never transfer money or communicate
              outside of the Airbnb website or app.
            </p>
            <ShieldExclamationIcon className="h-10 w-10 text-[#F9D2DF]" />
          </div>
        </div>
      </Info>

      <Info>
        <div className="flex items-center">
          <div>
            <h2 className="text-xl font-semibold mb-4">Cancellation policy</h2>
            <p className="text-gray-500 text-sm mb-2">
              Free cancellation from 48 hours.
            </p>
            <p className="text-gray-500 text-sm">
              Review the Host's full cancellation policy which applies even if
              you cancel for illness or disruptions caused by COVID-19.
            </p>
          </div>
          <ChevronRightIcon className="h-5 w-12" />
        </div>
      </Info>

      <Info>
        <h2 className="text-xl font-semibold mb-2">House rules</h2>
        <div className="flex flex-col gap-2 mb-2">
          {" "}
          <p className="text-gray-500 text-sm">Check-in after 15:00</p>
          <p className="text-gray-500 text-sm">Checkout before 10:00</p>
          <p className="text-gray-500 text-sm">8 guests maximum</p>
        </div>
        <a
          className="underline font-semibold"
          href=""
        >
          Show more
        </a>
      </Info>

      <Info>
        <h2 className="text-xl font-semibold mb-4">Safety & property</h2>
        <div className="flex flex-col gap-2 mb-2">
          <p className="text-gray-500 text-sm">No smoke alarm</p>
          <p className="text-gray-500 text-sm">
            Nearby lake, river, other body of water
          </p>
          <p className="text-gray-500 text-sm">
            Carbon monoxide detector not required
          </p>
        </div>

        <a
          className="underline font-semibold"
          href=""
        >
          Show more
        </a>
      </Info>
      <Info>
        <div className="flex gap-4 items-center">
          <FlagIcon className="h-5" />
          <p className="underline font-semibold">Report this listing</p>
        </div>
      </Info>
      <div className="-mx-6 bg-gray-300 h-2"></div>

      <div className="py-6">
        <h2 className="text-xl font-semibold mb-8">
          Explore other options in and around Luz, Lagos
        </h2>
        <div>
          <ul className="text-gray-400 flex flex-wrap">
            <li className="w-[171px] h-[40px]">Albufeira</li>
            <li className="w-[171px] h-[40px]">Faro</li>
            <li className="w-[171px] h-[40px]">Comporta</li>
            <li className="w-[171px] h-[40px]">Costa da Caparica</li>
            <li className="w-[171px] h-[40px]">Lisboa</li>
            <li className="w-[171px] h-[40px]">Lisbon</li>
            <li className="w-[171px] h-[40px]">Sintra</li>
            <li className="w-[171px] h-[40px]">Ericeira</li>
            <li className="w-[171px] h-[40px]">Cádiz</li>
            <li className="w-[171px] h-[40px]">Tangier</li>
            <li className="w-[171px] h-[40px]">Tarifa</li>
            <li className="w-[171px] h-[40px]">Estepona</li>
          </ul>
        </div>
        <div>
          <ul className="text-sm flex gap-1">
            <li className="flex items-center gap-1 whitespace-nowrap">
              <a href="">Airbnb</a> <ChevronRightIcon className="h-3 w-3" />
            </li>
            <li className="flex items-center gap-1 whitespace-nowrap">
              <a href="">Portugal</a> <ChevronRightIcon className="h-3 w-3" />
            </li>
            <li className="flex items-center gap-1 whitespace-nowrap">
              <a href="">Faro District</a>{" "}
              <ChevronRightIcon className="h-3 w-3" />
            </li>
            <li className="flex items-center gap-1 whitespace-nowrap">
              <a href="">Praia da Luz</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ListingInfo
