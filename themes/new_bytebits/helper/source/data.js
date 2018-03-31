const { map, filter, some, every, reverse, tail } = require("./list")
const { keys, prop } = require("./object")



const query = (query) => data =>
    map(prop(data))(filter(query)(keys(data)))


const and = (...queries) => entry =>
    every(query => query(entry))(tail(reverse(queries)))


const or = (...queries) => entry =>
    some(query => query(entry))(queries)



module.exports = {
    query,
    and,
    or
}





// const query = (queries, data) => {
//     return map(d => d)(data)
// }



// const { parse } = require("./path")
//
//
//
//
//
// const toObject = (...props) => (value, target = {}) => {
//     const inner = (xs, currentValue) => {
//         if ( isEmpty( xs ) ) {
//             return value
//         } else {
//             const currentProperty = head(xs)
//
//             currentValue[ currentProperty ] =
//                 inner(tail(xs), currentValue[ currentProperty ] || {})
//             return currentValue
//         }
//     }
//
//     return inner(props, target);
// }
//
//
// const data = d => {
//     const dictionary = {};
//     map(prop => toObject(...parse(prop))(d[prop], dictionary))(keys(d))
//
//     return dictionary
// }
//
// // console.log(fnx([ 1, 2, 3 ]))
//
// console.log(JSON.stringify(
//     data({
//         'articles/browsers-event-loop/comments/dc357430-340d-11e8-b7f2-af13eee21e7d':
//             {
//                 _id: 'dc357430-340d-11e8-b7f2-af13eee21e7d',
//                 name: 'Jeremy Tobias5',
//                 message: 'It\'s awful. (I\'m really jealous)',
//                 date: 1522409477276
//             },
//         'articles2/browsers-event-loop/comments/dc357430-340d-11e8-b7f2-af13eee21e7d':             {
//             _id: 'dc357430-340d-11e8-b7f2-af13eee21e7d',
//             name: 'Jeremy Tobias4',
//             message: 'It\'s awful. (I\'m really jealous)',
//             date: 1522409477276
//         },
//         'articles2/browsers-event-loop2/comments/dc357430-340d-11e8-b7f2-af13eee21e7d':             {
//             _id: 'dc357430-340d-11e8-b7f2-af13eee21e7d',
//             name: 'Jeremy Tobias3',
//             message: 'It\'s awful. (I\'m really jealous)',
//             date: 1522409477276
//         },
//         'articles2/browsers-event-loop2/comments2/dc357430-340d-11e8-b7f2-af13eee21e7d':             {
//             _id: 'dc357430-340d-11e8-b7f2-af13eee21e7d',
//             name: 'Jeremy Tobias2',
//             message: 'It\'s awful. (I\'m really jealous)',
//             date: 1522409477276
//         },
//         'articles2/browsers-event-loop2/comments2/dc357430-340d-11e8-b7f2-af13eee21e7d2':             {
//             _id: 'dc357430-340d-11e8-b7f2-af13eee21e7d',
//             name: 'Jeremy Tobias1',
//             message: 'It\'s awful. (I\'m really jealous)',
//             date: 1522409477276
//         },
//         'somethingelse/wat': 'ohwell'
//     })))
//
//
// module.exports = {
//
// }