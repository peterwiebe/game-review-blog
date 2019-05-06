import "@babel/polyfill"
import express from 'express'
import {json, urlencoded} from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import {connect} from './db'
import postRouter from './resources/post/post.router'

const app = express()
const port = 5000

app.disable('x-powered-by')

// Middleware

app.use(cors())
app.use(json())
app.use(urlencoded({extended: true}))
app.use(morgan('dev'))

// Routes

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api/post', postRouter)

app.use(function (req, res) {
    res.status(404).send("Sorry can't find that!")
})

const start = async () => {
    try {
        await connect()
        app.listen(port, () => console.log(`API server listening on port ${port}`))
    } catch (e) {
        console.log(e)
    }
}

// Start server
start()
