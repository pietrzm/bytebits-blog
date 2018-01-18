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
```

> (Present them a basic, cool functionality they can implement with it.)

```javascript
// Some cool functionality
```

> (Explain them that's basically it, when it comes to template literals invoked without a tag.)
> (Tell, to keep reading on, if they're curious about tags.)

## Tagged template literals
> (Some kind of introduction to function tags of template literals.)
> (Show them how to use a template literal tag.)

```javascript
// Some sample of using tagged template strings
```

> (Show them how to implement such tag.)

```javascript
// Implementation of mentioned before tag
```

> (Explain each argument of a function.)

```javascript
// Compare both calls, as a tag and as a function and present them no difference on the output.
```

## Exercise
> (Present users with some simple exercise which may seem useful to some.)
> (Define the use case for the following examples.)

### Text
> (Start with reimplementing the default functionality of a template literal.)
> (Prove them that there's no smoke and mirrors involved in how template literals work, that it's nothing more than some sugar on top.)
> (Explain to readers, how this basic tag will be used as a base for every other tag that will be introduced shortly.)

```javascript
/**
 * @param {Array<string>} strings
 * @param {...*} values
 * @returns {string}
 */
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
```

### HTML
> (Explain what will be exactly our next tag, and why should we even bother.)
> (Introduce use case.)

```javascript
/**
 * @param {Array<string>} strings
 * @param {...*} values
 * @returns {HTMLElement}
 */
const html = (strings, ...values) => {
  const el = document.createElement("div")
  el.innerHTML = text(strings, ...values)

  return el
}
```

### CSS
> (Explain what will be exactly our next tag, and why should we even bother.)
> (Introduce use case.)

```javascript
/**
 * @param {Array<string>} strings
 * @param {...*} values
 * @returns {string}
 */
const css = (strings, ...values) => {
  const el = document.createElement("style")
  document.head.appendChild(el)

  const className = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    style = text(strings, ...values)

  el.textContent = `.${ className } { ${ style } }`

  return className;
}
```

### Together
{% raw %}
<script async src="//jsfiddle.net/thebytebits/k09edezs/embed/js,result/"></script>
{% endraw %}

































# END

Template literal - this new fellow is, hands down, one of the best features of `ES6`.

It power up's our arsenal with string interpolation and a support for so awaited multi-line strings.
It's doing so by introducing new quote-like syntax, in which may look pretty odd, but believe me, it's really awesome.

```javascript
const player = {
    name: "Fuggles",
    level: 2
}

const location = {
    name: "Punyfolk",
    level: 7
}


console.log( 
    `After a long journey, ${ player.name } has managed to reach ${ location.name } city. 
    This place seems to be ${ ( player.level > location.level ) ? "safe" : "dangerous" }.`
 )


/// console output
// After a long journey,Fuggles has managed to reach Punyfolk city.
// This place seems to be dangerous.
```



# Tagged template literals
Template literals are cool, but we could do so much, much more with them!
There's a thing called template literal tagging, this little nifty feature let's you to modify the otherwise plain string output on the fly.
Which means, we can have so much fun with this guy, possibilities are almost endless.

```javascript
console.log( frigginTag`the brown fox jumped over the lazy dog` )

/// console output
// whatever you want it to be
```


# Example

Have you ever played any of those awesome old school text-based games? Hope so, because we're having an example related to such.



```javascript
const city = { name: "Punyfolk", type: "CITY" }
const wilderness = { name: "Haunted forest", type: "WILDERNESS" }

console.log( 
    lector`EXPLORE ${ city } AT ${ 13.30 } WITH ${ [ "Sir. Whinealot" ] }`,
    lector`EXPLORE ${ wilderness } WITH ${ [] } AT ${ 23.54 }` 
)

/// console output
// You wander around the crowded Punyfolk city in the daylight with a friend of yours.
// You explore the wilderness of the Haunted forest all by yourself in the middle of the night.
```
If you ever played some good old school text based RPG, you know how awesome they can be. 
But only if they manage not to bore us with ever repeating dialogues and descriptions.

So let's say we want to generate texts 


How it works?
Well, tag is a simple function which has to takes two parameters which first is an array os string and the second the array of values as a spread.
```javascript
const lector = ( strings, ...values ) => {
    let sentence = "You "
    
    for ( const string of strings ) {
        const argument = values.shift()
        
        switch ( string ) {
            case "EXPLORE":
                const location = argument
                sentence += 
                    ( location.type === "CITY" ) ? `wander around the crowded ${ location.name } city` 
                    : ( location.type === "WILDERNESS" ) ? `explore the wilderness of the ${ location.name }`
                    : `explore the unknown of ${ location.name }`
                break
            
            case "AT":
                const time = argument
                sentence +=
                    ( time > 23.30 && time < 00.30 ) ? "in the middle of the night"
                    : ( time > 19.00 && time < 04.00 ) ? "in the dark" 
                    : "in the daylight"                
                break
                
            case "WITH":
                const team = argument
                sentence +=
                    ( team.length === 0 ) ? "all by yourself"
                    : ( team.length === 1 ) ? "with a friend of yours"
                    : ", together with your party"
                break
        }
    }
    
    return sentence + "."
}
```



// Whatever's the answer I'll break it down for you anyways, so hear me out!



## Example





Let's try reimplementing basic functionality of template literals with a custom tag.

```javascript
const text = ( strings, ...values ) => {
    const result = []

    for ( let i = 0; i < strings.length; i++ ) {
        result.push( strings[ i ] )
        if ( i <= values.length - 1 ) {
            result.push( values[ i ] )
        }
    }

    return result.join( "" )
}
```






How about making some more useful tags?

First basic tag we will create will take a html markup and spit us sweet dom node.
```javascript
const html = ( strings, ...values ) => {
    const el = document.createElement( "div" )
    el.innerHTML = text( strings, ...values )
    
    return el 
}
```

Next tag w are going to create will 
```javascript
const css = ( strings, ...values ) => {
    const el = document.createElement( "style" )
    document.head.appendChild( el )

    const className = Math.floor( Math.random() * Number.MAX_SAFE_INTEGER ),
        style = text( strings, ...values )

    el.textContent = `.${ className } { ${ style } }`

    return className;
}
```


Later on we can use it like this
```javascript
const style = {
    equipment: css`
        display: inline-block;
        width: 475px;
    `,

    item: css`
        display: inline-block;
        text-align: center;
        width: 150px;
        height: 30px;
    `
}

const rucksack = slot => html`
    <div class="${ style.equipment }">
        <!-- 1st row -->
        <div class="${ style.item }">${ slot[0][0] }</div>
        <div class="${ style.item }">${ slot[0][1] }</div>
        <div class="${ style.item }">${ slot[0][2] }</div>
        <!-- 2nd row -->
        <div class="${ style.item }">${ slot[1][0] }</div>
        <div class="${ style.item }">${ slot[1][1] }</div>
        <div class="${ style.item }">${ slot[1][2] }</div>
        <!-- 3th row -->
        <div class="${ style.item }">${ slot[2][0] }</div>
        <div class="${ style.item }">${ slot[2][1] }</div>
        <div class="${ style.item }">${ slot[2][2] }</div>
    </div>
`



const items = [
    [ "Rusty sword",    "Oak shield",       "Steel dagger"  ],
    [ "Iron mace",      "Leather boots",    "Studded armor" ],
    [ "Studded helm",   "Bronze medallion", "Gold crown"    ]
]

const element = rucksack( items )
document.body.appendChild( element )   
```