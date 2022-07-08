require('dotenv').config()
const express = require('express')

const app = express()
const { Client } = require('pg')

app.get('/', async (req, res) => {
  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    password: process.env.POSTGRES_PASSWORD,
    name: process.env.POSTGRES_DB
  })
  await client.connect()
  const resp = await client.query('SELECT $1::text AS message', ['Pg connection working!'])
  console.log(resp.rows[0].message) // Hello world!
  await client.end()

  res.json({ message: 'Hello World' })
})

app.listen(process.env.APP_PORT, () => {
  console.log(`App running on port: ${process.env.APP_PORT}`)
})
