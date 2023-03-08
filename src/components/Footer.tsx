import { GlobeAltIcon } from "@heroicons/react/24/outline"

function Footer() {
  return (
    <footer className="inset-x-0 bottom-0 z-50 mx-auto hidden border-t-[1px] border-gray-400 bg-white py-4 px-3 text-sm md:fixed md:flex md:items-center md:justify-between md:px-10 lg:px-20">
      <p className=" hover:underline ">© 2023 EG, Inc.</p>
      <p className="font-semibold ">
        The data contained in this web app is not true to reality!
      </p>
      <ul className="mt-3 flex gap-3  items-center text-sm font-semibold sm:mt-0">
        <li >
          <GlobeAltIcon className="h-5 text-black" />
        </li>
        <li>
          <p className=" hover:underline  ">English(UK)</p>
        </li>
        <li>
          <p className=" hover:underline  ">€ EUR</p>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
