const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv/config')
const connection = require('./db.config')
connection.once('open',()=> console.log('DB connected'))
connection.on('error',()=>console.log('Error'))
app.use(express.json({
    extended: false
}))
app.use('/',require('./route/url.router'))

app.get('/', (req, res) => {
    res.send('hello')
})
app.listen(PORT, () => console.log('server start'));
