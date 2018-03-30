const kebab = s =>
    s.toLowerCase().replace(" ", "-")


const split = separator => s =>
    s.split(separator)


const replace = string => re => value =>
    string.replace(re, value)


module.exports = {
    kebab,
    split,
    replace
}