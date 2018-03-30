const { includes, isEmpty, filter, last, reverse, join } = require('./list');
const { split, replace } = require('./string');



const separator = "/"


const parse = path =>
    filter(isEmpty)(split(separator)(path))


const format = chunks =>
    join(separator)(chunks)


const basename = (path, extension) =>
    replace(last(parse(path)))(extension)("")



module.exports = {
    separator,
    parse,
    format,
    basename
}