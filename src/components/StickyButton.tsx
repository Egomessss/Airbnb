import { MapIcon } from "@heroicons/react/24/solid"


function StickyButton({ flipText, openMap }:any) {
  
  return (
    <div className="fixed bottom-[4rem] left-1/2 z-30 -translate-x-1/2 md:bottom-[7rem]">
      <button
        onClick={flipText}
        className="flex h-[38px] w-[90px] items-center justify-center	gap-2 rounded-3xl bg-[#222222] p-2 text-sm text-white hover:scale-105 md:h-[48px] md:w-[132px]"
      >
        <p className=" hidden md:block">
          {openMap === false ? "Show Map" : "Show list"}
        </p>
        <p className="md:hidden">{openMap === false ? "Map" : "List"}</p>
        <MapIcon className="h-5" />
      </button>
    </div>
  )
}

export default StickyButton
