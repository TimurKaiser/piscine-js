// doc pour le faire https://grafikart.fr/tutoriels/debounce-throttle-642
function debounce(callback, delay) {
    var timer;
    return function() {
        var args = arguments;
        var context = this;
        clearTimeOut(timer);
        timer = setTimeout(function() {
            callback.apply(context, args);
        }, delay)
    }
}


