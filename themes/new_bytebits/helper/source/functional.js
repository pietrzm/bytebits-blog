const curry = fn =>
    (...args) =>
        (args.length >= fn.length)
            ? fn(...args)
            : (...args2) => fn(...[ ...args, ...args2 ])


const j = (fn, ...args) =>
    fn(...args)



module.exports = {
    curry,
    j
}