const map = fn => list =>
    list.map(fn)


const filter = fn => list =>
    list.filter(fn)


const includes = item => list =>
    !!~list.indexOf(item)


const last = xs =>
    xs[xs.length]


module.exports = {
    map,
    filter,
    includes,
    last
}