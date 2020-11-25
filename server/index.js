const express = require('express')
const routes = require('./routes/recommend')

const app = express()
const port = 8088

app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})