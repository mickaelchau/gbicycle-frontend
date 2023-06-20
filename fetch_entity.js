const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('https://gbicycle-backend-kqs5kdn4xa-uc.a.run.app/data/bicycle1');
        console.log(response.data);
        return response.data;
        //document.getElementById("fetchOutput").textContent = data;
    } catch (err) {
        console.error('Error retrieving data:', err);
    }
}

module.exports = {fetchData}
