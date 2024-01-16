const express = require('express');
const app = express();
const port = 8080;
const mysql = require("mysql2");
const cors = require('cors')
const bodyParser = require('body-parser')

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'PTV5573@rose',
    database: "myProducts"
})

// app.use(express.json);
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello there!')
})

app.get('/price', (req, res) => {
    const sortOrder = req.query.sortOrder;
    if (!sortOrder) return res.json("Select a button")
    const query = `SELECT * FROM products ORDER By productPrice ${sortOrder}`
    database.query(query, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })

})

// app.get('/priceDesc', (req, res) => {
//     const query = "SELECT * FROM products ORDER By productPrice DESC"
//     database.query(query, (err, data) => {
//         if (err) return res.json(err)
//         return res.json(data)
//     })

// })

app.get('/products', (req, res) => {
    const query = "SELECT * FROM products"
    database.query(query, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post('/newMessage', (req, res) => {
    const query = "INSERT INTO contactUs (`firstName`, `lastName`, `email`, `phoneNumber`, `message`) VALUES (?)"
    const values = [req.body.firstName, req.body.lastName, req.body.email, req.body.phone, req.body.message];
    database.query(query, [values], (err, data) => {
        if (err) {
            res.status(500).json({ error: "Internal server error" });
        } else {
            res.status(200).json({ message: "Message has been sent" })
        }
    })
})

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`server is working on ${port}`)
})