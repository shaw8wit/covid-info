import format from './format';
import moment from 'moment';

function summary(data) {

    return {
        "nC": format.number(data.Global.NewConfirmed),
        "tC": format.number(data.Global.TotalConfirmed),
        "nD": format.number(data.Global.NewDeaths),
        "tD": format.number(data.Global.TotalDeaths),
        "nR": format.number(data.Global.NewRecovered),
        "tR": format.number(data.Global.TotalRecovered),
        "CC": "WORLD",
        "updated": moment().format('ll')
    }
}

export default {
    summary,
};