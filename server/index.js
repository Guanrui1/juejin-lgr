const express = require('express')
const routes = require('./routes/recommend')
const consola = require('consola')
const cors = require('cors')

const app = express()
app.use(cors())
const port = 8088

app.use(routes)
app.listen(port, () => {
  consola.ready({ message: `Example app listening at http://localhost:${port}`, badge: true})
})


