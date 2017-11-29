var moment = require('moment');
var now = moment();

// current time
// console.log(now.format())
// format using unix timestamp (timezone independent)
// console.log(now.format('X'));
// console.log(now.format('x'));
// console.log(now.valueOf());   // returns the JS timestamp (milliseconds)

var timestamp = 1511960931329;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mm a'));

// formatting time
// ref: https://momentjs.com/docs/#/displaying/
// console.log(now.format('MMM Do YYYY, h:mma'))