'use strict'
const { getMenuTable, routeDesc } = require('./functions')

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.statusCode = 200
  res.end('<pre>' + (await getMenuTable()) + '</pre>' + routeDesc)
}
