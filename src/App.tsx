import Homepage from "./pages/Homepage/index"

import SearchPage from "./pages/SearchPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
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
          path="/searchPage"
          element={<SearchPage />}
        />
        <Route
          path="/listingpage/:listingId"
          element={<ListingPage />}
        />
      </Routes>
    </div>
  )
}

export default App
