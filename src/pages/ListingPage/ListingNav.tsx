import {
  ArrowUpTrayIcon,
  ChevronLeftIcon,
  HeartIcon,
} from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom"

function ListingNav() {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <div className="flex h-[64px] items-center justify-between md:hidden">
      <button
        onClick={goBack}
        className="flex items-center"
      >
        <ChevronLeftIcon className="h-4" />
        <p className="text-sm font-semibold">Homes</p>
      </button>
      <div className="flex w-14 justify-around">
        <ArrowUpTrayIcon className="h-4" />
        <HeartIcon className="h-4" />
      </div>
    </div>
  )
}

export default ListingNav
