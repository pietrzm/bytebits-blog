const log = any => {
    console.log(any)
    return any
}

const warn = any => {
    console.warn(any)
    return any
}

const error = any => {
    console.error(any)
    return any
}



module.exports = {
    log,
    warn,
    error
}