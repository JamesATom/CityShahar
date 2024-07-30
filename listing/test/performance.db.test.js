// performance.db.test.js
var http = require('k6/http');
var check = require('k6').check;

module.exports.options = {
    vus: 10,  // number of virtual users
    duration: '30s',  // test duration
};

module.exports.default = function() {
    var url = 'https://db59-82-215-97-35-35.ngrok-free.app/graphql';
    var payload = JSON.stringify({
        query: `
            query FindAllListings($data: FindAllListingInput!, $lang: String!) {
                findAllListings(data: $data, lang: $lang) {
                    listings {
                        id,
                        price,
                        address {
                            area,
                            house,
                            fullAddress
                        },
                        image
                    },
                    hasMore
                }
            }
        `,
        variables: {
            data: {
                page: 1,
                type: "rent"
            },
            lang: ""
        }
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