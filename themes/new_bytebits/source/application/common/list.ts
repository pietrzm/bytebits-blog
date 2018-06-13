export type Identity<T> = (x: T) => T

export type Predicate<T> = (x: T) => boolean

export type Apply<T, K> = (x: T) => K



export const map = <T, K>(fn: Apply<T, K>) => (xs: T[]): K[] =>
    xs.map(fn)


export const filter = <T>(fn: Predicate<T>) => (xs: T[]): T[] =>
    xs.filter(fn)


export const reduce = (fn: any) => (xs: any) =>
    xs.reduce(fn)





export const List = {
    map,
    filter
}