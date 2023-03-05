import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const HomePage = lazy(() => import("./pages/HomePage/index"))
const SearchPage = lazy(() => import("./pages/SearchPage/index"))
const ListingPage = lazy(() => import("./pages/ListingPage/index"))



function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </Router>
  )
}

export default App
