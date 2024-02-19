const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/accounts', (req, res) => {
  // Read account data from JSON file
  fs.readFile('accounts.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading accounts data');
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.post('/accounts', (req, res) => {
  // Append new account to JSON file
  const newAccount = req.body;
  fs.readFile('accounts.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading accounts data');
      return;
    }
    const accounts = JSON.parse(data);
    accounts.push(newAccount);
    fs.writeFile('accounts.json', JSON.stringify(accounts), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error writing accounts data');
        return;
      }
      res.status(201).send('Account added successfully');
    });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// each user will have lists of IDs for friends and images
// one large database of photos 