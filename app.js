const f = require('lodash')

const items = [1,[3,[8,[0]]]]
const newItems = f.flattenDeep(items)
console.log(newItems)