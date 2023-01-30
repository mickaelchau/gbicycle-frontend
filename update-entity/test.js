// Imports the Google Cloud client library
const {Datastore} = require('@google-cloud/datastore');

// Creates a client
const datastore = new Datastore();

// The kind for the new entity
const kind = 'active-session';

// The name/ID for the new entity
const name = 'customer1';

// create a key for the entity you want to update
const key = datastore.key([kind, name]);

// retrieve the entity
datastore.get(key)
  .then(([entity]) => {
    // update the value
    entity.on = true;

    // save the changes
    return datastore.update(entity);
    })
  .then(() => {
    console.log('Entity updated successfully!');
  })
  .catch(err => {
    console.error('Error updating entity:', err);
  });
