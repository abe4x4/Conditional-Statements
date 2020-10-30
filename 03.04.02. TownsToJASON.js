/* 1. Towns to JSON
You're tasked to create and print a JSON from a text table. You will receive input as an array of strings, where each string represents a table row, with values on the row encompassed by pipes "|" and optionally spaces. The table will consist of exactly 3 columns: "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. 
Check the examples to get a better understanding of your task.
Input
The input comes as an array of strings – the first string contains the table's headings while the remaining strings contains the data of the table.
Output
 The output should be an array of objects wrapped in JSON.stringify().
 Latitude and longitude must be parsed to numbers and formatted to the second decimal point. */
function main(input){
    arrayToJSON(input);
}
function arrayToJSON(arr) {
//['| Town | Latitude | Longitude |','| Melbourne |-37.840935 | 144.946457|','| Beijing | 39.913818 | 116.363625 |']
    let townsArr = [];
    for (let town of arr.slice(1)){
        // | Melbourne |-37.840935 | 144.946457|,  | Beijing | 39.913818 | 116.363625 |
    let [x,townName,lat,lng] = town.split(/\s*\|\s*/);
        //["", "Melbourne", "-37.840935", "144.946457", ""]
        let townObj = {
            Town: townName,
            Latitude: (+lat).toFixed(2),
            Longitude: (+lng).toFixed(2)
        };
        townsArr.push(townObj);//adds elements to the array
    }
    console.log(JSON.stringify(townsArr));
}
main(['| Town | Latitude | Longitude |','| Melbourne |-37.840935 | 144.946457|','| Beijing | 39.913818 | 116.363625 |']);
//[{"Town":"Melbourne","Latitude":-37.84,"Longitude":144.95},{"Town":"Beijing","Latitude":39.91,"Longitude":116.36}]
 main(['| Town | Latitude | Longitude |','| Sydney | -33.865143 | 151.209900 |','| Perth | -31.953512 | 115.857048 |']);
// //[{"Town":"Sydney","Latitude":-33.87,"Longitude":151.21},{"Town":"Perth","Latitude":-31.95,"Longitude":115.86}]
 main(['| Town | Latitude | Longitude |','| Manila | 14.5895 | 120.9842 |','| Stockholm | 59.3293 | 18.0686 |','| Tokyo | 35.6762 | 139.6503 |','| Nairobi | 1.2921 | 36.8219 |','| Lisbon | 38.7223 | 9.1393 |']);
// //[{"Town":"Manila","Latitude":14.59,"Longitude":120.98},{"Town":"Stockholm","Latitude":59.33,"Longitude":18.07},{"Town":"Tokyo","Latitude":35.68,"Longitude":139.65},{"Town":"Nairobi","Latitude":1.29,"Longitude":36.82},{"Town":"Lisbon","Latitude":38.72,"Longitude":9.14}]
 main(['| Town | Latitude | Longitude |', '| Rio | 22.91 | 43.1729 |']);
// //[{"Town":"Rio","Latitude":22.91,"Longitude":43.17}]
