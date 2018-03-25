const { spread } = require('./source/functional')
const { filter, map, includes } = require('./source/list')
const { date } = require('./source/time')
const { kebab } = require('./source/string')

const { hasTag } = require('./source/article')







module.exports = hexo => ({
    spread,
    filter, map, includes,
    date,
    kebab,
    hasTag
})