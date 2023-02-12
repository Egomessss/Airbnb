
import React from "react"
import ListingsData from "../../assets/ListingsData.json"

const data = ListingsData.beachfront

function ImageGrid() {
  return (
    <div className="h-[580px] w-full">
      <ul className="grid grid-cols-4 grid-rows-2 gap-2">
        <li className="row-span-2 col-span-2">
          <img className="object-cover min-w-[560px] min-h-[560px]"
            src={data.image1}
            alt=""
          />
        </li>
        <li className="col-span-1 row-span-1">
          <img className="object-cover min-w-[272px] min-h-[280px]"
            src={data.image2}
            alt=""
          />
        </li>
        <li className="col-span-1 row-span-1">
          <img className="object-cover min-w-[272px] min-h-[280px]"
            src={data.image3}
            alt=""
          />
        </li>
        <li className="col-span-1 row-span-1">
          <img className="object-cover min-w-[272px] min-h-[280px]"
            src={data.image4}
            alt=""
          />
        </li>
        <li className="col-span-1 row-span-1">
          <img className="object-cover min-w-[272px] min-h-[280px]"
            src={data.image5}
            alt=""
          />
        </li>
        
      </ul>
    </div>
  )
}

export default ImageGrid

// get the images(5) and put them in a list
// there should be a prop that allows me to change the images and info based on id
