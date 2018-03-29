---
layout: article

title: Fun functional JavaScript
date: 2019-01-01
categories:
    - Vanilla JavaScript
tags: [ vanilla, javascript, functional programming ]
summary: |
    Higher-order functions, partial application, composition and functors. Together we’ll put the category theory into practice.
    Learn about the benefits of functional programming in JavaScript applications through real life examples.

icon: devicon-javascript-plain
---


# Outline
- Why would one even bother?
    - A.
    - B.
    - C.
- Fine, I'm listening.
    - Purity. (Pure functions)
    - Currying. (Currying)
        - Currying. (Currying)
            [Didn't you say that keeping track of any state makes a function impure?]
            - Higher-order functions. (Higher-order functions)
                [Functions are values. Our output is nothing more than a mere value.]
        - Auto-currying. (Auto-currying)
            [Isn't this a tad tedious?]
    - Because style matters. (Point-Free Style)
        [But why?]
    - Composition. (Composition)
        [It's really hard to read how those evaluate, so much parentheses.]
        - Piping. (Piping)
            [Sure, it's better but why it's upside down?]
    - Functors. (Functors)
        - Monads.
            - Maybe.
            - Future.
                - Promises.



# Introduction
Hello everyone!
Today I'll be your first time ever public speaker, so please mind my weirdness.

So, before we even start.
I'll answer some of the question you might be pondering yourself.


## Who am I?
Well, I'm not any kind of a special snowflake, mind you.
I am your average, day to day JavaScript developer you pass by every mundane Monday in the kitchen's hall,
who happens to have something to share with you.
Currently occupied by work at GFT.


## Am I in the right room?
Well, you might be.
I'm here to show you how can you apply functional programming concepts in JavaScript applications.
But before I answer your "how", let me first answer your "why".





# Why would one even bother?
"But why would I even bother with this functional nonsense?", you may ask.
Well mate, I'll tell you why!

## A

## B

## C





# Fine, I'm listening.
You really should be convinced by now.

As I mentioned before, I'm not by any means a functional programming purist,
but what I believe is that an applications can benefit greatly when this paradigm is applied correctly.

We, corporate developers, have seen things.
Oh, the horrors which plagues codebases which outlived multiple developers.
Such always ends as a mess. Horrid, unpleasant, no fun to work with mess.

Those could be prevented and millions kittens saved.
If you would take home only one concept, then please, let it be pure functions.


## On purity
```javascript
// Bad example
```

```javascript
// Good example
```


## Currying
```javascript
// Example without a curried function
```

```javascript
// Example with a curried function
```

### Auto-currying
```javascript
// Example of a definition of an auto-curried function.
```

## Because style matters. (Point-Free Style)
```javascript
// Simple example of a point-free style with a curried function
```

```javascript
// Complex example of a point-free style with multiple curried functions
```

## Composition. (Composition)
```javascript
// Example of a complex composition which we just shown
```

```javascript
// Example of a complex composition rewritten with a help of a "compose" utility
```

### Piping
```javascript
// Example of a complex composition rewritten with a help of a "pipe" utility
```

## Functors
```javascript
// Example of a really simple value container
```

```javascript
// Example in which we add some helpful methods to this container class
```

```javascript
// Showcase on how we can use such simple container
```

### Maybe
```javascript
// Example of fairly simple Maybe monad implementation
```

```javascript
// Bunch of examples on how can this be of any help
```

### Future
```javascript
// Example of fairly simple Maybe monad implementation
```

```javascript
// Bunch of examples on how can this be of any help
```

#### Promises
```javascript
// Proof that a promise is simply a Future monad with a fancier API
```


---

## Rubbish
- Perks of functional programming
    - It's just a math
- Higher-order functions
- Pure functions
- Currying
- Composition
- Functors
- Bonus:
    - Point-Free Style
    - Hindley-Milner type system
    - Referential Transparency
