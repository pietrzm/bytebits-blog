const { includes, map } = require('./list');



const hasTag = searchedTag => article =>
    includes(searchedTag)(map(tag => tag.name)(article.tags))



module.exports = {
    hasTag
}