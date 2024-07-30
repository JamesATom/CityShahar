// performance.db.test.js apollo router
var http = require('k6/http');
var check = require('k6').check;

module.exports.options = {
    stages: [
        { duration: '1m', target: 20 }, 
        { duration: '2m', target: 40 }, 
        { duration: '1m', target: 0 }, 
    ],
};

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports.default = function() {
    var url = 'https://seashell-app-hkrfl.ondigitalocean.app/';
    var queries = [
        {   
            query: `
                query GetAllListings($data: GetAllListingInput!, $lang: String!) {
                    getAllListings(data: $data, lang: $lang) {
                        listings {
                            id,
                            price,
                            address {
                                area,
                                house,
                                fullAddress
                            },
                            image,
                            isCommissioned
                        },
                        hasMore
                    }
                }
            `,
            variables: {
                data: {
                    page: 1,
                    type: "rent",
                    regionId: 14,
                    districtId: 159,
                    filters: {
                        buildingType: "",
                        floor: 0, 
                        rooms: 0,
                        buildingAreaFrom: 0,
                        buildingAreaTo: 0,
                        buildingPriceFrom: 0,
                        buildingPriceTo: 0,
                        buildingYearFrom: 0,
                        buildingYearTo: 0,
                        safety: 0,
                        parking: 0,
                        garbage: 0,
                        serviceLift: 0,
                        passengerLift: 0,
                        balcony: 0,
                        playground: 0,
                        wifi: 0
                    },
                    sort: {
                        recommended: 1,
                        priceHighToLow: 0,
                        priceLowToHigh: 0
                    }
                },
                lang: ""
            }
        },
        {
            query: `
                query InvalidQuery {
                    invalidField
                }
            `,
            variables: {}
        }
    ];
    var payload = JSON.stringify(queries[randomIntFromInterval(0, queries.length - 1)]);
    var params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    let res = http.post(url, payload, params);
    if (queries[randomIntFromInterval(0, queries.length - 1)].query.includes("invalidField")) {
        check(res, {
            'status was 400': (r) => r.status == 400,
        });
    } else {
        check(res, {
            'status was 200': (r) => r.status == 200,
            'transaction time OK': (r) => r.timings.duration < 200
        });
    }
}