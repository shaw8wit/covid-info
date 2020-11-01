import axios from 'axios';
import parsers from './parsers';

async function summary() {
    const response = await axios.get('https://api.covid19api.com/summary');

    return parsers.summary(response.data);
}

export default {
    summary,
};