import React from "react"

function StickyBottomNav() {
  return (
    <div className="flex justify-between items-center w-full h-[80px] md:hidden fixed inset-x-0 bottom-0 bg-white shadow px-6 py-2">
      <div>
        <p>
          <span className="font-semibold"> £207</span>night
        </p>
        <a
          className="font-semibold underline underline-offset-2"
          href="#"
        >
          30 may-5 Jun
        </a>
      </div>

      <button className="bg-[#DF1362] w-[110px] h-[48px] text-white font-semibold rounded-lg">
        <a href="">Reserve</a>{" "}
      </button>
    </div>
  )
}

export default StickyBottomNav
