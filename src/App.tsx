import Homepage from "./pages/Homepage/index"
import Listings from "./pages/ListingPage/index"
import MapPage from "./pages/MapPage"
import SearchPage from "./pages/SearchPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Homepage />}
          />
          <Route
            path="/Listings"
            element={<Listings />}
          />{" "}
          <Route
            path="/SearchPage"
            element={<SearchPage />}
          />{" "}
          <Route
            path="/MapPage"
            element={<MapPage />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App

// hide api key
