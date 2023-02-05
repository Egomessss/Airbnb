import React from 'react'
import NavLeftSide from '../Navbar/NavLeftSide'
import NavRightSide from '../Navbar/NavRightSide'

function TopNavSearch() {
  return (
    <div className="h-[160px] w-full bg-white z-50">
    {/* top section */}
    <div className="flex justify-between w-full">
      <NavLeftSide />
      <div className="flex justify-center items-center w-[444px]">
        <ul className="flex justify-between items-center gap-6 font-medium">
          <li>
            <button className='hover:underline underline-offset-8 decoration-2 hover:text-gray-500'> Stays</button>
          </li>
          <li>
            <button className='hover:underline underline-offset-8 decoration-2 hover:text-gray-500'>Experiences</button>
          </li>
          <li>
            <button className='hover:underline underline-offset-8 decoration-2 hover:text-gray-500'>Online Experiences</button>
          </li>
        </ul>
      </div>
      <NavRightSide />
    </div>
    {/* Middle section */}
  </div>
  )
}

export default TopNavSearch