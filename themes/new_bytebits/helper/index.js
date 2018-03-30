const { j } = require('./source/functional')
const { filter, map, includes, last, isEmpty } = require('./source/list')
const { date } = require('./source/time')
const { kebab, replace } = require('./source/string')
const { separator, parse, format, basename } = require('./source/path')

const { hasTag } = require('./source/article')







module.exports = hexo => ({
    j,
    filter, map, includes, last, isEmpty,
    date,
    kebab, replace,
    hasTag,
    separator, parse, format, basename
})