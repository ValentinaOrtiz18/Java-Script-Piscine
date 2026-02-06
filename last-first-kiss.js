
// Return first element 
function first(arr){

    return arr[0];
}

// Return last elememt 
function last(str){
    return str[str.length -1];
}

// Returns an array of 2 elements: last element and first, in that order.
function kiss(arr){
    return [arr[arr.length -1], arr[0]];


}

/* Testing it works 

test = [1,3,'6',8,'0']
console.log(kiss(test))
*/
