---
layout: docs

menu:
    - value: Function
      children:
        - value: curry
        - value: uncurry
        - value: compose
        - value: pipe
        - value: negate / complement
        - value: memoize
        - value: tap
        - value: throttle
        - value: debounce

    - value: Logic
      children:
        - value: and
        - value: nand
        - value: or
        - value: xor / eor / exor
        - value: xnor
        - value: not

    - value: List
      children:
        - value: reduce / reduceLeft / foldl
        - value: reduceRight / foldr
        - value: map
        - value: filter
        - value: every
        - value: some
        - value: find
        - value: includes
        - value: reverse
        - value: head
        - value: tail
        - value: take
        - value: last
        - value: nth
        - value: append
        - value: prepend
        - value: size
        - value: isEmpty

    - value: Type
      children:
        - value: isUndefined
        - value: isNull
        - value: isNil
        - value: isBoolean
        - value: isNumber
        - value: isString
        - value: isSymbol
        - value: isPrimitive
        - value: isArray
        - value: isArrayBuffer
        - value: isArrayLike
        - value: isTypedArray
        - value: isSet
        - value: isMap
        - value: isObject
        - value: isPromise
        - value: isDate
        - value: isRegExp
        - value: isError
        - value: isElement
        - value: isHTMLElement
        - value: isSVGElement

    - value: Math
      children:
        - value: add
        - value: subtract
        - value: multiply
        - value: divide
        - value: mean
        - value: median
        - value: clamp
        - value: isInteger
        - value: isOdd
        - value: isEven

    - value: String
      children:
        - value: words
        - value: lowercase
        - value: uppercase
        - value: capitalize
        - value: snakecase
        - value: dashcase
        - value: traincase
        - value: pascalcase
        - value: camelcase

    - value: Promise
      children:
        - value: fromDOMEvent
        - value: fromErrorFirstCallback
        - value: sleep
---



# Function

## curry
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
curry :: ?

type curry = <T> (f: T) => T | any
```

Todo: Provide a description.

```typescript
Todo: Provide an example.
```


## uncurry
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
uncurry :: ?

type uncurry = <T> (f: T) => T | any
```

Todo: Provide a description.

```typescript
Todo: Provide an example.
```


## compose
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
compose :: ?

type compose = (...fs: Function[]) => any
```

Todo: Provide a description.

```typescript
Todo: Provide an example.
```


## pipe
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
pipe :: ?

type pipe = (...fs: Function[]) => any
```

Todo: Provide a description.

```typescript
Todo: Provide an example.
```


## negate / complement
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
negate :: f -> f

type negate = <T> (f: T) => boolean
```

Todo: Provide a description.

```typescript
Todo: Provide an example.
```


## memoize
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
memoize :: ?

type memoize = <T> (f: T) => T
```

Todo: Provide a description.

```typescript
Todo: Provide an example.
```


## tap
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
tap :: ?

type tap = <T1, T2> (f: T1, x: T2) => T2
type tap = <T1, T2> (f: T1) => (x: T2) => T2
```

Todo: Provide a description.

```typescript
Todo: Provide an example.
```


## throttle
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
throttle :: number -> f -> f

type throttle = <T> (ms: number, f: T) => T
type throttle = <T> (ms: number) => (f: T) => T
```

Todo: Provide a description.

```typescript
Todo: Provide an example.
```


## debounce
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
debounce :: number -> f -> f

type debounce = <T> (ms: number, f: T) => T
type debounce = <T> (ms: number) => (f: T) => T
```

Todo: Provide a description.

```typescript
Todo: Provide an example.
```


---

---


# Logic

## and
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
and :: a -> b -> a | b

type and = <A, B>(a: A, b: B) => A | B
```
A logical conjunction, short-circuit evaluation.

A function that returns the first argument when falsy; otherwise the second argument.
Exactly the same behaviour as JavaScript's ["`&&`"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_AND_&#40;&#41;) operator.

| Parameters                                           |
| ------ | ------------------------------------------- |
| a: A | First value to be coerced and then evaluated  |
| b: B | Second value to be coerced and then evaluated |

**Returns** &nbsp; A | B
One of the passed in values

```typescript
// With booleans
and(false, false)               // false
and(false, true)                // false
and(true, false)                // false
and(true, true)                 // true
```


---


## nand
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
nand :: a -> b -> a | b

type nand = <A, B>(a: A, b: B) => A | B
```
A negated logical conjunction, short-circuit evaluation.

| Parameters                                           |
| ------ | ------------------------------------------- |
| a: A | First value to be coerced and then evaluated  |
| b: B | Second value to be coerced and then evaluated |

**Returns** &nbsp; A | B
One of the passed in values

```typescript
// With booleans
nand(false, false)               // true
nand(false, true)                // true
nand(true, false)                // true
nand(true, true)                 // false
```


---


## or
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
or :: a -> b -> a | b

type or = <A, B>(a: A, b: B) => A | B
```
A logical disjunction, short-circuit evaluation.

A function that returns the first argument when truthy; otherwise the second argument.
Exactly the same behaviour as JavaScript's ["`||`"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR_&#40;&#41;) operator.

| Parameters                                           |
| ------ | ------------------------------------------- |
| a: A | First value to be coerced and then evaluated  |
| b: B | Second value to be coerced and then evaluated |

**Returns** &nbsp; A | B
One of the passed in values

```typescript
// With booleans
or(false, false)               // false
or(false, true)                // true
or(true, false)                // true
or(true, true)                 // true
```


---


## nor
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
nor :: a -> b -> a | b

type nor = <A, B>(a: A, b: B) => A | B
```
A negated logical disjunction, short-circuit evaluation.

| Parameters                                           |
| ------ | ------------------------------------------- |
| a: A | First value to be coerced and then evaluated  |
| b: B | Second value to be coerced and then evaluated |

**Returns** &nbsp; A | B
One of the passed in values

```typescript
// With booleans
nor(false, false)               // true
nor(false, true)                // false
nor(true, false)                // false
nor(true, true)                 // false
```


---


## xor / eor / exor
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
xor :: a -> b -> a | b

type xor = <A, B>(a: A, b: B) => A | B
```
An exclusive logical disjunction, short-circuit evaluation.

| Parameters                                           |
| ------ | ------------------------------------------- |
| a: A | First value to be coerced and then evaluated  |
| b: B | Second value to be coerced and then evaluated |

**Returns** &nbsp; A | B
One of the passed in values

```typescript
// With booleans
xor(false, false)               // false
xor(false, true)                // true
xor(true, false)                // true
xor(true, true)                 // false
```

Aliases: `xor`, ``eor`, `exor`.


---


## xnor
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
xnor :: a -> b -> a | b

type xnor = <A, B>(a: A, b: B) => A | B
```
A negated exclusive logical disjunction, short-circuit evaluation.

| Parameters                                           |
| ------ | ------------------------------------------- |
| a: A | First value to be coerced and then evaluated  |
| b: B | Second value to be coerced and then evaluated |
**Returns** &nbsp; A | B
One of the passed in values

```typescript
// With booleans
xnor(false, false)               // true
xnor(false, true)                // false
xnor(true, false)                // false
xnor(true, true)                 // true
```

Aliases: `exnor`, `enor`, `nxor`, `xand`.


---


## not
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
not :: x -> boolean

type not = (a: any) => boolean
```

Todo: Provide a description.

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be negated                           |
**Returns** &nbsp; boolean
A negated passed in value

```typescript
// With booleans
not(false)                      // true
not(true)                       // false
```


---

---


# List

# reduce / reduceLeft / foldl
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
reduce :: ?

type reduce = <T> (reducer: (accumulator: T, x: T) => T, xs: T[], initialValue?: T) => T
type reduce = <T> (reducer: (accumulator: T, x: T) => T) => (xs: T[], initialValue? :T) => T
```

Todo: Provide a description.

| Parameters                                                                                    |
| --------------------------------------------- | --------------------------------------------- |
| reducer: (accumulator: T, value: T) => T      |                                               |
| list: T[]                                     |                                               |
| initialValue? :T                              |                                               |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
Todo: Provide an example.
```

Aliases: `reduce`, ``reduceLeft`, `foldl`.

---


# reduceRight / foldr
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
reduceRight :: ?

type reduceRight = <T> (reducer: (accumulator: T, x: T) => T, xs: T[], initialValue?: T) => T
type reduceRight = <T> (reducer: (accumulator: T, x: T) => T) => (xs: T[], initialValue? :T) => T
```

Todo: Provide a description.

| Parameters                                                                                    |
| --------------------------------------------- | --------------------------------------------- |
| reducer: (accumulator: T, value: T) => T      |                                               |
| list: T[]                                     |                                               |
| initialValue? :T                              |                                               |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
Todo: Provide an example.
```

Aliases: `reduceRight`, `foldr`.

---


# map
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
map :: mapper -> [x] -> [mapper x]
```
```typescript
type map = <A, B> (mapper: (x: A) => B, xs: List<A>) => List<B>
type map = <A, B> (mapper: (x: A) => B) => (xs: List<A>) => List<B>
```

Iterates over a `List` while invoking a `mapper` function on each of the List's value.
Returns a

| Parameters                                                                                    |
| --------------------------------------------- | --------------------------------------------- |
| mapper: (x: A) => B                           |                                               |
| xs: List                                      |                                               |
**Returns** &nbsp; [List]()
A boolean

```typescript

//= Works with Arrays like any map would.
map(add(7) , [ 1, 2, 3 ])
        //-> [ 8, 9, 10 ]

//= But additionally it can map over anything which implements Iterable protocol or is an ArrayLike object.
Promise.race(map(Promise.fromDOMEvent('click'), document.queryAll('.pokemon-starter')))
        //-> [ Promise(div.pokemon-starter), Promise(div.pokemon-starter), ... ]
    .then(ev => console.log(`RED received a ${ ev.innerText }`))

//= It also supports mapping over asynchronous collections.
map(evolve, fetch('/pokemons'))
        //-> [ Promise('Ivysaur'), Promise('Charmeleon'), Promise('Wartortle') ]
    /* Same as
        fetch('/pokemons')
            .then(map(evolve))
     */

//= Or with asynchronous mapper
map(fetch, [ '/pokemons/Pikachu', '/pokemons/Snorlax' ])
        //-> [ Promise('Pikachu'), Promise('Snorlax') ]
```


---


# filter
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
filter :: ?

type filter = <T> (predicate: (x: T) => boolean, xs: T[]) => T[]
type filter = <T> (predicate: (x: T) => boolean) => (xs: T[]) => T[]
```

Todo: Provide a description.

| Parameters                                                                                    |
| --------------------------------------------- | --------------------------------------------- |
| reducer: (accumulator: T, value: T) => T      |                                               |
| list: T[]                                     |                                               |
| initialValue? :T                              |                                               |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
Todo: Provide an example.
```


---


# every
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
every :: ?

type every = <T> (predicate: (x: T) => boolean, xs: T[]) => boolean
type every = <T> (predicate: (x: T) => boolean) => (xs: T[]) => boolean
```

Todo: Provide a description.

| Parameters                                                                                    |
| --------------------------------------------- | --------------------------------------------- |
| reducer: (accumulator: T, value: T) => T      |                                               |
| list: T[]                                     |                                               |
| initialValue? :T                              |                                               |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
Todo: Provide an example.
```


---


# some
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
some :: ?

type some = <T> (predicate: (x: T) => boolean, xs: T[]) => boolean
type some = <T> (predicate: (x: T) => boolean) => (xs: T[]) => boolean
```

Todo: Provide a description.

| Parameters                                                                                    |
| --------------------------------------------- | --------------------------------------------- |
| reducer: (accumulator: T, value: T) => T      |                                               |
| list: T[]                                     |                                               |
| initialValue? :T                              |                                               |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
Todo: Provide an example.
```


---


# find
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
find :: ?

type find = <T> (predicate: (x: T) => boolean, xs: T[]) => T
type find = <T> (predicate: (x: T) => boolean) => (xs: T[]) => T
```

Todo: Provide a description.

| Parameters                                                                                    |
| --------------------------------------------- | --------------------------------------------- |
| reducer: (accumulator: T, value: T) => T      |                                               |
| list: T[]                                     |                                               |
| initialValue? :T                              |                                               |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
Todo: Provide an example.
```


---


# includes
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
includes :: ?

type includes = <T> (x: T, xs: T[]) => boolean
type includes = <T> (x: T) => (xs: T[]) => boolean
```

Todo: Provide a description.

| Parameters                                                                                    |
| --------------------------------------------- | --------------------------------------------- |
| reducer: (accumulator: T, value: T) => T      |                                               |
| list: T[]                                     |                                               |
| initialValue? :T                              |                                               |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
Todo: Provide an example.
```


---


# reverse
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
reverse :: [a] => [a]

type reverse = <T> (xs: T[]) => T[]
```

Todo: Provide a description.

| Parameters                                                                                    |
| --------------------------------------------- | --------------------------------------------- |
|                                               |                                               |
**Returns** &nbsp; [?]()
A ?

```typescript
Todo: Provide an example.
```


---


# head
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
head :: [a] => a

type head = <T> (xs: T[]) => T
```

Todo: Provide a description.

| Parameters                                                                                    |
| --------------------------------------------- | --------------------------------------------- |
|                                               |                                               |
**Returns** &nbsp; [?]()
A ?

```typescript
Todo: Provide an example.
```


---


# tail
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
tail :: [a] => [a]

type tail = <T> (xs: T[]) => T[]
```

Todo: Provide a description.

| Parameters                                                                                    |
| --------------------------------------------- | --------------------------------------------- |
|                                               |                                               |
**Returns** &nbsp; [?]()
A ?

```typescript
Todo: Provide an example.
```


---


# take
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
take :: [a] => [a]

type take = <T> (xs: T[]) => T[]
```

Todo: Provide a description.

| Parameters                                                                                    |
| --------------------------------------------- | --------------------------------------------- |
|                                               |                                               |
**Returns** &nbsp; [?]()
A ?

```typescript
Todo: Provide an example.
```


---


# last
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
last :: [a] => a

type last = <T> (xs: T[]) => T
```

Todo: Provide a description.

| Parameters                                                                                    |
| --------------------------------------------- | --------------------------------------------- |
|                                               |                                               |
**Returns** &nbsp; [?]()
A ?

```typescript
Todo: Provide an example.
```


---


# nth
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
nth :: [a] => a

type nth = <T> (xs: T[]) => T
```

Todo: Provide a description.

| Parameters                                                                                    |
| --------------------------------------------- | --------------------------------------------- |
|                                               |                                               |
**Returns** &nbsp; [?]()
A ?

```typescript
Todo: Provide an example.
```


---


# append
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
append :: [a] => a => [a]

type append = <T> (xs: T[]) => (x: T) => T[]
```

Todo: Provide a description.

| Parameters                                                                                    |
| --------------------------------------------- | --------------------------------------------- |
|                                               |                                               |
**Returns** &nbsp; [?]()
A ?

```typescript
Todo: Provide an example.
```


---


# prepend
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
append :: [a] => a => [a]

type append = <T> (xs: T[]) => (x: T) => T[]
```

Todo: Provide a description.

| Parameters                                                                                    |
| --------------------------------------------- | --------------------------------------------- |
|                                               |                                               |
**Returns** &nbsp; [?]()
A ?

```typescript
Todo: Provide an example.
```


---


# size
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
size :: [a] => number

type size = <T> (xs: T[]) => number
```

Todo: Provide a description.

| Parameters                                                                                    |
| --------------------------------------------- | --------------------------------------------- |
|                                               |                                               |
**Returns** &nbsp; [?]()
A ?

```typescript
Todo: Provide an example.
```


---


# isEmpty
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isEmpty :: [a] => boolean

type isEmpty = <T> (xs: T[]) => boolean
```

Todo: Provide a description.

| Parameters                                                                                    |
| --------------------------------------------- | --------------------------------------------- |
|                                               |                                               |
**Returns** &nbsp; [?]()
A ?

```typescript
Todo: Provide an example.
```



---

---



# Type

## isUndefined
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isUndefined :: x -> boolean

type isUndefined = (x: any) => x is undefined
```

Tests whether a given value is [undefined]().

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be verified                          |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
isUndefined(undefined)          // -> true
isUndefined(null)               // -> false
isUndefined([])                 // -> false
```


---


## isNull
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isNull :: x -> boolean

type isNull = (x: any) => x is null
```

Tests whether a given value is [null]().

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be verified                          |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
isNull(undefined)               // -> false
isNull(null)                    // -> true
isNull([])                      // -> false
```


---


## isNil
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isNil :: x -> boolean

type isNil = (x: any) => x is undefined | null
```

Tests whether a given value is [undefined]() or [null]().

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be verified                          |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
isNil(undefined)               // -> true
isNil(null)                    // -> true
isNil([])                      // -> false
```


---


## isBoolean
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isBoolean :: x -> boolean

type isBoolean = (x: any) => x is boolean
```

Tests whether a given value is a [boolean]().

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be verified                          |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
isBoolean(true)                 // -> true
isBoolean(false)                // -> true
isBoolean(undefined)            // -> false
isBoolean(null)                 // -> false
isBoolean([])                   // -> false
```


---


## isNumber
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isNumber :: x -> boolean

type isNumber = (x: any) => x is number
```

Tests whether a given value is a [number]().

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be verified                          |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
isNumber(7)                    // -> true
isNumber(NaN)                  // -> true
isNumber(Infinity)             // -> true
isNumber(undefined)            // -> false
isNumber(null)                 // -> false
isNumber([])                   // -> false
```


---


## isString
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isString :: x -> boolean

type isString = (x: any) => x is string
```

Tests whether a given value is a [string]().

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be verified                          |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
isString("foo")                // -> true
isString(String("foo"))        // -> true
isString(new String("foo"))    // -> true
isString(undefined)            // -> false
isString(null)                 // -> false
isString([])                   // -> false
```


---


## isSymbol
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isSymbol :: x -> boolean

type isSymbol = (x: any) => x is Symbol
```

Tests whether a given value is an instance of a [Symbol]().

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be verified                          |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
isSymbol(Symbol())             // -> true
isSymbol(Symbol.unscopables)   // -> true
isSymbol(undefined)            // -> false
isSymbol(null)                 // -> false
isSymbol([])                   // -> false
```


---


## isPrimitive
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isPrimitive :: x -> boolean

type isPrimitive = (x: any) => x is undefined | null | boolean | number | string | symbol
```

Tests whether a given value is one of [JavaScript's primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be verified                          |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
isPrimitive(0)                    // -> true
isPrimitive("foo")                // -> true
isPrimitive(undefined)            // -> true
isPrimitive(null)                 // -> true
isPrimitive([])                   // -> false
```


---


## isArray
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isArray :: x -> boolean

type isArray = (x: any) => x is Array
```

Tests whether a given value is an instance of an [Array]().

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be verified                          |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
isArray(undefined)            // -> false
isArray(null)                 // -> false
isArray([])                   // -> true
```


---


## isArrayBuffer
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isArrayBuffer :: x -> boolean

type isArrayBuffer = (x: any) => x is ArrayBuffer
```

Tests whether a given value is an instance of an [ArrayBuffer]().

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be verified                          |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
isArrayBuffer([])                   // -> false
isArrayBuffer(new ArrayBuffer())    // -> true
isArrayBuffer(new Int8Array())      // -> false
```


---


## isArrayLike
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isArrayLike :: x -> boolean

type isArrayLike = (x: any) => x is ArrayLike
```

Tests whether a given value is an instance of an [ArrayLike]().

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be verified                          |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
isArrayLike([])                   // -> true
isArrayLike(new ArrayBuffer())    // -> true
isArrayLike(new Int8Array())      // -> true
```


---


## isTypedArray
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isTypedArray :: x -> boolean

type isTypedArray = (x: any) => x is TypedArray
```

Tests whether a given value is an instance of a [TypedArray]().

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be verified                          |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
isTypedArray([])                   // -> false
isTypedArray(new ArrayBuffer())    // -> false
isTypedArray(new Int8Array())      // -> true
```


---


## isSet
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isSet :: x -> boolean

type isSet = (x: any) => x is Set
```

Tests whether a given value is an instance of a [Set]().

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be verified                          |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
isSet([])             // -> false
isSet({}})            // -> false
isSet(new Set())      // -> true
isSet(new Map())      // -> false
```


---


## isMap
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isMap :: x -> boolean

type isMap = (x: any) => x is Map
```

Tests whether a given value is an instance of a [Map]().

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be verified                          |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
isMap([])             // -> false
isMap({}})            // -> false
isMap(new Set())      // -> false
isMap(new Map())      // -> true
```


---


## isObject
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isObject :: x -> boolean

type isObject = (x: any) => x is object
```

Tests whether a given value is an [object]().

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be verified                          |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
isObject([])             // -> true
isObject({}})            // -> true
isObject(new Set())      // -> true
isObject(new Map())      // -> true
```


---


## isPromise
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isPromise :: x -> boolean

type isPromise = (x: any) => x is Promise
```

Tests whether a given value is an instance of a [Promise]().

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be verified                          |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
isPromise(new Promise())          // -> true
isPromise(Promise.resolve())      // -> true
isPromise(fetch())                // -> true
```


---


## isDate
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isDate :: x -> boolean

type isDate = (x: any) => x is Date
```

Tests whether a given value is an instance of a [Date]().

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be verified                          |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
isDate(new Date())                // -> true
```


---


## isRegExp
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isRegExp :: x -> boolean

type isRegExp = (x: any) => x is RegExp
```

Tests whether a given value is a RegExp.

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be verified                          |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
isRegExp(new RegExp())                // -> true
isRegExp(/abc/)                       // -> true
```


---


## isError
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isError :: x -> boolean

type isError = (x: any) => x is Error
```

Tests whether a given value is an instance of an [Error]().

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be verified                          |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
isError(new Error())                // -> true
```


---


## isElement
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isElement :: x -> boolean

type isElement = (x: any) => x is Element
```

Tests whether a given value is an Element.

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be verified                          |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
Todo: Provide an example.
```


---


## isHTMLElement
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isHTMLElement :: x -> boolean

type isHTMLElement = (x: any) => x is HTMLElement
```

Tests whether a given value is a [HTMLElement]().

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be verified                          |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
Todo: Provide an example.
```


---


## isSVGElement
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isSVGElement :: x -> boolean

type isSVGElement = (x: any) => x is SVGElement
```

Tests whether a given value is a [SVGElement]().

| Parameters                                             |
| ------ | --------------------------------------------- |
| x: any | Value to be verified                          |
**Returns** &nbsp; [boolean]()
A boolean

```typescript
Todo: Provide an example.
```


---

---


# Math

## add
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
add :: number -> number -> number

type add = (a: number) => (b: number) => number
```

Adds two given numbers.


Parameters                                          |
 -------------------------------------------------- | --------------------------------------------------
a: [number]()                                       | An augend, first number in the equation.
b: [number]()                                       | An addend. second number in the equation.

**Returns** &nbsp; [number]()
An addition of two given numbers.


```typescript
add(2, 2)                                           // -> 4
```


---


## subtract
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
subtract :: number -> number -> number

type subtract = (a: number) => (b: number) => number
```


Subtracts two given numbers.


Parameters                                          |
 -------------------------------------------------- | --------------------------------------------------
a: [number]()                                       | A minuend, first number in the equation.
b: [number]()                                       | A subtrahend, second number in the equation.

**Returns** &nbsp; [number]()
A subtraction of two given numbers.


```typescript
subtract(2, 2)             // -> 0
```


---


## multiply
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
multiply :: number -> number -> number

type multiply = (a: number) => (b: number) => number
```

Multiplies two given numbers.


Parameters                                          |
 -------------------------------------------------- | --------------------------------------------------
a: [number]()                                       | A multiplier, first number in the equation.
b: [number]()                                       | A multiplicand, second number in the equation.

**Returns** &nbsp; [number]()
A multiplication of two given numbers.


```typescript
multiply(2, 2)             // -> 4
```


---


## divide
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
divide :: number -> number -> number

type divide = (a: number) => (b: number) => number
```

Divides two given numbers.

Parameters                                          |
 -------------------------------------------------- | --------------------------------------------------
a: number                                           | A dividend, first number in the equation.
b: number                                           | A divisor, second number in the equation.
**Returns** &nbsp; [number]()
A division of two given numbers.

```typescript
divide(2, 2)                                        // -> 1
```


---


## mean
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
average :: [number] -> number

type average = (xs: number) => number
```

Finds an average of a list of real numbers.


Parameters                                          |
 -------------------------------------------------- | --------------------------------------------------
xs: Iterable&lt;[number]()&gt;                      | An iterable of numbers (i.e. [number]()[], [Set]()&lt;[number]()&gt;).

**Returns** &nbsp; [number]()
An average of given list of real numbers.


```typescript
average([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ])              // -> 5
```


---


## median
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
median :: [number] -> number

type median = (xs: number) => number
```

Finds a median of a list of real numbers.


Parameters                                          |
 -------------------------------------------------- | --------------------------------------------------
xs: Iterable&lt;[number]()&gt;                      | An iterable of numbers (i.e. [number]()[], [Set]()&lt;[number]()&gt;).

**Returns** &nbsp; [number]()
A median of given list of real numbers.


```typescript
median([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ])               // -> 5
```


---


## clamp
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
clamp :: [number] -> number -> number

type clamp = ([ a, b ]: [ number, number ], x: number) => number
```

Clamps a number within lower and upper bounds (inclusive).


Parameters                                          |
 -------------------------------------------------- | --------------------------------------------------
[ a, b ]: [ [number](), [number]() ]                | A tuple of upper and lower bounds.
x: [number]()                                       | A number to be clamped.

**Returns** &nbsp; [number]()
A clamped number within specified bounds.


```typescript
clamp([ 0, 1 ], -1.75)                              // -> 0
clamp([ 0, 1 ], 1.2)                                // -> 1
clamp([ 0, 1 ], 0.25)                               // -> 0.25
```


---


## isInteger
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isInteger :: x -> boolean

type isInteger = (x: number) => boolean
```

Tests whether a real number is an Integer.

Parameters                                          |
 -------------------------------------------------- | --------------------------------------------------
x: number                                           | Number to be tested.
**Returns** &nbsp; [boolean]()
A boolean specifying whether a given real number is an Integer.

```typescript
isInteger(3)                                        // -> true
isInteger(0.1)                                      // -> false
```


---


## isOdd
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isOdd :: x -> boolean

type isOdd = (x: number) => boolean
```

Tests whether a real number is odd.

Parameters                                          |
 -------------------------------------------------- | --------------------------------------------------
x: number                                           | Number to be tested.
**Returns** &nbsp; [boolean]()
A boolean specifying whether a given real number is odd.

```typescript
isOdd(7)                                            // -> true
isOdd(10)                                           // -> false
```


---


## isEven
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
isEven :: x -> boolean

type isEven = (x: number) => boolean
```

Tests whether a real number is even.

Parameters                                          |
 -------------------------------------------------- | --------------------------------------------------
x: number                                           | Number to be tested.
**Returns** &nbsp; [boolean]()
A boolean specifying whether a given real number is even.

```typescript
isEven(10)                                          // -> true
isEven(7)                                           // -> false
```


---

---


# String

## words
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
words :: string -> [string]

type words = (text: string) => string[]
```

Splits text into an array of words.

Parameters                                          |
 -------------------------------------------------- | --------------------------------------------------
text: string                                        | Text to be split.
**Returns** &nbsp; [string[]]()
An array of words within given text.

```typescript
words("The quick brown fox jumps over the lazy dog.")
    // -> ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog" ]
```


---


## lowercase
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
lowercase :: string -> string

type lowercase = (text: string) => string
```

Turns text into a lowercase text.

Parameters                                          |
 -------------------------------------------------- | --------------------------------------------------
text: string                                        | Text to be transformed.
**Returns** &nbsp; [string]()
A lowercase transformed text.

```typescript
lowercase("The quick brown FOX jumps over the lazy DOG.")
    // -> "the quick brown FOX jumps over the lazy dog."
```


---


## uppercase
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
uppercase :: string -> string

type uppercase = (text: string) => string
```

Turns text into a uppercase text.

Parameters                                          |
 -------------------------------------------------- | --------------------------------------------------
text: string                                        | Text to be transformed.
**Returns** &nbsp; [string]()
A uppercase transformed text.

```typescript
uppercase("The quick brown FOX jumps over the lazy DOG.")
    // -> "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
```


---


## capitalize
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
capitalize :: string -> string

type capitalize = (text: string) => string
```

Turns text into a capitalized text.

Parameters                                          |
 -------------------------------------------------- | --------------------------------------------------
text: string                                        | Text to be capitalized.
**Returns** &nbsp; [string]()
A capitalized text.

```typescript
capitalize("the quick brown FOX jumps over the lazy DOG.")
    // -> "The quick brown FOX jumps over the lazy DOG."
```


---


## snakecase
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
snakecase :: string -> string

type snakecase = (text: string) => string
```

Turns text into a snakecase text.

Parameters                                          |
 -------------------------------------------------- | --------------------------------------------------
text: string                                        | Text to be snakecase.
**Returns** &nbsp; [string]()
A snakecase text.

```typescript
snakecase("The quick brown fox jumps over the lazy dog.")
    // -> "the_quick_brown_fox_jumps_over_the_lazy_dog"
```


---


## dashcase
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
dashcase :: string -> string

type dashcase = (text: string) => string
```

Turns text into a snakecase text.

Parameters                                          |
 -------------------------------------------------- | --------------------------------------------------
text: string                                        | Text to be snakecase.
**Returns** &nbsp; [string]()
A snakecase text.

```typescript
dashcase("The quick brown fox jumps over the lazy dog.")
    // -> "the-quick-brown-fox-jumps-over-the-lazy-dog"
```


---


## traincase
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
traincase :: string -> string

type traincase = (text: string) => string
```

Turns text into a traincase text.

Parameters                                          |
 -------------------------------------------------- | --------------------------------------------------
text: string                                        | Text to be traincase.
**Returns** &nbsp; [string]()
A traincase text.

```typescript
traincase("The quick brown fox jumps over the lazy dog.")
    // -> "The-Quick-Brown-Fox-Jumps-Over-The-Lazy-Dog"
```


---


## pascalcase
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
pascalcase :: string -> string

type pascalcase = (text: string) => string
```

Turns text into a pascalcase text.

Parameters                                          |
 -------------------------------------------------- | --------------------------------------------------
text: string                                        | Text to be traincase.
**Returns** &nbsp; [string]()
A pascalcase text.

```typescript
pascalcase("The quick brown fox jumps over the lazy dog.")
    // -> "TheQuickBrownFoxJumpsOverTheLazyDog"
```


---


## camelcase
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
camelcase :: string -> string

type camelcase = (text: string) => string
```

Turns text into a camelcase text.

Parameters                                          |
 -------------------------------------------------- | --------------------------------------------------
text: string                                        | Text to be camelcase.
**Returns** &nbsp; [string]()
A camelcase text.

```typescript
pascalcase("The quick brown fox jumps over the lazy dog.")
    // -> "theQuickBrownFoxJumpsOverTheLazyDog"
```


---

---


# Promise

## fromDOMEvent
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
fromDOMEvent :: string -> Node -> Promise

type fromDOMEvent = <T>(event: string, node: Node) => Promise<T>
type fromDOMEvent = <T>(event: string) => (node: Node) => Promise<T>
```

Promisifies a node's event listener.
Underneath it attaches a new listener which **will clear itself** right after an event is produced by the given node.

Parameters                                          |
 -------------------------------------------------- | --------------------------------------------------
event: string                                       | An event name on which promise will resolve.
node: Node                                          | A node on which a listener will be attached.
**Returns** &nbsp; [Promise]()
A promisified node's event listener.

```typescript
fromDOMEvent("click", document.body)
```


---


## fromErrorFirstCallback
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
fromErrorFirstCallback :: Function -> Promise

type fromErrorFirstCallback = (callback: Function) => Promise
```

Promisifies an error-first/node style callback.

Parameters                                          |
 -------------------------------------------------- | --------------------------------------------------
callback: Function                                  | An error-first/node style callback.
**Returns** &nbsp; [Promise]()
A promisified callback.

```typescript
const stat = fromErrorFirstCallback(fs.stat)

stat.then(stats =>
    console.log(stats))
```


---


## sleep
[*`source`*](#) &nbsp; &mdash;  &nbsp; [*`spec`*](#)
```typescript
sleep :: number -> Promise<void>? -> Promise<void>

type sleep = (duration: number, cancellationToken?: Promise) => Promise
```

Returns a promise which self-resolves after a specified amount of time.

Supports promise-based cancellation token.
When such token resolves, it leaves a returned promise in pending status forever.


Parameters                                          |
 -------------------------------------------------- | --------------------------------------------------
duration: number                                    | Sleep duration in miliseconds.
cancellationToken: Promise                          | An optional promise as a cancellation token.
**Returns** &nbsp; [Promise]()
A Promise which self-resolves after a given duration of time.

```typescript
sleep(0)
    .then(() => console.log("Three!"))
    .then(sleep(1000))
    .then(() => console.log("Two!"))
    .then(sleep(1000))
    .then(() => console.log("One!"))
    .then(sleep(1000))
    .then(() => console.log("Happy new year!"))

sleep(3000, sleep(1000).then(() => console.log("Promise was cancelled.")))
    .then(() => console.log("I will never log anything."))
    // -> "Promise was cancelled."
```


---
