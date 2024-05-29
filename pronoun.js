function pronoun(count, delay, callback) {
    let attempts = 0;

    function tryCallback(...args) {
        return new Promise((resolve, reject) => {
            const attempt = () => {
                callback(...args)
                    .then(resolve)
                    .catch(err => {
                        attempts++;
                        if (attempts >= count) {
                            reject(err);
                        } else {
                            attempt();
                        }
                    });
            };

            const timer = setTimeout(() => {
                clearTimeout(timer);
                reject(new Error('timeout'));
            }, delay);

            attempt();
        });
    }

    return tryCallback;
}
