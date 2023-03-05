import { HeartIcon } from "@heroicons/react/24/outline"
import React, { useEffect, useState } from "react"

function favoriteButton() {
  // handles favorite post state
  //   fetches state from localstorage and persists after reload
  //   the "!" tells the compiler the value cannot be null
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("my-fav-posts")!) || false
  )

  //   toogle between favorite or !favorite
  //    reactively setting the favorite state in the local storage whenever it changes by using React's useEffect Hook

  const toogleFavorite = () => {
    setFavorite((favorite:boolean) => !favorite)
  }

  // saves to local storage
  //   stringify the state because local storage only accepts strings
  //  it is stored with every user interaction and retrieved for the initial state when rendering the component for the first time and therefore initializing its hooks

  useEffect(() => {
    localStorage.setItem("my-fav-posts", JSON.stringify(favorite))
  }, [favorite])

  return (
    <>
      <button
        aria-label="favorite"
        onClick={toogleFavorite}
      >
        <HeartIcon
          className={
            !favorite
              ? "h-6 w-6 cursor-pointer fill-black/40 text-white"
              : "h-6 w-6 cursor-pointer fill-red-600"
          }
        />
      </button>
    </>
  )
}

export default favoriteButton
