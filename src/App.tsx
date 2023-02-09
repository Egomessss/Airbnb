import Homepage from "./pages/Homepage/index"
import Listings from "./pages/ListingPage/index"
import MapPage from "./pages/MapPage"
import SearchPage from "./pages/SearchPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

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
          path="/Listings"
          element={<Listings />}
        />{" "}
        <Route
          path="/MapPage"
          element={<MapPage />}
        />
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
// use a webscaper to get 8 properties data
