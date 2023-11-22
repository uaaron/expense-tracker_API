const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to my expense tracker app')
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.')
})