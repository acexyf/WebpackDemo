const vue = require('vue')
const vuex = require('vuex')
const router = require('vue-router')

const dayjs = require('dayjs')

const utils = require('./utils')

console.log(dayjs())
console.log(utils.trim('detail'))


setTimeout(()=>{
    let async_a = require('./async_a')
    async_a()
}, 2000)
