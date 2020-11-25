const express = require('express')
const axios = require('../request')

const router = express.Router()

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/recommend', function(request, response) {
  axios({
    method: 'GET',
    url: '/user_api/v1/author/recommend',
    params: {
      category_id: request.params.category_id || '',
      cursor: request.params.cursor || '',
      limit: request.params.limit || 20
    }
  }).then(res => {
    response.json(res.data.data)
  }).catch(err => {
    response.json(err)
  })
})

module.exports = router