let mongoose = require('mongoose');

// Check error in initial connection. There is no 2nd param to the callback using promises.
mongoose.connect('mongodb://10.14.164.22:32768/quickstart', (err) => {

    if (err) throw err;

    console.log('/** ready to use. The `mongoose.connect()`*/');

});

module.exports = mongoose