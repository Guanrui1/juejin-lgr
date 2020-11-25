const express = require('express')
const routes = require('./routes/recommend')
const consola = require('consola')

const app = express()
const port = 8088

app.use(routes)
app.listen(port, () => {
  consola.ready({ message: `Example app listening at http://localhost:${port}`, badge: true})
})


