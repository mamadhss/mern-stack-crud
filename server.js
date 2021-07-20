const express = require('express');
const app = express();
const dbfile = require('./conn')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))
const postroute = require('./routes/post')

app.use('/api/post',postroute)

app.get('/',(req,res) => {
    res.send('hello world with node js')
})


app.listen(5000,() => console.log('node js server and express started successfully'))

