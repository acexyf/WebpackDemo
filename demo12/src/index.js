import {
    isArray
} from './utils'

isArray([])
console.log(isArray([]))


import { chunk } from 'lodash-es'
console.log(chunk([1,2,3,4], 2))