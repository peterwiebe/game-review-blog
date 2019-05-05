const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

app.listen(port, () => console.log(`API server listening on port ${port}`))
