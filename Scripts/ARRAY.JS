// ARRAY 
//CHECK FOR ARRAY LENGTH ==> ARRAY.LENGTH
// push () , 
// pop (), 
// unshift () ==> it will add the element at the begining of the array
//  shift ()==> it returns the deleted element
// splice () ==> it returns the deleted elements
// slice (start, end) ==> it returns a new array 
//  join () ==> it returns a string  
// reverse () ==> ir returns a reversed array 
// sort ()==> it returns a sorted array
//Array functions
//.find() ==> it returns the first element that satisfies the condition
//.forEach()==> it executes a function for each element of an array
//.filter() ==> it returns an array with all the elements that satisfy the condition
//.map()==> it returns a new array with the results of calling a function for each element in the array
//.reduce()==> it reduces the array to a single value
let array =[34,45,65,2,1,10]
console.log(array.sort())

// insertion sort 
function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let currentVal = arr[i];
        for(var j=i-1; j>=0 && arr[j]>currentVal; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}
console.log(insertionSort([34,45,65,2,1,8]));

//  spreading 
const sum =(...args)=>{
    return args.reduce((prev,next)=>prev+next,0);
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));
