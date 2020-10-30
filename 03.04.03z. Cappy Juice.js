opic 2 Adv Arrays: exercise 4: problem 3: caapy juice:
function main(arr) {       //  3.  Cappy Juice
//arr of strings, juice + quantity
//count number of bottles each juice can produce
//combine quantities if same juice      //1000 juice = 1 bottle     //excess is saved for later
    let object = {};
    let bottles = {};
    arr.forEach(function(item) {
        let split = item.split(' => ');
        let [juice, quantity] = [split[0], Number(split[1])];
        object[juice] = (object[juice] === undefined) ? quantity : object[juice] + quantity;
        while (object[juice] >= 1000) {
            object[juice] -= 1000;
            bottles[juice] = (bottles[juice] === undefined) ? 1 : bottles[juice] += 1;
        }
    });
    let outputArr = Object.entries(bottles).forEach(function(entries) {
        console.log(`${entries[0]} => ${entries[1]}`);
    });
    //console.log(bottles);
}