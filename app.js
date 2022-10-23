const express = require('express')
const messages = require('./routes/messages');


const app = express()
const port = 3000

//json
app.use(express.json())
app.set('view engine', 'jade')


app.use('/api/v1/messages', messages);

app.get('/', (req, res) => {
  res.render('index', { title: 'Hello', message: 'user' });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

