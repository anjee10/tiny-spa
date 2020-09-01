const express = require("express")
const fetch = require("node-fetch")

const app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  next()
})

app.get("/comic/:id", async (req, res) => {
  console.log(req)
  const data = await fetch(
    `https://xkcd.com/${req.params.id}/info.0.json`
  ).then((response) => response.json())
  return res.json(data)
})

const PORT = process.env.PROXY_PORT || 4000
app.listen(PORT, () => console.log(`listening on ${PORT}`))
