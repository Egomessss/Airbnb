import React from "react"

function ImageGrid({thisListing}:any) {
 


  return (
    <div className="hidden  md:block">
      <ul className=" grid min-h-[400px] grid-cols-4 grid-rows-2 gap-2">
        <li className="col-span-2 row-span-2">
          <img
            className="min-h-[410px] object-cover"
            src={thisListing.image1}
            alt={thisListing.city}
          />
        </li>
        <li className="col-span-1 row-span-1">
          <img
            className="min-h-[200px]  object-cover"
            src={thisListing.image2}
            alt={thisListing.city}
          />
        </li>
        <li className="col-span-1 row-span-1">
          <img
            className="min-h-[200px]  object-cover"
            src={thisListing.image3}
            alt={thisListing.city}
          />
        </li>
        <li className="col-span-1 row-span-1">
          <img
            className="min-h-[200px]  object-cover"
            src={thisListing.image4}
            alt={thisListing.city}
          />
        </li>
        <li className="col-span-1 row-span-1">
          <img
            className="min-h-[200px]  object-cover"
            src={thisListing.image5}
            alt={thisListing.city}
          />
        </li>
      </ul>
    </div>
  )
}

export default ImageGrid

