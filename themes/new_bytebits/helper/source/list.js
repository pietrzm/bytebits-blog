const map = fn => xs =>
    xs.map(fn)


const filter = fn => xs =>
    xs.filter(fn)


const includes = x => xs =>
    !!~xs.indexOf(x)


const last = xs =>
    xs[xs.length - 1]


const isEmpty = xs =>
    xs.length > 0


const reverse = xs =>
    xs.reverse()


const take = n => xs =>
    xs.slice(0, n)


const join = separator => xs =>
    xs.join(separator)



module.exports = {
    map,
    filter,
    includes,
    last,
    isEmpty,
    reverse,
    take,
    join
}