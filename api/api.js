var express = require("express")
var app = express()

app.get("/ping", (req, res, next) => {
  // Get Status of server - used for front-end
})

app.get("/get_changes", (req, res, next) => {
  // Grab all changes from the notion db - this is to be hit from the browser
})

app.get("/get_change", (req, res, next) => {
  // grab the changes based on an ID
  // Params : commitID - string
})

app.post("/post_change", (req, res, next) => {})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
