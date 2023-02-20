import React from "react"

function ImageGrid(images) {
  
  console.log(images)

  return (
    <div className="hidden  md:block">
      <ul className=" grid min-h-[400px] grid-cols-4 grid-rows-2 gap-2">
        <li className="col-span-2 row-span-2">
          <img
            className="min-h-[410px] object-cover"
            src={}
            alt=""
          />
        </li>
        <li className="col-span-1 row-span-1">
          <img
            className="min-h-[200px]  object-cover"
            src={images[1]}
            alt=""
          />
        </li>
        <li className="col-span-1 row-span-1">
          <img
            className="min-h-[200px]  object-cover"
            src={images[2]}
            alt=""
          />
        </li>
        <li className="col-span-1 row-span-1">
          <img
            className="min-h-[200px]  object-cover"
            src={images[3]}
            alt=""
          />
        </li>
        <li className="col-span-1 row-span-1">
          <img
            className="min-h-[200px]  object-cover"
            src={images[4]}
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
