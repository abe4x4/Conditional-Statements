function main(input) {
    let saveJuices = new Map();
    let lessThan1000 = new Map();
    // let result = new Map;
    for (let juice of input) { //['Kiwi => 234', 'Pear => 2345', 'Watermelon => 3456', 'Kiwi => 4567', 'Pear => 5678', 'Watermelon => 6789']
        let splitString = juice.split(/\s*[=>]\s*/g);
        let juiceName = splitString[0];
        let quantity = Number(splitString[2]);
        if (lessThan1000.has(juiceName)) {
            let getValue = lessThan1000.get(juiceName);
            lessThan1000.set(juiceName, quantity + getValue);
            if (lessThan1000.get(juiceName) >= 1000) {
                let bottles = Math.floor(lessThan1000.get(juiceName) / 1000);
                let excessJuice = lessThan1000.get(juiceName) - bottles * 1000;
                if (saveJuices.has(juiceName)) {
                    saveJuices.set(juiceName, saveJuices.get(juiceName) + bottles);
                    lessThan1000.set(juiceName, excessJuice);
                } else {
                    saveJuices.set(juiceName, bottles);
                    lessThan1000.set(juiceName, excessJuice);
                }
            }
        } else {
            lessThan1000.set(juiceName, quantity);
            if (lessThan1000.get(juiceName) >= 1000) {
                let bottles = Math.floor(lessThan1000.get(juiceName) / 1000);
                let excessJuice = lessThan1000.get(juiceName) - bottles * 1000;
                saveJuices.set(juiceName, bottles);
                lessThan1000.set(juiceName, excessJuice);
            }
        }
    }
    for (let el of saveJuices) {
        console.log(`${el[0]} => ${el[1]}`);
    }
}

main(["Orange => 2000", "Peach => 1432", "Banana => 450", "Peach => 600", "Strawberry => 549"]);