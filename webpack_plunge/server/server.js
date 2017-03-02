// server.js
var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('server/db.json')
var middlewares = jsonServer.defaults()

server.use(middlewares)
server.use('/api', router)  // Rewrite routes to appear after /api
server.listen(3000, function () {
    console.log('JSON Server is running')
})
