import React from "react"

function ImageGrid(images) {
  return (
    <div className="hidden  md:block">
      <ul className=" grid min-h-[400px] grid-cols-4 grid-rows-2 gap-2">
        <li className="col-span-2 row-span-2">
          <img
            className="min-h-[410px] object-cover"
            src={images.image1}
            alt=""
          />
        </li>
        <li className="col-span-1 row-span-1">
          <img
            className="min-h-[200px]  object-cover"
            src={images.image2}
            alt=""
          />
        </li>
        <li className="col-span-1 row-span-1">
          <img
            className="min-h-[200px]  object-cover"
            src={images.image3}
            alt=""
          />
        </li>
        <li className="col-span-1 row-span-1">
          <img
            className="min-h-[200px]  object-cover"
            src={images.image4}
            alt=""
          />
        </li>
        <li className="col-span-1 row-span-1">
          <img
            className="min-h-[200px]  object-cover"
            src={images.image5}
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
