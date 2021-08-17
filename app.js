const express = require('express')
require('dotenv').config()


const app = express()
const port = process.env.PORT

app.get('/',( req, res, next)=>{
    req.send('Hello to crypto')
})

app.listen(port, () => {
    console.log(`server is running at http://127.0.0.1:${port}`)
})

