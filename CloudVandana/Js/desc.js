function getUserInputArray(){
    const input = prompt("Enter comma separated numbers:");
    const inputArray = input.split(',').map(Number);
    return inputArray;
}

function sortDescending(array){
    return array.slice().sort((a,b) => b-a);
}
const userArray = getUserInputArray();
const descendingSortedArray = sortDescending(userArray);

console.log("Org Array: " + userArray);
console.log("Descending Order: " + descendingSortedArray);