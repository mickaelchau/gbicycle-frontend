const axios = require('axios');

async function fetchData(bicycleId) {
    try {
        const response = await axios.get('https://gbicycle-backend-r4yqmr3v3q-uc.a.run.app/data/' + bicycleId);
        console.log(response.data);
        return response.data;
        //document.getElementById("fetchOutput").textContent = data;
    } catch (err) {
        console.error('Error retrieving data:', err);
    }
}

module.exports = {fetchData}
