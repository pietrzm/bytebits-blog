const keys = object =>
    Object.keys(object)


const prop = object => key =>
    object[key]



module.exports = {
    keys,
    prop
}