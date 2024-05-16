const is = {}

is.num = n => {
    return typeof(n) == 'number'
}

is.nan = n => {
    return typeof(n) == 'number' && isNaN(n)
}

is.str = n => {
    return typeof(n) == 'string'
}

is.bool = n => {
    return typeof(n) == 'boolean'
}

is.undef = n => {
    return typeof(n) == 'undefined'
}

is.def = n => {
    return typeof(n) != 'undefined'
}

is.arr = n => {
    return typeof(n) == 'object' && Array.isArray(n)
}

is.obj = n => {
    return typeof(n) == 'object' && !Array.isArray(n) && n != null
}

is.fun = n => {
    return typeof(n) == 'function'
}

is.truthy = n => {
    return Boolean(n)
}

is.falsy = n => {
    return !Boolean(n)
}

