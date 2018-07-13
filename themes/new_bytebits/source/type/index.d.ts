declare module "and.js" {
    function and<A, B>(a: A, b: B): A | B
    function and<A, B>(a: A): (b: B) => A | B
}



interface and<A, B> {
    (a: A, b: B): A | number
    (a: A): (b: B) => A | B
}

