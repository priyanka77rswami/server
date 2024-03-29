const express = require('express')
const routerProduct = require('./product.js')

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use('/product', routerProduct)

app.get('/', (Request, Response) => {

    Response.send('welcome to Backend')

})

app.listen(9898, () => {

    console.log('Server started on port 9898')

})