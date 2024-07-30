// performance.test.js of apollo router
var http = require('k6/http');
var check = require('k6').check;

module.exports.options = {
    vus: 100,  
    duration: '30s',  
};

module.exports.default = function() {
    var url = 'https://seashell-app-hkrfl.ondigitalocean.app/';
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