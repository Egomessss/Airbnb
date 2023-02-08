import React from "react"
import { Link } from "react-router-dom"
import logo from "../../../assets/images/logo.png"
import logoMobile from "../../../assets/images/logoMobile.png"

function NavLeftSide() {
  return (
    <div className=" hidden h-[50px] w-[280px] min-w-[40px] cursor-pointer items-center justify-start md:flex">
      <link
        rel="stylesheet"
        href=""
      />
      <Link to="/">
        <img
          className="w-18 hidden h-8 lg:flex"
          src={logo}
          alt="logo"
        />
        <img
          className="w-18 hidden  h-8 md:flex lg:hidden"
          src={logoMobile}
          alt="logo"
        />
      </Link>
    </div>
  )
}

export default NavLeftSide
