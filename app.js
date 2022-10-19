const express = require('express')
const messages = require('./routes/messages');

const app = express()
const port = 3000

//json
app.use(express.json())


app.use('/api/v1/messages', messages);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

