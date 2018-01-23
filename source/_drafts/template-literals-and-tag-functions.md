---
layout: article

title:  Template literals and tag functions
date: 2019-01-01
categories:
    - Vanilla JavaScript
    - ECMAScript 6
tags: [ vanilla, javascript, template, literal, string, tag function ]
summary: |
    Some summary
    
icon: devicon-javascript-plain
---

> (Some kind of introduction.) [Gone will be the days of long string concatenation!]

> (Explain basics of template literals.)
> (Show them the string interpolation.)

```javascript
// Some basic code sample here
const domain = "example-shop.com",
    language = "en-GB",
    items= ["Orange", "Apple"]

const url = `https://${ domain }/${ language }/checkout-cart?items=${ items }`
//
```

> (Present them a basic, cool functionality they can implement with it.)

```javascript
// Some cool functionality
const toothbrush = { 
    name: "Toothbrush Toothy", 
    price: 13.99
}

const template = item => `
    <div class="remove-item modal">
        <header>
            <h1>${ item.name } - ${ item.price } EUR</h1>
        </header>
        <p>Are you sure you want to remove this item from your shopping cart?</p>
        <button onclick="cart.removeItem(${ item })">Remove</button>
    </div>
`


template(toothbrush)
//  <div class="remove-item modal">
//      <header>
//          <h1>${ item.name } - ${ item.price } EUR</h1>
//          <p>${ item.description }</p>
//      </header>
//      <p>Are you sure you want to remove this item from your shopping cart?</p>
//      <button onclick="cart.removeItem(${ item })">Remove</button>
//  </div>
```

> (Explain them that's basically it, when it comes to template literals invoked without a tag.)
> (Tell, to keep reading on, if they're curious about tags.)

## Tagged template literals
> (Some kind of introduction to function tags of template literals.)
> (Show them how to use a template literal tag.)

```javascript
// Some sample of using tagged template strings
String.raw`You really shold find a work Joe.`
//
```

> (Show them how to implement such tag.)

```javascript
// Implementation of mentioned before tag
const blah = (strings, ...values) => {
    console.log(strings[0]) //
    console.log(strings[1]) //
    console.log(values[0])  //    
    console.log(values[1])  //
        
    return "Blah, blah, blah..."
}


blah``
// 
```

> (Explain each argument of a function.)

```javascript
// Compare both calls, as a tag and as a function and present them no difference on the output.
String.raw``    //
String.raw([], null, null)    //
```

## Exercise
> (Present users with some simple exercise which may seem useful to some.)
> (Define the use case for the following examples.)

### Text
> (Start with reimplementing the default functionality of a template literal.)
> (Prove them that there's no smoke and mirrors involved in how template literals work, that it's nothing more than some sugar on top.)
> (Explain to readers, how this basic tag will be used as a base for every other tag that will be introduced shortly.)

```javascript
const text = (strings, ...substitutions) => {
  let result = ""

  for (let i = 0; i < strings.length; i++) {
    result += strings[i]
    if (i <= substitutions.length - 1) {
      result += substitutions[i]
    }
  }

  return result
}

const raw = (strings, ...substitutions) => {
    let result = strings.raw[0];
    for (const [i, substitution] of substitutions.entries()) {
        result += substitution;
        result += strings.raw[i + 1];
    }
    
    
    return result;
}


text``
//
```

### ?
> (Explain what will be exactly our next tag, and why should we even bother.)
> (Introduce use case.)

```javascript
const text = (strings, ...values) => {
  let result = ""

  for (let i = 0; i < strings.length; i++) {
    result += strings[i]
    if (i <= values.length - 1) {
      result += values[i]
    }
  }

  return result
}


text``
//
```