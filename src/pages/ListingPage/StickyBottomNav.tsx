

function StickyBottomNav({
  formattedStartDate,
  formattedendDate,
  priceTotal,
  pricePerNight,
}:any) {
  const displayTotal = priceTotal.toLocaleString("de-DE")
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex h-[80px] w-full items-center justify-between bg-white px-6 py-2 shadow md:hidden">
      <div>
        <p>
          <span className="mr-2 font-semibold">
            €
            {priceTotal > pricePerNight
              ? `${displayTotal}`
              : `${pricePerNight}`}
          </span>
          night
        </p>
        <p className="text-sm font-semibold underline underline-offset-2">
          {`${formattedStartDate} - ${formattedendDate}`}
        </p>
      </div>
      <button className="h-[48px] w-[110px] rounded-lg bg-[#DF1362] font-semibold text-white">
       Reserve
      </button>
    </div>
  )
}

export default StickyBottomNav
