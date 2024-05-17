function reverse(input) {
    if (Array.isArray(input)) {
        let left = 0;
        let right = input.length - 1;
        while (left < right) {
            let temp = input[left];
            input[left] = input[right];
            input[right] = temp;
            left++;
            right--;
        }
        return input;
    } else if (typeof input === 'string') {
        let result = '';
        for (let i = input.length - 1; i >= 0; i--) {
            result += input[i];
        }
        return result;
    } else {
        return null;
    }
}
