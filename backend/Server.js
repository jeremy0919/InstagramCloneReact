const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/GetUser', (req, res) => {
  // Read account data from JSON file
  fs.readFile('Users.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading accounts data');
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.post('/NewUser', (req, res) => {
  // Append new account to JSON file
  const newAccount = req.body;
  fs.readFile('Users.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading accounts data');
      return;
    }
    const accounts = JSON.parse(data);
    accounts.push(newAccount);
    fs.writeFile('Users.json', JSON.stringify(accounts), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error writing accounts data');
        return;
      }
      res.status(201).send('Account added successfully');
    });
  });
});

app.post('/NewImage', (req, res) => {
  // Append new account to JSON file
  const newImage = req.body;
  fs.readFile('Images.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading accounts data');
      return;
    }
    const accounts = JSON.parse(data);
    accounts.push(newImage);
    fs.writeFile('Images.json', JSON.stringify(accounts), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error writing accounts data');
        return;
      }
      res.status(201).send('Account added successfully');
    });
  });
});
app.get('/GetImage', (req, res) => {
  // Read account data from JSON file
  fs.readFile('Images.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading accounts data');
      return;
    }
    res.json(JSON.parse(data));
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// each user will have lists of IDs for friends and images
// one large database of photos 