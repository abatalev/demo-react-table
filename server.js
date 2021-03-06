const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('data/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
//server.use('/api', router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
  }))
server.use(router)
server.listen(5001, () => {
  console.log('JSON Server is running')
})