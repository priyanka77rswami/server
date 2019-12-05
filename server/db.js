const mysql = require('mysql')


function connect() {
    const connection = mysql.createConnection({

        host: '192.168.1.29',
        user: 'root',
        password: 'root',
        database: 'mydb',
        port: 9099

    })
    connection.connect()
    return connection

}

module.exports = {

    connect: connect
}