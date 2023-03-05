import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"

const HomePage = lazy(() => import("./pages/HomePage/index"))
const SearchPage = lazy(() => import("./pages/SearchPage/index"))
const ListingPage = lazy(() => import("./pages/ListingPage/index"))


function App() {
  return (
    <Routes>
      <Suspense fallback={<div>Loading...</div>}>
        {" "}
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
      </Suspense>
    </Routes>
  )
}

export default App
