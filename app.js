const express = require('express');
const bodyParser = require('body-parser');
const admin = require('./firebaseConfig');

const app = express();
app.use(bodyParser.json());

app.post('/verifyToken', async (req, res) => {
  const idToken = req.body.token;
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    res.status(200).send(decodedToken);
  } catch (error) {
    res.status(401).send('Unauthorized');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});