---
title:  "Map, filter and reduce"
tags: ["JavaScript", "Vanilla", "Functional programming", "Map", "Filter", "Reduce"]
categories: ["JavaScript", "Functional programming"]
icon: devicon-javascript-plain
---

# What's all the fuss about?

Have you ever wished your code was more concise, functions pure and your application being more elegant without need of any [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)?    

Wish no more!  
Together, we will level up your functional ninjutsu's skills, because its always worth having few more tricks up in your sleeve.  
    
In this article we are going to talk about three basic functional tools available natively in any ES5 supporting browser and Node.js as well.  


# Array.prototype.map
This function plays a really big part in a functional paradigm and is perhaps one of the most useful and often used array method in day to day use.
That means, you'll get familiar with it rather pretty quickly.

```javascript
const new_array = old_array.map( item => /* Return an element for a new_array */ )
```

It applies given function to each item in an array and returns a new array of results.  
For an instance an array of values `[ 1, 2, 3 ]` mapped by a function `f = n => n * 2` will take a form of `[ f(1), f(2), f(3) ]` resulting in array of values `[ 1, 4, 9 ]`.


## Example
So how about an example?  

Let's say we have a collection of in-game items, each having its own set of unique parameters and we want to display a name of every item in a chest we looted.  
Additionally, we would like to make all of those lowercase so it will blend in with the rest of the sentence nicely.

### With the map
```javascript
const carcass = [
    { name: "Gold coins", quantity: 12 },
    { name: "Rusty sword", damage: 2, durability: 0.2 },
    { name: "Bark shield", defense: 17, durability: 0.42 },
    { name: "Mail helmet", defense: 4, durability: 0.88 }
]


const loot = carcass.map( n => n.name.toLowerCase() )

console.log( "dev: loot variable", loot );
console.log( `Sir. Whinealot have looted ${ loot.join( ", " ) } from a dead rat.` )



// dev: loot variable
// [
//     "gold coins",
//     "rusty sword",
//     "bark shield", 
//     "mail helmet" 
// ]

// Sir. Whinealot have looted gold coins, rusty sword, bark shield, mail helmet from a dead rat.
```

### Without the map
```javascript
const carcass = [
    { name: "Gold coins", quantity: 12 },
    { name: "Rusty sword", damage: 2, durability: 0.2 },
    { name: "Bark shield", defense: 17, durability: 0.42 },
    { name: "Mail helmet", defense: 4, durability: 0.88 }
]


const loot = [];
for ( const item of carcass ) {
    loot.push( item )
}

console.log( "dev: loot variable", loot )
console.log( `Sir. Whinealot have looted ${ loot.join( ", " ) } from a dead rat.` )



// dev: loot variable
// [
//     "gold coins",
//     "rusty sword",
//     "bark shield", 
//     "mail helmet" 
// ]

// Sir. Whinealot have looted gold coins, rusty sword, bark shield, mail helmet from a dead rat.
```
  

# Array.prototype.filter
When working with collections oftentimes you will need to find one or more elements of your interest.
That's when the `filter` function comes in handy.

```javascript
const new_array = old_array.filter( item => /* Return true to keep the element, false otherwise */ )
```

Basically, it filters out items from an array, that do not return truthy value from passed in function.


## Example
Example time!  

We are going to tackle an item equipping problem.  

Sir. Whinealot needs to be armed before going out for an adventure, but not all of the items are available for him, unfortunately.  

![Sir. Whinealot](/images/pixelart/sir-whinealot--unequipped.gif "test")

To determine what can be equipped by our brave knight, we will need tp compare his level with the level of every item in the rucksack.


### With the filter
```javascript
const player = { name: "Sir. Whinealot", level: 7 }
const rucksack = [
    { name: "Steel dagger", level: 11 },
    { name: "Iron mace", level: 7 },
    { name: "Leather boots", level: 4 },
    { name: "Mail socks", level: 2 },
    { name: "Studded armor", level: 9 }
]


const wearables = rucksack.filter( n => n.level <= player.level )

console.log( "dev: wearables variable", wearables )
console.log( `${ player.name } can equip ${ wearables.join( ", " ).toLowerCase() }` )



// dev: wearables variable
// [
//     { name: "Iron mace", level: 7 },
//     { name: "Leather boots", level: 4 },
//     { name: "Mail socks", level: 2 }
// ]

// Sir. Whinealot can equip iron mace, leather boots, mail socks.
```

### Without the filter
```javascript
const player = { name: "Sir. Whinealot", level: 7 };
const rucksack = [
    { name: "Steel dagger", level: 11 },
    { name: "Iron mace", level: 7 },
    { name: "Leather boots", level: 4 },
    { name: "Mail socks", level: 2 },
    { name: "Studded armor", level: 9 }
];


const wearables = []
for ( const item of rucksack ) {
    if ( item.level <= player.level ) {
        wearables.push( item )
    }
}

console.log( "dev: wearables variable", wearables )
console.log( `${ player.name } can equip ${ wearables.join( ", " ).toLowerCase() }` )



// dev: wearables variable
// [
//     { name: "Iron mace", level: 7 },
//     { name: "Leather boots", level: 4 },
//     { name: "Mail socks", level: 2 }
// ]

// Sir. Whinealot can equip iron mace, leather boots, mail socks.
```



# Array.prototype.reduce
And now it's time to present you the last of the three, the `reduce` function.

```javascript
const new_array = old_array.reduce( ( accumulator, item ) => /* value of accumulator on next iteration */ )
```

It applies a rolling computation to sequential pairs of values in an array and returning the result.

What it means is that it loops through an array while calling on each element a passed in `callback` function.
This callback function holds an `accumulator` and `item` as its parameters and have to return a value.  
Then, the returned value will be available on the next iteration as an accumulator argument.

At last, when it iterates through every item in the list, the `reduce` function will return a result from the last call of a `callback` function. 


## Examples
This time our mighty Sir. Whinealot is about to sell his hard-earned loot to the local innkeeper.  
We have to know the worth of knight's equipment and we will achieve that by calculating the sum of value of every item in the rucksack. 

![Sir. Whinealot](/images/pixelart/sir-whinealot--buisness-at-inn.gif "test")

### With the reduce
```javascript
const rucksack = [
    { name: "Steel dagger", value: 11 },
    { name: "Iron mace", value: 7 },
    { name: "Leather boots", value: 4 },
    { name: "Studded armor", value: 9 }
]


const offer = rucksack.reduce( ( accumulator, value ) => accumulator + value, 0 )

console.log( "dev: offer variable", offer )
console.log( `The innkeeper can give you ${ offer } gold coins for your equipment.` )



// dev: offer variable
// 31

// The innkeeper can give you 31 gold coins for your equipment.
```


### Without the reduce
```javascript
const rucksack = [
    { name: "Steel dagger", value: 11 },
    { name: "Iron mace", value: 7 },
    { name: "Leather boots", value: 4 },
    { name: "Studded armor", value: 9 }
]


let offer = 0;
for ( const item of rucksack ) {
    offer = offer + item.value
}

console.log( "dev: offer variable", offer )
console.log( `The innkeeper can give you ${ offer } gold coins for your equipment.` )



// dev: offer variable
// 31

// The innkeeper can give you 31 gold coins for your equipment.
```





# Map, filter and reduce combined
Today we learned a basic set of tools that we can use for writing our JavaScript code in a more functional manner, how awesome is that?! 
But before going out replacing all of the loops in your current project with our just met trio, we need to see the whole picture.  

It's time to put our metal to test!

## Example
Sir. Whinealot is not a type of knight who's fooling around. He just embarked on a demon-slaying adventure.   
From a list of creatures pestering a near village, we need to find a demon and slay him, yielding us some sweet experience points.  

![Sir. Whinealot](/images/pixelart/sir-whinealot--orc-encounter.gif "test")

We need to extract from a list a demon type creature and then execute him by calling `slay` on him.  
When the purge is over, we will need to sum up our hard-earned experience points.

```javascript
const isDemon = creature => creature.type === "Demon"
const slay = creature => creature.experience * creature.level
const add = ( left, right ) => left + right

const creatures = [
    { name: "Rat", type: "Animal", experience: 5, level: 1 },
    { name: "Bandit", type: "Human", experience: 50, level: 5 },
    { name: "Wolf", type: "Animal", experience: 25, level: 3 },
    { name: "Utopiec", type: "Demon", experience: 250, level: 7 },
    { name: "Guard", type: "Human", experience: 75, level: 7 },
    { name: "Bear", type: "Animal", experience: 150, level: 5 },
    { name: "Likho", type: "Demon", experience: 375, level: 10 },
    { name: "Wolf", type: "Animal", experience: 25, level: 4 }
]


const experience =
    creatures
        .filter( isDemon )
        .map( slay )
        .reduce( add )

console.log( "dev: experience variable", experience )
console.log( `You've just gained ${ experience } experience points!` )


// dev: experience variable
// 5500

// You've just gained 5500 experience points!
```

# Last few words
I really hope you made to the end and enjoyed this read.

If you have any questions or thoughts you want to share, then please leave your comment below!  
I'll be more than happy to answer all of your questions!