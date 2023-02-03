// calling the port

const PORT = 8000

// packages

const express = require("express")
const cors = require("cors")
const axios = require("axios")
require("dotenv").config()

// calling express
const app = express()

// if i visit host 8000 shows hi in the browser
app.get("/", (req, res) => {
  res.json("hi")
})

app.get("/map", (req, res) => {
  const API_KEY = process.env.REACT_APP_MapboxAccessToken
  const [viewState, setViewState] = useState({
    width: "100%",
    height: "100%",
    longitude: -122.4,
    latitude: 37.8,
    zoom: 11,
  })

  return (
    <Map
      mapStyle="mapbox://styles/edmilsong/cl5bpa07c000114qn9j3h2bj8"
      // Environmental key for my mapbox api
      mapboxAccessToken={API_KEY}
      {...viewState}
    ></Map>
  )
})

//listens for changes in my port
app.listen(8000, () => console.log("Server is running on port ${PORT}"))
