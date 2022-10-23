const express = require('express');
const messages = require('./routes/messages');
const cors = require('cors');

const app = express();
const port = 3000;

//json
app.use(express.json());
app.use(cors());
app.set('view engine', 'jade');


app.use('/api/v1/messages', messages);

app.use(function(req, res, next){
  next(createError(404));
});

app.get('/', (req, res) => {
  res.render('index', { title: 'Hello', message: 'user' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

