import Homepage from "./pages/Homepage/index"

import SearchPage from "./pages/SearchPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ListingPage from "./pages/ListingPage/index"


function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/SearchPage"
          element={<SearchPage />}
        />{" "}
        <Route
          path="/ListingPage/:listingId"
          element={<ListingPage />}
        />{" "}
       
      </Routes>
    </div>
  )
}

export default App

// hide api key
// add the check in dates
// debounce the searchinput so it only shows results after a user finishes typing
// add 8 properties all around the world
// add the availabily so i can book them
//  add the location to mapbox
// only activate the filter that can be searched
// make a database for the properties
//
// autocomplete

// ! add disclaimer pop up in the beginning stating that the data here is all random
