const express = require('express')
const db = require('./db')

const router = express();

router.use(express.json())

router.get('/', (Request, Response) => {

    const connection = db.connect();

    const statement = `select * from product`

    connection.query(statement, (err, result) => {

        if (err == null) {
            Response.send(JSON.stringify(result))
        } else {
            Response.send(JSON.stringify(err))
        }
        connection.end()

    })
})

router.post('/', (Request, Response) => {

    const connection = db.connect();

    const { title, description, price } = Request.body

    const statement = `insert into product(title,description,price)values('${title}','${description}',${price})`

    connection.query(statement, (err, result) => {

        if (err == null) {
            Response.send(JSON.stringify(result))
        } else {
            Response.send(JSON.stringify(err))
        }
        connection.end()

    })
})

module.exports = router