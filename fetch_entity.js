async function fetchData() {
    try {
        const response = await fetch('https://get-datastore-entity-r4yqmr3v3q-uc.a.run.app/data/bicycle1');
        const data = await response.json();
        console.log(data);
        return data;
        //document.getElementById("fetchOutput").textContent = data;
    } catch (err) {
        console.error('Error retrieving data:', err);
    }
}

module.exports = {fetchData}
