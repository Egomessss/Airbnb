import { StarIcon, TrophyIcon } from "@heroicons/react/24/solid"
import medal from "../assets/images/medal.png"
import React, { useState } from "react"
import {
  CalendarIcon,
  ChevronRightIcon,
  LanguageIcon,
  MapPinIcon,
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
              <TrophyIcon className="h-3 " />
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
          <div className="w-[342px] h-[218px] border-black border-2"></div>
        </div>
      </Info>

      <Info>
        <h2 className="text-xl font-semibold mb-4">7 nights in Luz, Lagos</h2>
        <p className="text-sm">30 may 2023-5 Jun 2023</p>

        <CalendarMobile
        />
        <button>Clear dates</button>
      </Info>

      <Info>
        <StarIcon className="h-4" />
        <p> 4.89</p>
        <p>110 reviews</p>
        <ListingCarouselSpace />
        <button>Show all 110 reviews</button>
      </Info>

      <Info>
        <div>
          <h2>Hosted by Pedro</h2>
          <p>Joined in November 2015</p>
          <p>Professional Host</p>
          <ul>
            <li>
              {" "}
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="block h-[24px] w-[24px]"
              >
                <path d="m16 17c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7 3.1340068-7 7-7zm0 2c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm9.6666667-18.66666667c1.0543618 0 1.9181651.81587779 1.9945142 1.85073766l.0054858.14926234v6.38196601c0 .70343383-.3690449 1.35080636-.9642646 1.71094856l-.1413082.0779058-9.6666667 4.8333334c-.5067495.2533747-1.0942474.2787122-1.6171466.0760124l-.1717078-.0760124-9.66666666-4.8333334c-.62917034-.3145851-1.04315599-.93418273-1.09908674-1.62762387l-.00648607-.16123049v-6.38196601c0-1.05436179.81587779-1.91816512 1.85073766-1.99451426l.14926234-.00548574zm0 2h-19.33333337v6.38196601l9.66666667 4.83333336 9.6666667-4.83333336z"></path>
              </svg>
              <p>Pedro is a Superhost</p>
              <p>
                Superhosts are experienced, highly rated hosts who are commited
                to proving great stays for their guests
              </p>
            </li>
            <li>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="block h-[24px] w-[24px]"
              >
                <path d="M16 0c6.627 0 12 5.373 12 12 0 6.337-3.814 12.751-11.346 19.257L16 31.82l-1.076-.932C7.671 24.509 4 18.218 4 12 4 5.423 9.397 0 16 0zm0 2C10.504 2 6 6.525 6 12c0 5.44 3.249 11.118 9.831 17.02l.169.149.576-.518c6.178-5.65 9.293-11.092 9.42-16.318L26 12c0-5.523-4.477-10-10-10zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
              </svg>
              <p>Great location</p>
              <p>95% of recent guests gave the location a 5-star rating</p>
            </li>
            <li>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="block h-[24px] w-[24px]"
              >
                <path d="m11.6667 0-.00095 1.666h8.667l.00055-1.666h2l-.00055 1.666 6.00065.00063c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323v15.91907c0 .4715696-.1664445.9258658-.4669028 1.2844692l-.1188904.1298308-8.7476886 8.7476953c-.3334303.3332526-.7723097.5367561-1.2381975.5778649l-.1758207.0077398h-12.91915c-2.68874373 0-4.88181754-2.1223321-4.99538046-4.7831124l-.00461954-.2168876v-21.66668c0-1.05436021.81587582-1.91815587 1.85073739-1.99450431l.14926261-.00548569 5.999-.00063.00095-1.666zm16.66605 11.666h-24.666v13.6673c0 1.5976581 1.24893332 2.9036593 2.82372864 2.9949072l.17627136.0050928 10.999-.0003.00095-5.6664c0-2.6887355 2.122362-4.8818171 4.7832071-4.9953804l.2168929-.0046196 5.66595-.0006zm-.081 8-5.58495.0006c-1.5977285 0-2.9037573 1.2489454-2.9950071 2.8237299l-.0050929.1762701-.00095 5.5864zm-18.586-16-5.999.00062v5.99938h24.666l.00065-5.99938-6.00065-.00062.00055 1.66733h-2l-.00055-1.66733h-8.667l.00095 1.66733h-2z"></path>
              </svg>
              <p>Free cancellation for 48 hours</p>
            </li>
          </ul>
          <ul>
            <li>Pedro is a Superhost</li>
            <li>
              Superhosts are experienced, highly rated hosts who are committed
              to providing great stays for guests.
            </li>
            <li>Policy number:61658/AL</li>
            <li>Response rate:98%</li>
            <li>Response time:within an hour</li>
          </ul>

          <button>Contact host</button>
          <p>
            To protect your payment, never transfer money or communicate outside
            of the Airbnb website or app.
          </p>
          <svg
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="block h-[24px] w-[24px]"
          >
            <g>
              <g stroke="none">
                <path
                  d="m25 5 .5846837.00517475c4.2905015.07574932 8.8374917.98334075 13.644943 2.73687823l.7703733.28794702v27.3705076l-.0084766.1301365c-.0392237.2994207-.2122236.5656263-.4699074.7230756l-.1154775.0605995-11.4234694 5.0774159c.0623636-.7458456-.0433445-1.4943022-.3209346-2.2783707-.2495178-.7044496-.7667703-1.7805075-1.0418654-2.3950548-1.9094732-4.1561789-3.9589781-8.3688465-6.0912876-12.5211487l-.3317555-.6369277c-.4686141-.9115826-.8248653-1.6297768-1.3147672-2.2052384-.743401-.8737317-1.7668654-1.3549948-2.8821508-1.3549948-1.1154695 0-2.1391179.4816323-2.8828868 1.3557332-.6050254.7114646-1.0306408 1.6819288-1.6457867 2.8412431-.4956822.9653459-.9868615 1.9338929-1.47282629 2.9041739l.00159179-19.0721502.769087-.28647781c4.798406-1.75037189 9.3373349-2.65799308 13.6207364-2.73688762z"
                  fill-opacity=".2"
                ></path>
                <path d="m25 1c5.5985197 0 11.5175072 1.27473768 17.7548231 3.81642897.7027419.28641855 1.1783863.94329535 1.2386823 1.69066764l.0064946.16143432v28.73197667c0 1.8999458-1.0758761 3.6285379-2.7638433 4.4721215l-.2054644.0969363-15.0427818 6.6856808c-.4614217.2050763-1.8621146.3276624-2.7955525.3430957l-.192358.0016581.0009065-1.0005013c.6483674-.0069073 1.2843321-.1330366 1.8784107-.3747752.8327784-.3388673 1.5457548-.8939986 2.0790671-1.5885618l13.2600311-5.8942194c1.023196-.4547538 1.7028179-1.4383245 1.7751735-2.5449525l.0064111-.1964822v-28.73197667l-.6916987-.27704554c-5.7517231-2.26330416-11.1871718-3.39148539-16.3083013-3.39148539-5.1211255 0-10.5565697 1.12817946-16.3082877 3.39148006l-.6917123.27707479-.00030284 24.49382405c-.68067737 1.4079172-1.34834149 2.8151846-2.00083161 4.2173468l.00113445-28.71117085c0-.81311953.4922453-1.5453083 1.24525131-1.85215622 6.23725069-2.54166294 12.15623339-3.81639863 17.75474869-3.81639863z"></path>
              </g>
              <path
                d="m15.999908 41.6930234.6867258-.8851772c1.5957359-2.0328613 2.5919668-3.8873951 2.9612752-5.511912.2804314-1.2318637.2318527-2.5167089-.4804505-3.5591688-.6801015-.9952012-1.8642067-1.5894421-3.1673665-1.5894421-1.3033438 0-2.487633.5940563-3.1675505 1.5890729-.7099111 1.039137-.761802 2.3201055-.4810025 3.5580612.3689403 1.6247015 1.3653552 3.4796045 2.9616432 5.5133888l.6867258.8851772.6447715.7192179c1.1495113 1.2599236 2.1735278 2.122579 3.2227536 2.7149739.8151649.4602182 1.6400823.7413704 2.4521191.8358878.8812245.1033783 1.7585848-.0123685 2.559765-.3383795 1.6422905-.6682672 2.8186673-2.1775911 3.0700251-3.9387151.1205267-.8438258.0264975-1.6854363-.2876078-2.572644-.2495178-.7044496-.7667703-1.7805075-1.0418654-2.3950548-1.9094732-4.1561789-3.9589781-8.3688465-6.0912876-12.5211487-.6486357-1.2222643-1.0477537-2.1388241-1.6465227-2.8421661-.743401-.8737317-1.7668654-1.3549948-2.8821508-1.3549948-1.1154695 0-2.1391179.4816323-2.8828868 1.3557332-.6050254.7114646-1.0306408 1.6819288-1.6457867 2.8412431-2.1326775 4.1534098-4.1819984 8.3660775-6.09128759 12.5211487-.28227155.6306079-.79308369 1.6933742-1.04168139 2.3948702-.3141053.8872077-.40813448 1.7288182-.28760784 2.5731978.25117384 1.7609394 1.42736664 3.2700787 3.06965711 3.9385305.81939715.3333951 1.69418134.4397272 2.55958102.3385641.81295679-.0948866 1.63805829-.3760388 2.45248709-.8360724 1.0492258-.5922103 2.0732422-1.4550503 3.2227536-2.7149739z"
                fill="none"
                stroke-width="2"
              ></path>
            </g>
          </svg>
        </div>
      </Info>

      <Info>
        <h2>Cancellation policy</h2>
        <p>Free cancellation from 48 hours.</p>
        <p>
          Review the Host's full cancellation policy which applies even if you
          cancel for illness or disruptions caused by COVID-19.
        </p>
      </Info>

      <Info>
        <h2>House rules</h2>
        <p>Ceck-in after 15:00</p>
        <p>Checkout before 10:00</p>
        <p>8 guests maximum</p>
        <a
          className="underline"
          href=""
        >
          Show more
        </a>
      </Info>

      <Info>
        <h2>Safety & property</h2>
        <p>No smoke alarm</p>
        <p>Nearby lake, river, other body of water</p>
        <p>Carbon monoxide detector not required</p>
        <a
          className="underline"
          href=""
        >
          Show more
        </a>
      </Info>
      <div>
        <h2>Explore other options in and around Luz, Lagos</h2>
        <div>
          <ul>
            <li>Albufeira</li>
            <li>Faro</li>
            <li>Comporta</li>
            <li>Costa da Caparica</li>
            <li>Lisboa</li>
            <li>Lisbon</li>
            <li>Sintra</li>
            <li>Ericeira</li>
            <li>Cádiz</li>
            <li>Tangier</li>
            <li>Tarifa</li>
            <li>Estepona</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ListingInfo
