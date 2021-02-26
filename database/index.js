const mysql = require('mysql2')

const pool = mysql.createPool({
  connectionLimit: 10,
  database: 'orders',
  host: 'localhost',
  password: 'poiu7890',
  // prot: '3306',
  user: 'user_name',
});

let ordersDb = {}

ordersDb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM orders.orders', (err , result) => {
      if (err) return reject(err)
      return resolve(result)
    })
  })
}

ordersDb.one = (id) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM orders.orders WHERE OrderID = ?', [id], (err , result) => {
      if (err) return reject(err)
      return resolve(result[0])
    })
  })
}

module.exports = ordersDb
