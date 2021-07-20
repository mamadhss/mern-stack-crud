const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/merncrud', {useNewUrlParser: true, useUnifiedTopology: true});

const dbobject = mongoose.connection

dbobject.on('connected',() => console.log('mongodb connection successfull'))
dbobject.on('error',() => console.log('mongodb connection failed'))


module.exports = mongoose