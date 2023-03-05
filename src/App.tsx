import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage/index"
import SearchPage from "./pages/SearchPage"
import ListingPage from "./pages/ListingPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
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
    </Router>
  )
}

export default App
