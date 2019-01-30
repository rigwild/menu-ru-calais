'use strict'
const { getMenuTable, routeDesc } = require('./functions')

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.statusCode = 200
  res.end(`
  <html>
  <head>
    <meta charset='utf-8'>
    <title>menu-ru-calais</title>
    <meta name='description' content='Récupérer le menu du ru de Calais as a microservice xd' />
  </head>
  <body>
    <pre>${await getMenuTable()}</pre>
    ${routeDesc}
  </body>
  </html>`)
}
