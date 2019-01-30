'use strict'
const { routeDesc } = require('./functions')

module.exports = async (req, res) => {
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end('<span>Cette route existe pas wsh</span>' + routeDesc)
}
