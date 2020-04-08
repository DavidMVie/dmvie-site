const path = require('path');

const express = require('express');


const app = express(); 



console.log('dirname is ', __dirname);

app.use(express.static(path.join(__dirname, '../public')))

app.get('*', (req, res) => {
  console.log('this did run')
  res.sendFile(path.join(__dirname, '../', 'public', 'index.html'))
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Ole cloth ears is listening on port ${port}`)
})