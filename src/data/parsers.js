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
        "updated": moment(data.Date).format('ll')
    }
}

function countryStats(country, data) {
    const countryRawData = data.Countries.find((d) => d.Slug === country);
    return {
        "nC": format.number(countryRawData.NewConfirmed),
        "tC": format.number(countryRawData.TotalConfirmed),
        "nD": format.number(countryRawData.NewDeaths),
        "tD": format.number(countryRawData.TotalDeaths),
        "nR": format.number(countryRawData.NewRecovered),
        "tR": format.number(countryRawData.TotalRecovered),
        "CC": countryRawData.CountryCode,
        "updated": moment(countryRawData.Date).format('ll')
    }
}

function historicWorld(historicData) {
    return [{
            label: 'Confirmed',
            key: 'NewConfirmed',
            color: 'rgb(40, 40, 40)',
        },
        {
            label: 'Recovered',
            key: 'NewRecovered',
            color: 'rgb(40, 200, 40)',
        },
        {
            label: 'Deaths',
            key: 'NewDeaths',
            color: 'rgb(200, 40, 40)',
        },
        {
            label: 'Active',
            key: 'TotalConfirmed',
            color: 'rgb(40, 40, 200)',
        },
    ].reduce((prev, next) => {
        if (historicData.filter(d => d[next.key] !== null).length > 4) {
            prev.push(parseChart(historicData, next.key, next.label, next.color));
        }
        return prev;
    }, []);
}

function parseChart(historicData, key, label, color) {
    let d = new Date();
    let prev = 0,
        temp;
    d.setDate(d.getDate() - historicData.length);
    const chartData = historicData.map(data => {
        d.setDate(d.getDate() + 1);
        temp = (key === 'TotalConfirmed') ? data['NewConfirmed'] - data['NewRecovered'] - data['NewDeaths'] : data[key];
        if (Math.abs(temp) < 4500000) {
            prev += temp;
        }
        return {
            x: d.toDateString(),
            y: prev,
        }
    });
    return {
        label,
        data: chartData,
        fill: false,
        borderColor: color,
    }
}

export default {
    summary,
    countryStats,
    historicWorld,
};