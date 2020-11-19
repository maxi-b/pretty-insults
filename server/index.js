const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello wankers!')
})

app.get('/insults', (req, res) => {
  items = ['Hello, you dick head','WANKER','Fuck you, buddy!','Piss off!','Get fucked','Go fuck yourself','Look what the cat dragged in'];
  var item = items[Math.floor(Math.random() * items.length)];  
  res.send(item)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
