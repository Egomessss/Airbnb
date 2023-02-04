import React from "react"
import logo from "../../../assets/images/logo.png"
import logoMobile from "../../../assets/images/logoMobile.png"

function NavLeftSide() {
  return (
    <div className=" hidden md:flex justify-start items-center cursor-pointer h-[50px] w-[280px] min-w-[40px]">
      <img
        className="h-8 w-18 hidden lg:flex"
        src={logo}
        alt="logo"
      />
      <img
        className="h-8 w-18  hidden md:flex lg:hidden"
        src={logoMobile}
        alt="logo"
      />
    </div>
  )
}

export default NavLeftSide
