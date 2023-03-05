import {
  HeartIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"

export default function BottomNav({ resetFilter }:any) {
  const aStyle =
    "w-[70px] focus:text-red-500 justify-center inline-block text-center"
  const iconStyle = "h-6 w-6 mx-2 inline-block mb-1"
  const spanStyle = "tab tab-explore block text-xs focus:text-black"

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex w-full items-center justify-center bg-white py-2 shadow md:hidden">
      <Link
        onClick={resetFilter}
        to="/"
      >
        <button aria-label="search">
         
          <MagnifyingGlassIcon className={iconStyle} />
          <span className={spanStyle}>Explore</span>
        </button>
      </Link>
      <button aria-label="favorite" className={aStyle}>
        <HeartIcon className={iconStyle} />
        <span className={spanStyle}>Wishlist</span>
      </button>
      <button aria-label="account" className={aStyle}>
        <UserCircleIcon className={iconStyle} />
        <span className={spanStyle}>Log in</span>
      </button>
    </div>
  )
}
