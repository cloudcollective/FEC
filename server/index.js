const express = require('express');

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../', 'client', 'dist')));
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
