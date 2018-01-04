---
layout: article
title:  "Tagged template literals"
date:   2017-11-08 11:21:14 +0100
author: John Jones
summary: |
    Have you ever wished your code was more concise, functions pure and your application being more elegant without need of any class?
    Wish no more!
---


# Introduction
Some kind of introduction to the article and template strings in general.

# Template literals, behind the scene
Explain how template literal is broken down to a function call
## Under the hood, naive implementation
Implement a tag that does exactly what template literals do by default. Call the function both, explicitly and implicitly.

# Writing an example UI library
Write about some practical usages of template literals and show in examples how to write one's own.
## Old way
Show an example how it's done without any helpful utilities. It should be ugly.
## Create DOM element's by simply using HTML markup. 
Create an html tag that does return DOM node with all of it's children nodes. It should work better than native innerHTML.
## Create component scoped styles with ease while still using flexible CSS markup.
Create an css tag that creates scoped styles for components created with the tag introduced earlier.
## Example
X

# Conclusion





#Introduction
Template literals - you love them, we love them, anyone who knows what's life about loves them.  

# Tagged template literals
Ever heard of this little nifty feature of tagging your template literals?
Whatever's the answer I'll break it down for you anyways, so hear me out!

## Naive
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