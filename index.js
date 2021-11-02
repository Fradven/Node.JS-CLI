#!/usr/bin/env node
const [,, ...args] = process.argv
const axios = require('axios');
const {getCode} = require('country-list');

const currentYear = new Date().getFullYear()
const country = getCode(...args)

const getHolidays = (year, code) => {
    axios.get(`https://date.nager.at/api/v2/PublicHolidays/${year}/${code}`).then(
        response => response.data.forEach(element => {
            console.log(`${element.date}: ${element.name}`)
        })
    ).catch(
        error => console.log(error)
    )
}

getHolidays(currentYear, country)
