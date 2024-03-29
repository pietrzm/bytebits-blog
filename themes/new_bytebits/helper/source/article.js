const { includes, map, last, reverse, take } = require('./list');
const { parse } = require('./path');



const hasTag = searchedTag => article =>
    includes(searchedTag)(map(tag => tag.name)(article.tags))



module.exports = {
    hasTag
}