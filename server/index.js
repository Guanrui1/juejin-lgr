const express = require('express')
const routes = require('./routes/recommend')
const { Nuxt, Builder } = require('nuxt')

const app = express()
const port = 8088

async function start () {
  // 传入配置初始化 Nuxt.js 实例
  const config = {
    dev: process.env.NODE_ENV !== 'production'
  }
  const nuxt = new Nuxt(config)
  await nuxt.ready()
  app.use(nuxt.render)

  // 在开发模式下进行编译
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(routes)

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}

start()