function pronoun(count, delay, callback) {
    let attempts = 0;

    return async function (...args) {
        while (true) {
            try {
                const result = await Promise.race([
                    callback(...args),
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            reject(new Error('timeout'));
                        }, delay);
                    })
                ]);
                
                return result;
            } catch (error) {
                attempts++;
                if (attempts >= count) {
                    throw error;
                }
            }
        }
    }
}
