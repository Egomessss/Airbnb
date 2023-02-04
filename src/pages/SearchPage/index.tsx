import React from 'react'
import { MapIcon } from "@heroicons/react/24/solid"

import BottomNav from "../../components/BottomNav"
import Footer from "../../components/Footer"

import Navbar from "../../components/Navbar/Navbar"
import StickyButton from "../../components/StickyButton"
import SwipeCarouselFilter from "../../components/SwipeCarouselFilter"
import ListingCard from '../../components/ListingCard'
import FooterMobile from '../ListingPage/FooterMobile'

function SearchPage() {
    return (
        <div className="relative">
          <div className="sticky top-0 z-10 bg-white">
            <Navbar />
            <SwipeCarouselFilter />
          </div>
          <ListingCard />
          <div className="sticky bottom-0 z-10 bg-white">
            <StickyButton />
            <BottomNav />
          </div>
    
          <FooterMobile />
        </div>
      )
}

export default SearchPage