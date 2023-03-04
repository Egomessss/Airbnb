import { GlobeAltIcon } from "@heroicons/react/24/outline"

function Footer() {
  return (
    <footer className="hidden inset-x-0 bottom-0 z-50 mx-auto border-t-[1px] border-gray-400 bg-white py-4 px-3 text-sm md:fixed md:flex md:items-center md:justify-between md:px-16">
      <a
        href="#"
        className="mr-4 hover:underline md:mr-6 "
      >
        © 2023 EG, Inc.
      </a>
<p className="font-semibold">The data contained in this web app is not true to reality as I don't
            have acess to the airbnb api its merely for representation using a
            custom json file, to show my abilities as a Frontend developer, the
            data that is relevant is properly arranged and managed.</p>
      <ul className="mt-3 flex flex-wrap items-center text-sm font-semibold sm:mt-0">
        <li className="flex items-center">
          <a
            href="#"
            className="mr-4 hover:underline md:mr-6 "
          >
            <GlobeAltIcon className="h-5 text-black" />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="mr-4 hover:underline md:mr-6 "
          >
            English(UK)
          </a>
        </li>
        <li>
          <a
            href="#"
            className="mr-4 hover:underline md:mr-6 "
          >
            € EUR
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
