const express = require('express')
const app = express()
app.use('/', express.static('Public'))

app.use('/api', require('./api') )
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
/* const cookieParser = require('cookie-parser')
const db = require('./config/mongoose')

const session = require('express-session')
const passport = require('passport')
const passportGoogle = require('./config/passport-google-stratagy')
const MongoStore = require('connect-mongo')

app.use(cookieParser());

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(session({
    name: 'SESSID',
    secret: process.env.SESS_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 100,
        sameSite: 'lax'
    },
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        dbName: "mongostore-db",
        autoRemove: 'interval',
        autoRemoveInterval: 10 // In minutes. Default
    })
}))

app.use(passport.initialize());
app.use(passport.session())

app.use(passport.setAuthenticatedUser);

app.use('/', require('./routes/index'))
 */
app.listen(3000, (err) => {
    if (err)
        return console.log(`Error + ${err.message}`)
    console.log(`Server Started Successfully on PORT ${process.env.PORT}`)
})