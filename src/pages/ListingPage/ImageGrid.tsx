import React from "react"

function ImageGrid({thisListing}) {
 


  return (
    <div className="hidden  md:block">
      <ul className=" grid min-h-[400px] grid-cols-4 grid-rows-2 gap-2">
        <li className="col-span-2 row-span-2">
          <img
            className="min-h-[410px] object-cover"
            src={thisListing.image1}
            alt=""
          />
        </li>
        <li className="col-span-1 row-span-1">
          <img
            className="min-h-[200px]  object-cover"
            src={thisListing.image2}
            alt=""
          />
        </li>
        <li className="col-span-1 row-span-1">
          <img
            className="min-h-[200px]  object-cover"
            src={thisListing.image3}
            alt=""
          />
        </li>
        <li className="col-span-1 row-span-1">
          <img
            className="min-h-[200px]  object-cover"
            src={thisListing.image4}
            alt=""
          />
        </li>
        <li className="col-span-1 row-span-1">
          <img
            className="min-h-[200px]  object-cover"
            src={thisListing.image5}
            alt=""
          />
        </li>
      </ul>
    </div>
  )
}

export default ImageGrid

