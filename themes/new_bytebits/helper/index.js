const { j } = require('./source/functional')
const { filter, map, includes, last } = require('./source/list')
const { date } = require('./source/time')
const { kebab } = require('./source/string')
const { split } = require('./source/string')

const { hasTag } = require('./source/article')







module.exports = hexo => ({
    j,
    filter, map, includes, last,
    date,
    kebab, split,
    hasTag
})