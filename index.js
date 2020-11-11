exercise1

function deleteByIndex(arr, index) {
    if (index > -1) {
        arr.splice(index, 1);
    return arr
    }
} 
let af=[1,2,3,4,6,8,4,6]
console.log(deleteByIndex(af, 1))




exercise2

let cars = [3,-1];
let trucks = [4,8,12,6];
let train = [100,150,300,800]


function  combine(){
    let result = [];
    for (i = 0; i<arguments.length; i++){
        result = result.concat(arguments[i])
    }
    return result.sort((a, b) => a - b)
}

console.log(combine(cars,trucks,train))




exercise3

function flatten(input) {
    const stack = [...input];
    const res = [];
    while (stack.length) {
        
        const next = stack.pop();
        if (Array.isArray(next)) {
           
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    
    return res.reverse();
}

let ar = [[2, 3], 5, [[[2, 9], 4], 4], 1, 0]
console.log(flatten(ar))

exercise4

function findByItem(arr,Item){
    return {index: arr.indexOf(Item), item: Item}
}  
let train = [100,150,300,800]
console.log(findByItem(train , 800))


exercise5

function replaceByItem(array, currentItem, newItem){
   let b = array.indexOf(currentItem)
   array.splice(b,1); 
   array.splice(b,0,newItem);
   return array
}

var arr = ['a', 'b', 'c', 'd', 'e', 'f']

console.log(replaceByItem(arr,'e','t'))


exercise6

function extract_numbers(str) {
    let arr = str.split(" ");
    let nums = arr.filter(function (elem) {
        return !isNaN(elem);
    });
    let final = nums.map(function (val) {
        return parseFloat(val);
    });
    return final
}
 let sent = "I have 2 apples and 3 pineapples"
 console.log(extract_numbers(sent))

