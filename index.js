exports.convert = async(key, ammount, currency) => {
    const fetch = require('node-fetch')
    const response = await fetch(`http://apilayer.net/api/live?access_key=${key}`);
    let data = await response.json();
    data = data.quotes;
    currency = `USD${currency}`;
    ammount = ammount * data[currency];
    let converted = 148 * ammount;
    return converted;
}