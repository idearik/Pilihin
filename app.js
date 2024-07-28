require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let userInputs = [];

app.get('/', (req, res) => {
  if (req.query.inputs) {
    userInputs = Array.isArray(req.query.inputs) ? req.query.inputs : [req.query.inputs];
  }
  res.render('index', { userInputs: userInputs });
});

app.post('/randomize', (req, res) => {
  userInputs = req.body.inputs.filter(input => input.trim() !== '');
  const randomChoice = userInputs[Math.floor(Math.random() * userInputs.length)];
  res.render('result', { userInputs: userInputs, randomChoice: randomChoice });
});

app.listen(port, () => {
  console.log(`Pilihin app listening at http://localhost:${port}`);
});
