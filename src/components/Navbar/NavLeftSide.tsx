import React from 'react'
import logo from "../assets/images/logo.png"
import logoMobile from "../assets/images/logoMobile.png"

function NavLeftSide() {
  return (
    <div className="flex justify-center items-center cursor-pointer">
          <img
            className="h-8 w-15 hidden lg:flex"
            src={logo}
            alt="logo"
          />
          <img
            className="h-8 w-15 md:flex lg:hidden"
            src={logoMobile}
            alt="logo"
          />
        </div>
  )
}

export default NavLeftSide