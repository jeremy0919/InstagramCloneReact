const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Pretty much each user has information and a GUID and each user has a friends list of users GUIDS
// each image has the user who posted its GUID and its own unique GUID
// algorithm, only show images of people who are on your friends list in home screen 
// can I even store images in a json? am I storing paths to images? 
app.post('/GetUser', async (req, res) => { 
  try {
    const data = fs.readFile('Users.json', 'utf8');
    const USERS = JSON.parse(data);
    const { GUID } = req.body.obj;
    console.log(GUID)
    const foundAccount = USERS.find(user => user.GUID === GUID);
    if (foundAccount) {
      return res.status(200).json(foundAccount);
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error reading users file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
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
app.post('/GetImage', async (req, res) => { 
  try {
    const data = fs.readFile('Image.json', 'utf8');
    const Images = JSON.parse(data);
    const { GUID } = req.body.obj;
    console.log(GUID)
    const FoundImage = Images.find(image => image.GUID === GUID);
    if (FoundImage) {
      return res.status(200).json(FoundImage);
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error reading users file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// each user will have lists of IDs for friends and images
// one large database of photos 