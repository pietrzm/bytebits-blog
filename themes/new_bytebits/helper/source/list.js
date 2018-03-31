const map = fn => xs =>
    xs.map(fn)


const filter = fn => xs =>
    xs.filter(fn)


const reduce = (fn, initialValue) => xs =>
    xs.reduce(fn, initialValue)


const includes = x => xs =>
    !!~xs.indexOf(x)


const every = fn => xs =>
    xs.every(fn)


const some = fn => xs =>
    xs.some(fn)


const head = xs =>
    xs[0]


const last = xs =>
    xs[xs.length - 1]


const isEmpty = xs =>
    xs.length === 0


const reverse = xs =>
    xs.reverse()


const take = n => xs =>
    xs.slice(0, n)


const tail = xs =>
    xs.slice(1, xs.length)


const join = separator => xs =>
    xs.join(separator)



module.exports = {
    map,
    filter,
    reduce,
    includes,
    last,
    head,
    isEmpty,
    reverse,
    take,
    tail,
    join,
    some,
    every
}