const mList = require("./source/list")
const mObject = require("./source/object")
const mArticle = require("./source/article")
const mString = require("./source/string")
const mTime = require("./source/time")
const mPath = require("./source/path")
const mData = require("./source/data")



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


const and =
    mData.and


const or =
    mData.or



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