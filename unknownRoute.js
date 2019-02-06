'use strict'
const { routeDesc } = require('./functions')

module.exports = async (req, res) => {
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end(`<html>
<head>
  <meta charset='utf-8'>
  <title>menu-ru-calais</title>
  <meta name='description' content='Récupérer le menu du ru de Calais as a microservice xd' />
</head>
<body>
<span>Cette route existe pas wsh</span>
${routeDesc}
</body>
</html>`)
}
