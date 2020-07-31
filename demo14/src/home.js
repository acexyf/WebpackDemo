const utils = require('./utils')
const axios = require('axios')
const dayjs = require('dayjs')
console.log(dayjs())

console.log(utils.trim('home'))

setTimeout(()=>{
    require('./async')
}, 2000)

