const { Datastore } = require('@google-cloud/datastore');
const express = require('express');

// create a client object
const datastore = new Datastore();

// create an express app
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  
// endpoint to retrieve data
app.get('/data/:customer', (req, res) => {
  const kind = "active-session";

  // create a query to retrieve the corresponding entity
  const key = datastore.key([kind, req.params.customer]);

  datastore.get(key)
  .then(([entity]) => {
        // send the entities back to the client
        res.json(entity.on);
    })
  .then(() => {
    console.log('Entity successfully get!');
  })
  .catch(err => {
    console.error('Error retrieving data:', err);
    res.status(500).send('Error retrieving data');
  });
});

// start the express app
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}...`);
});