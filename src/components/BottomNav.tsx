import {
  ChatBubbleOvalLeftIcon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline"

export default function BottomNav() {
  const aStyle =
    "w-[70px] focus:text-red-500 justify-center inline-block text-center"
  const iconStyle = "h-6 w-6 mx-2 inline-block mb-1"
  const spanStyle = "tab tab-explore block text-xs focus:text-black"
  return (
    <div className="flex justify-center items-center w-full md:hidden fixed inset-x-0 bottom-0 bg-white shadow py-2">
      <a
        href="#"
        className={aStyle}
      >
        <MagnifyingGlassIcon className={iconStyle} />
        <span className={spanStyle}>Explore</span>
      </a>
      <a
        href="#"
        className={aStyle}
      >
        <HeartIcon className={iconStyle} />
        <span className={spanStyle}>Wishlist</span>
      </a>
      <a
        href="#"
        className={aStyle}
      >
        <UserCircleIcon className={iconStyle} />
        <span className={spanStyle}>Log in</span>
      </a>
    </div>
  )
}
