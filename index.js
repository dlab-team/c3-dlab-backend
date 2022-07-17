
if (process.env.NODE_ENV === 'development') {
  // we use notenv only for local dev purposes, on heroku we use heroku env variables
  require('dotenv').config()
}

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

const port = process.env.APP_PORT || process.env.PORT
app.listen(port, () => {
  console.log(`App running on port: ${port}`)
})
