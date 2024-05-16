// pris a Doreen a revoir


function slice(arr, start, end) {
    if (end === undefined) {
        end = arr.length;
    }
    let res;

    if (start < 0) {
        start = arr.length + start;
    }

    if (end < 0) {
        end = arr.length + end;
    }

    if (typeof arr === "string") {
        res = "";
        for (let i = start; i < end; i++) {
            res += arr[i];
        }
    }

    if (Array.isArray(arr)) {
        res = []; 
        for (let i = start; i < end; i++) {
            res.push(arr[i]);
        }
    }
    return res;
}



//function slice(input, startIndex, endIndex) {
//    if (typeof input === 'string') {
//        if (startIndex < 0) {
//            startIndex = startIndex + input.length;
//        }
//        if (endIndex !== undefined && endIndex < 0) {
//            endIndex = endIndex + input.length;
//        }
//        return input.substring(startIndex, endIndex);
//    } else if (Array.isArray(input)) {
//        if (startIndex < 0) {
//            startIndex = input.length + startIndex;
//            if (startIndex < 0) {
//                startIndex = 0;
//            }
//        }
//        if (endIndex !== undefined && endIndex < 0) {
//            endIndex = input.length + endIndex;
//            if (endIndex < 0) {
//                endIndex = 0;
//            }
//        }
//        return input.slice(startIndex, endIndex);
//    } else {
//        return undefined;
//    }
//}
