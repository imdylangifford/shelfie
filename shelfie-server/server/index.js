const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive');
const controller = require('./controllers')
require ('dotenv').config()

const app = express();
app.use(bodyParser.json() );
massive( "postgres://xdgjxepwimtica:9471fc839af932c8b099f13e057244edfcfdebf210fa0679a8d12d110c5c934e@ec2-54-235-212-58.compute-1.amazonaws.com:5432/d8ksud43erfqc6?ssl=true" ).then( dbInstance => {
    console.log("we are connected")
    app.set('db', dbInstance)
}).catch( err => console.log(err))

app.get( '/api/inventory', controller.getAll );
app.post( '/api/product', controller.addProduct)
app.delete('/api/product/:id', controller.deleteProduct)


const port = 4000
app.listen(port, ()=>{
    console.log('listening on port 4000')
})
