function split(arg, separator){
    var tempstr = ""
    var result = []
    if (separator == "") {
        for (let i = 0; i < arg.length;i++){
            result.push(arg[i])
        }
        return result  
    }
    if (arg == ""){
        result.push(arg)
        return result
    }
    for (let i = 0; i < arg.length;i++) {
        if (arg.slice(i, i+separator.length) != separator) {
            tempstr += arg[i]
        }
        if (arg.slice(i, i+separator.length) == separator || i == arg.length-1){
            result.push(tempstr)
            tempstr = ""
            if (i < arg.length-separator.length && i+separator.length != arg.length) {
                i += separator.length-1
            }
            if (i+separator.length == arg.length && arg.slice(i, i+separator.length) == separator) {
                result.push(tempstr)
                break
            }
        }
    }
    return result
}

function join(arg, separator){
    var result = ""
    for (let i = 0; i < arg.length; i++){
        if (i < arg.length-1){
        result += arg[i] + separator
        }
        if (i == arg.length-1) {
            result += arg[i]
        }
    }
    return result
}
