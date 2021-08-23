const express = require('express')
require('dotenv').config()
require('./src/configs/dbs')
const httpError = require('https-error')
const router = require('./src/data/user')

const app = express()
const port = process.env.PORT

app.use(express.json());

app.get("/", (req, res, next) => {
    res.send({ result: 'Hello to crypto' })
})

app.use('/api', router)

/*
* #Http Error
-> capture les erreurs lié aux url.
*/
app.use((req, res, next) => {
    next(httpError.NotFound());
});

app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500);
    res.send({
        status: err.status || 500,
        message: err.message,
    });
});

app.listen(port, () => {
    console.log(`server is running at http://127.0.0.1:${port}`)
})

