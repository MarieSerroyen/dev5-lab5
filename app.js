const express = require('express');
const messages = require('./routes/messages');
const cors = require('cors');

const app = express();

//json
app.use(express.json());
app.use(cors());
app.set('view engine', 'jade');


app.use('/api/v1/messages', messages);

app.get('/', (req, res) => {
  res.render('index', { title: 'Hello', message: 'user' });
});

module.exports = app;

