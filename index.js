// Add your functions here
function map(array, callback){
    let result = []
    for(let i = 0; i < array.length; i++){
        result.push(callback(array[i]))
    }
    return result
}

function reduce(array, callback, start){
    let result = array[0]
    let i = 1
    if (!!start){
        result = start;
        i--;
    }
    for(; i < array.length; i++){
        result = callback(array[i], result);
    }
    return result
}