const Koa = require('koa')
const {host, port, database} = require('./config')
const logger = require('koa-logger')
const koaBody = require('koa-body')
const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')

// mysql session
const sessionMysqlConfig = {
    user: database.USERNAME,
    password: database.PASSWORD,
    database: database.DATABASE,
    host: database.HOST
}

const app = new Koa()

// middlewares
app
    .use(session({key: 'USER_SID', store: new MysqlStore(sessionMysqlConfig)}))
    .use(koaBody())
    .use(logger())

// routes
app
    .use(require('./routers/user').routes())
    .use(require('./routers/office').routes())


app.listen(port, () => {
    console.log(`http://${host}:${port}`)
})
