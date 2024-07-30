// performance.test.js
var http = require('k6/http');
var check = require('k6').check;

module.exports.options = {
    vus: 10,  // number of virtual users
    duration: '30s',  // test duration
};

// https://goldfish-app-fx4zo.ondigitalocean.app/graphql real endpoint
// https://db59-82-215-97-35-35.ngrok-free.app/graphql test endpoint
module.exports.default = function() {
    var url = 'https://goldfish-app-fx4zo.ondigitalocean.app/graphql';
    var payload = JSON.stringify({
        query: `{
            sayHello
        }`,
    });
    var params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    let res = http.post(url, payload, params);
    check(res, {
        'status was 200': (r) => r.status == 200,
        'transaction time OK': (r) => r.timings.duration < 200
    });
}