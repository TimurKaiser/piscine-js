function fold(array, fn, accumulator) {
    for (let i = 0; i < array.length; i++) {
        accumulator = fn(accumulator, array[i]);
    }
    return accumulator;
}

function foldRight(array, fn, accumulator) {
    for (let i = array.length - 1; i >= 0; i--) {
        accumulator = fn(accumulator, array[i]);
    }
    return accumulator;
}
function reduce(arr, func, accumulator) {
    let res = 0;
    if (typeof accumulator == undefined) {
        accumulator = arr[0];
        res = 1;
    }
    for (var i = res; i < arr.length; i++) {
        accumulator = func(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

function reduceRight(arr, func, accumulator){
    if(typeof arr[0] === 'number'){
        accumulator = 0
    }else {
        accumulator = ''
    }
    for(let i = arr.length-1;i>=0;i--){
        console.log(arr[i])
        accumulator = (func(accumulator,arr[i]))
    }
    return accumulator
}