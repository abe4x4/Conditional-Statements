/*
5. Inventory
Create a function which creates a register for heroes, with their names, level, and items (if they have such).
The input comes as array of strings. Each element holds data for a hero, in the following format:
“{heroName} / {heroLevel} / {item1}, {item2}, {item3}...”
You must store the data about every hero. The name is a string, the level is a number and the items are all strings.
The output is all of the data for all the heroes you’ve stored sorted ascending by level and the items are sorted
alphabetically. The data must be in the following format for each hero:
Hero: {heroName}
level => {heroLevel}
Items => {item1}, {item2}, {item3}
*/
function main(heroArr){
    let sortedArr = [];
    for(let hero of heroArr){
        let heroMap = new Map();
        hero = hero.split(' / ');
        heroMap.set('Hero',hero[0]);
        heroMap.set('level',hero[1]);
        hero[2] = hero[2].split(', ').sort().join(', ');
        heroMap.set('item',hero[2]);
        sortedArr.push(heroMap);
    }
    sortedArr = sortedArr.sort((a,b) => a.get('level') - b.get('level'));
    for(hero of sortedArr){
        for(info of hero){
            if (info[0] == "Hero")
            console.log(`${info[0]}: ${info[1]}`);
            else 
            console.log(`${info[0]} => ${info[1]}`)
        }
    }
}
main(["Isacc / 25 / Apple, GravityGun","Derek / 12 / BarrelVest, DestructionSword","Hes / 1 / Desolator, Sentinel, Antara"]);
