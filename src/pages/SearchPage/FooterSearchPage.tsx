import { GlobeAltIcon } from "@heroicons/react/24/outline"


function FooterSearchPage() {
  return (
    <div className="-mx-6 hidden justify-between bg-[#F7F7F7] px-6 md:-mx-20 md:flex md:px-20 ">
      <div className="border-t-[1px] pt-8 pb-6">
        <h2 className="mb-2 font-semibold">Support</h2>
        <ul className="flex flex-col gap-2 text-sm">
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
      </div>
      <div className="border-t-[1px] pt-8 pb-6">
        <h2 className="mb-2 font-semibold">Community</h2>
        <ul className="flex flex-col gap-2 text-sm">
          <li>
            <a href="">Airbnb.org: disaster relief housing</a>
          </li>
          <li>
            <a href="">Combating discrimination</a>
          </li>
        </ul>
      </div>
      <div className="border-t-[1px] pt-8 pb-6">
        <h2 className="mb-2 font-semibold">Hosting</h2>
        <ul className="flex flex-col gap-2 text-sm">
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
      </div>
      <div className="border-t-[1px] pt-8 pb-6">
        <h2 className="mb-2 font-semibold">Airbnb</h2>
        <ul className="flex flex-col gap-2 text-sm">
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
      </div>
      <div className="border-t-[1px] pt-8 pb-6">
        <h2 className="mb-2 flex items-center gap-4 text-sm font-semibold">
          <span className="flex gap-1">
            <GlobeAltIcon className="h-5" /> English(GB)
          </span>
          <span>£ GBP</span>
        </h2>
        <p className="text-sm">© 2023 Airbnb, Inc.</p>
        <ul className="flex gap-6 text-sm">
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
        <ul className="flex gap-6 text-sm">
          {" "}
          <li>
            <a href="">UK Modern Slavery Act</a>
          </li>
          <li>
            <a href="">Company details</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FooterSearchPage
