const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/crypto_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => console.log('Db is connect'))
    .catch((err) => console.log(err))