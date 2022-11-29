const express = require('express');

const app = express();
app.listen(9090);
app.get('/owners/:id', (req, res) => res.send(`Hello ${req.params.id}`));