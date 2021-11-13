const { say } = require('../data/db.js');

module.exports = {
    say() {
        return say[0];
    }
}