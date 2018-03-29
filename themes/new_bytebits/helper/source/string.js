const kebab = string =>
    string
        .toLowerCase()
        .replace(" ", "-")


const split = a => b =>
    b.split(a)


module.exports = {
    kebab,
    split
}