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
        "updated": moment(countryRawData.Date).format('LL')
    }
}

function historicWorld(historicData) {
    return [{
            label: 'Confirmed',
            key: 'TotalConfirmed',
            color: 'rgb(100, 100, 200)',
        },
        {
            label: 'Recovered',
            key: 'TotalRecovered',
            color: 'rgb(100, 0, 200)',
        },
        {
            label: 'Deaths',
            key: 'TotalDeaths',
            color: 'rgb(200, 100, 200)',
        },
        {
            label: 'Active',
            key: 'CalculateActive',
            color: 'rgb(10, 30, 100)',
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
    d.setDate(d.getDate() - historicData.length);
    const chartData = historicData.map(data => {
        d.setDate(d.getDate() + 1);
        return {
            x: d.toDateString(),
            y: (key === 'CalculateActive') ? data['TotalConfirmed'] - data['TotalRecovered'] - data['TotalDeaths'] : data[key] || 0,
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