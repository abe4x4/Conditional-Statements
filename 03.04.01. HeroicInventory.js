//                                Exercises: Objects
// 1. Heroic Inventory
/*
Create a function that register heroes from an array of strings. Each string in the array has a format and it contains the hero name, level and may or may not contain items. You must extract the data and store it in an array. 
Print the result as JSON.
Input
The input comes as array of strings. Each element holds data for a hero, in the following format:
“{heroName} / {heroLevel} / {item1}, {item2}, {item3}...”
You must store the data of each hero. The name is a string, the level is a number and the items are all strings.
Output
The output is a JSON representation of the data for all the heroes you’ve stored. The data must be an array of all
the heroes. Check the examples for more info.
*/
function main(input) {
    let heroData = [];
    for (let i = 0; i < input.length; i++) {
        let currHeroArguments = input[i].split(' / ');
        let currHeroName = currHeroArguments[0];
        let currHeroLevel = +currHeroArguments[1];
        if (currHeroArguments.length > 2) {
            currHeroItems = currHeroArguments[2].split(', ');
        }
        let hero = {
            name: currHeroName,
            level: currHeroLevel,
            its: currHeroItems,
        };
        heroData.push(hero);
    }
    console.log(JSON.stringify(heroData));
}
main(["Isacc / 25 / Apple, GravityGun", "Derek / 12 / BarrelVest, DestructionSword", "Hes / 1 / Desolator, Sentinel, Antara"]);
// [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},
// {"name":"Derek","level":12,"items":["BarrelVest","Destructi
// onSword"]},{"name":"Hes","level":1,"items":["Desolator","S
// entinel","Antara"]}] 



// Input 
// ['Jake / 1000 / Gauss, HolidayGrenade'] 

// Output 
// [{"name":"Jake","level":1000,"items":["Gauss","HolidayGre
// nade"]}] 

// Hints
/*
We need an array that will hold our hero data. That is the first thing we create.
Next, we need to loop over the whole input, and process it. Let’s do that using a simple for loop.
Every element from the input holds data about a hero.  However, the elements from the data we need are
separated by some delimiter, so we just split each string with that delimiter. 
Next, we need to take the elements from the string array, which is a result of the string split, and parse
them.
However, if you do this, you could get an error. If you go up and read the problem definition again, there
might be a case where a hero has no items. In that case, if we try to take the 3
rd element of the
currentHeroArguments array, it will result in an error. That is why we should perform a simple check.
If there are any items in the input, we should split them. If there’s not, it will just remain an empty array.
After we extracted the data needed, we can now store them in an object and add it to the array.
Finally, we need to turn the array of objects we have made into a JSON string, which can be done by using
JSON.stringify() function. 
*/