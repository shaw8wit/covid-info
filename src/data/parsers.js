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
        "CC": format.number(raw.TotalConfirmed - raw.TotalDeaths - raw.TotalRecovered),
        "updated": moment(data.Date).format('ll')
    }
}

function countryStats(country, data) {
    const r = data.Countries.find((d) => d.Slug === country);
    return {
        "nC": format.number(r.NewConfirmed),
        "tC": format.number(r.TotalConfirmed),
        "nD": format.number(r.NewDeaths),
        "tD": format.number(r.TotalDeaths),
        "nR": format.number(r.NewRecovered),
        "tR": format.number(r.TotalRecovered),
        "CC": format.number(r.TotalConfirmed - r.TotalDeaths - r.TotalRecovered),
        "updated": moment(r.Date).format('ll')
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

function parseCountryChart(historicData, key, label, color) {
    const chartData = historicData.map(data => {
        return {
            x: moment(data['Date']).format('ll'),
            y: data[key],
        }
    });
    return {
        label,
        data: chartData,
        fill: false,
        borderColor: color,
    }
}

function historicCountry(data) {
    return [{
            label: 'Confirmed',
            key: 'Confirmed',
            color: 'rgb(40, 40, 40)',
        },
        {
            label: 'Recovered',
            key: 'Recovered',
            color: 'rgb(40, 200, 40)',
        },
        {
            label: 'Deaths',
            key: 'Deaths',
            color: 'rgb(200, 40, 40)',
        },
        {
            label: 'Active',
            key: 'Active',
            color: 'rgb(40, 40, 200)',
        },
    ].reduce((prev, next) => {
        if (data.filter(d => d[next.key] !== null).length > 4) {
            prev.push(parseCountryChart(data, next.key, next.label, next.color));
        }
        return prev;
    }, []);
}

function countryTable(data) {
    return data.Countries.map(d => {
        return {
            cases: format.number(d.TotalConfirmed),
            deaths: format.number(d.TotalDeaths),
            recovered: format.number(d.TotalRecovered),
            active: format.number(d.TotalConfirmed - d.TotalDeaths - d.TotalRecovered),
            countryName: d.Country,
            countrySlug: d.Slug,
        }
    })
}

export default {
    summary,
    countryStats,
    historicWorld,
    historicCountry,
    countryTable,
};