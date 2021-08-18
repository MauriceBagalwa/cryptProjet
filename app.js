const express = require('express')
require('dotenv').config()
require('./src/configs/dbs')
const router = require('./src/data/user')

const app = express()
const port = process.env.PORT

app.use(express.json());

app.get("/", (req, res, next) => {
    res.send({ result: 'Hello to crypto' })
})




app.use('/api', router)

app.listen(port, () => {
    console.log(`server is running at http://127.0.0.1:${port}`)
})

