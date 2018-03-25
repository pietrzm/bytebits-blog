const map = fn => list =>
    list.map(fn)


const filter = fn => list =>
    list.filter(fn)


const includes = item => list =>
    !!~list.indexOf(item)



module.exports = {
    map,
    filter,
    includes
}