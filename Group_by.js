function groupBY(array, key) {
    const result = {}


    for (let i = 0; i < array.length; i++) {
        element = array[i]
        keyValue = element[key]
        if (keyValue !== undefined) {
            if (!result[keyValue]) {
                // If the key doesn't exist in the result object initialize it as an array
                result[keyValue] = [element];
            } else {
                // If the key already exists push the current element into the existing array
                result[keyValue].push(element);
            }
        } else {
            console.log("Key '" + key + "' does not exist in the object.");
            break;
        }

    }
    
    return result
}


const array = [
    {id: 1, name: "Bilal", city: "Lahore"},
    {id: 1, name: "ali", city: "Lahore"},
    {id: 3, name: "Hafsa", city: "Karachi"},
    {id: 4, name: "Rehan", city: "Lahore"},
    {id: 5, name: "Saqib", city: "Karachi"},
    {id: 6, name: "Farhan", city: "Islamabad"}
]
let result = groupBY(array, "city")
console.log(result)

// //Output

// //Group by City

// {
//     "Karachi" : [{id:3,name:"Hafsa", city:"Karachi"},{id:5,name:"Saqib", city:"Karachi"}],
//     "Lahore" : [
// {id:1,name:"Bilal", city:"Lahore"},
// {id:1,name:"Bilal",city:"Lahore"},{id:4,name:"Rehan", city:"Lahore"}]
//     "Islamabad" : [{id:6,name:"Farhan", city:"Islamabad"}]
// }