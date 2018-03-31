const { filter, last, join } = require('./list');
const { split, replace } = require('./string');



const separator = "/"


const parse = path =>
    filter(x => x.length > 0)(split(separator)(path))


const format = chunks =>
    join(separator)(chunks)


const basename = (path, extension) =>
    replace(last(parse(path)))(extension)("")


const normalize = path =>
    format(parse(path))



module.exports = {
    separator,
    parse,
    format,
    basename,
    normalize
}