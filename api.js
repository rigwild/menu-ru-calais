'use strict'

const { getMenuData } = require('./functions')

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.statusCode = 200
  res.end(JSON.stringify(await getMenuData()))
}
