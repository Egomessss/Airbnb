import { GlobeAltIcon } from "@heroicons/react/24/outline"
import React from "react"
import Info from "./Info"

function FooterMobile() {
  return (
    <div className="bg-[#F7F7F7] -mx-6 md:-mx-20 md:px-20 px-6 mb-[80px] md:flex justify-between ">
      <Info>
        <h2 className="mb-2 font-semibold">Support</h2>
        <ul className="text-sm flex flex-col gap-2">
          <li>
            <a href="">Help Centre</a>
          </li>
          <li>
            <a href=""> AirCover</a>
          </li>
          <li>
            <a href=""> Supporting people with disabilities</a>
          </li>
          <li>
            <a href="">Cancellation options</a>
          </li>
          <li>
            <a href="">Our COVID-19 Response</a>
          </li>
          <li>
            <a href="">Report a neightbourhood concern</a>
          </li>
        </ul>
      </Info>
      <Info>
        <h2 className="mb-2 font-semibold">Community</h2>
        <ul className="text-sm flex flex-col gap-2">
          <li>
            <a href="">Airbnb.org: disaster relief housing</a>
          </li>
          <li>
            <a href="">Combating discrimination</a>
          </li>
        </ul>
      </Info>
      <Info>
        <h2 className="mb-2 font-semibold">Hosting</h2>
        <ul className="text-sm flex flex-col gap-2">
          <li>
            <a href="">Airbnb your home</a>
          </li>
          <li>
            <a href="">Aircover for Hosts</a>
          </li>
          <li>
            <a href="">Explore hositng resources</a>
          </li>
          <li>
            <a href="">Visit our community forum</a>
          </li>
          <li>
            <a href="">How to host responsibly</a>
          </li>
        </ul>
      </Info>
      <Info>
        <h2 className="mb-2 font-semibold">Airbnb</h2>
        <ul className="text-sm flex flex-col gap-2">
          <li>
            <a href="">Newsroom</a>
          </li>
          <li>
            <a href="">Learn about new features</a>
          </li>
          <li>
            <a href="">Letter from our founders</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Investors</a>
          </li>
          <li>
            <a href="">Gift cards</a>
          </li>
        </ul>
      </Info>
      <Info>
        <h2 className="mb-2 font-semibold flex items-center gap-4 text-sm">
          <span className="flex gap-1">
            <GlobeAltIcon className="h-5" /> English(GB)
          </span>
          <span>£ GBP</span>
        </h2>
        <p className="text-sm">© 2023 Airbnb, Inc.</p>
        <ul className="text-sm flex gap-6">
          <li>
            <a href="">Privacy</a>
          </li>
          <li>
            <a href="">Terms</a>
          </li>
          <li>
            <a href="">Sitemap</a>
          </li>
        </ul>
        <ul className="text-sm flex gap-6">
          {" "}
          <li>
            <a href="">UK Modern Slavery Act</a>
          </li>
          <li>
            <a href="">Company details</a>
          </li>
        </ul>
      </Info>
    </div>
  )
}

export default FooterMobile
