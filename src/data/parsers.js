import format from './format';
import moment from 'moment';

function summary(data) {
    let raw = data.Global;
    return {
        "nC": format.number(raw.NewConfirmed),
        "tC": format.number(raw.TotalConfirmed),
        "nD": format.number(raw.NewDeaths),
        "tD": format.number(raw.TotalDeaths),
        "nR": format.number(raw.NewRecovered),
        "tR": format.number(raw.TotalRecovered),
        "CC": "WORLD",
        "updated": moment(data.Date).format('LL')
    }
}

export default {
    summary,
};