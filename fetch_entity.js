console.log("heloo")
fetch('https://get-datastore-entity-r4yqmr3v3q-uc.a.run.app/')
  .then(response => response.text())
  .then(data => {
    // use the data to do something in the front-end
    console.log(data);
    document.getElementById("fetchOutput").textContent = data;
  })
  .catch(err => {
    console.error('Error retrieving data:', err);
  });