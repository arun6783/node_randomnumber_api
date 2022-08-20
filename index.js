const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/api/random/:id', (req, res) => {
  let min = 1
  let max = req.params.id || 100
  let randnum = Math.floor(Math.random() * (max - min) + min)
  return res.status(200).json(randnum)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
