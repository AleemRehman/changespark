var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var processors = require("./services/processors")
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

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

app.post("/payload", (req, res) => {
  var body = req.body
  var notion_data,
    api_response = processors.cleanupRequest(body, (verbose = true))
})

app.post("/post_change", (req, res, next) => {
  // post change from the GitHub Action to notion
  // Params:
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
