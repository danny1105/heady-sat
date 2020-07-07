'use strict'

module.exports = {
    get: ( app ) => {
        app.get('/', (req, res) => {
            res.send("Hello, World");
        });
    },
};