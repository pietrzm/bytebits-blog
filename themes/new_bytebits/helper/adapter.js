const mList = require("./source/list")
const mObject = require("./source/object")
const mArticle = require("./source/article")
const mString = require("./source/string")
const mTime = require("./source/time")
const mPath = require("./source/path")
const mData = require("./source/data")
const mValue = require("./source/value")
const mFunctional = require("./source/functional")



const prop = (object, key) =>
    mObject.prop(object)(key)


const kebab =
    mString.kebab


const hasTag =
    mArticle.hasTag


const normalize =
    mPath.normalize


const date =
    mTime.date


const map = (xs, fn) =>
    xs.map(fn)


const filter = (xs, fn) =>
    mList.filter(fn)(xs)


const includes =
    mList.includes


const query = (data, query) =>
    mData.query(query)(data)


const and = (v, a, r, g, s) => {
    const { filter, reverse, tail } = mList,
        { isTruthy } = mValue

    const vargs = xs => reverse(tail(reverse(filter(isTruthy)(xs))))
    return mData.and.apply(null, vargs([ v, a, r, g, s ]))
}


const or = (v, a, r, g, s) => {
    const { filter, reverse, tail } = mList,
        { isTruthy } = mValue

    const vargs = xs => reverse(tail(reverse(filter(isTruthy)(xs))))
    return mData.or.apply(null, vargs([ v, a, r, g, s ]))
}



module.exports = {
    map, filter,
    hasTag,
    date,
    normalize,
    kebab,
    query,
    prop,
    and,
    or,
    includes
}