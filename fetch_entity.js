async function fetchData() {
    try {
        const response = await fetch('https://get-datastore-entity-r4yqmr3v3q-uc.a.run.app/data/customer1');
        const data = await response.text();
        console.log(data);
        document.getElementById("fetchOutput").textContent = data;
    } catch (err) {
        console.error('Error retrieving data:', err);
    }
}

fetchData();
