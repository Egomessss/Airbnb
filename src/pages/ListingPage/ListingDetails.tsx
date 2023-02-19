import {
  StarIcon,
  LanguageIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline"
import React from "react"
import { CiLocationOn, CiCalendar } from "react-icons/ci"
import { FaMedal } from "react-icons/fa"
import { SlDiamond } from "react-icons/sl"
import { TbBeach } from "react-icons/tb"
import CalendarMobile from "../../components/CalendarMobile"
import MobileBtn from "../../components/MobileBtn"
import Info from "./Info"

function ListingDetails() {
  return (
    <div className="md:max-w-[60%]">
      <div className="flex flex-col gap-2 py-6">
        <div>
          <h1 className="text-2xl font-semibold">Luz Beach Rooftop</h1>
          <h1 className="text-2xl font-semibold">Penthouse</h1>
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
            <li className="flex items-center gap-1 font-normal">
              <FaMedal className="h-3 " />
              Superhost
            </li>
          </ul>
          <p className=" mt-1 font-semibold underline underline-offset-1">
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
        <div className="mb-2 flex justify-between">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Entire rental unit</h3>
            <h3 className="text-xl font-semibold">hosted by Pedro</h3>
          </div>
          <div className="relative">
            <img
              src="https://a0.muscache.com/im/pictures/user/1f9954af-c6cb-425d-b975-d2a7e32ea999.jpg?im_w=240"
              alt=""
              className="h-[54px] w-[54px] rounded-full"
            />
            <FaMedal className="absolute bottom-1 -right-2  z-20 text-2xl text-yellow-500" />
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
          className="mb-4 h-6"
          src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
          alt="aircover"
        />
        <p className="mb-4 text-sm leading-4">
          Every booking includes free protection from Host cancellations,
          listing inaccuracies, and other issues like trouble checking in
        </p>
        <a
          href=""
          className="text-sm font-semibold underline"
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
              className="font-semibold underline"
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
            className="flex items-center pt-4 font-semibold underline"
          >
            Show more <ChevronRightIcon className="block h-5" />
          </a>
        </div>
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
          <div className="w-[342px] h-[218px] border-black border-2"></div>
        </div>
      </Info>

      <Info>
        <h2 className="text-xl font-semibold mb-4">7 nights in Luz, Lagos</h2>
        <p className="text-sm">30 may 2023-5 Jun 2023</p>
        <CalendarMobile />
        <button className="underline font-semibold text-sm">Clear dates</button>
      </Info>
      </div>
    </div>
  )
}

export default ListingDetails
