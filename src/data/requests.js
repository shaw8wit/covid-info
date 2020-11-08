import axios from 'axios';
import parsers from './parsers';

async function summary() {
    const response = await axios.get('https://api.covid19api.com/summary');

    return parsers.summary(response.data);
}

async function countryStats(country) {
    const response = await axios.get('https://api.covid19api.com/summary');

    return parsers.countryStats(country, response.data);
}

async function historicWorld() {
    const response = await axios.get('https://api.covid19api.com/world');

    return parsers.historicWorld(response.data);
}

async function historicCountry(country) {
    const response = await axios.get(`https://api.covid19api.com/dayone/country/${country}`);

    return parsers.historicCountry(response.data);
}

export default {
    summary,
    countryStats,
    historicWorld,
    historicCountry,
};