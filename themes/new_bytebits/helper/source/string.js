const kebab = s =>
    s.toLowerCase().replace(" ", "-")


const split = separator => s =>
    s.split(separator)


const replace = string => re => value =>
    string.replace(re, value)


const search = re => string =>
    string.search(re)



module.exports = {
    kebab,
    search,
    split,
    replace
}