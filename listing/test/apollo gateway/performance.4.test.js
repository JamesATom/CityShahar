// performance.db.test.js apollo gateway
import http from 'k6/http';
import { check, group } from 'k6';
import { sleep } from 'k6';

export const options = {
    vus: 50,  // number of virtual users
    duration: '1m',  // test duration
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95% of requests must complete below 500ms
    },
};

const url = 'https://starfish-app-8guhe.ondigitalocean.app/graphql';
const headers = {
    'Content-Type': 'application/json',
};

// Test cases with varying payloads
const testCases = [
    { page: 1, type: "rent", lang: "en" },
    { page: 2, type: "sale", lang: "en" },
    { page: 1, type: "rent", lang: "uz" },
    { page: 3, type: "sale", lang: "ru" },
];

export default function () {
    for (const testCase of testCases) {
        const payload = JSON.stringify({
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
                    districtId: 160,
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
        });

        group(`Testing with page=${testCase.page}, type=${testCase.type}, lang=${testCase.lang}`, function () {
            const res = http.post(url, payload, { headers });
            check(res, {
                'status was 200': (r) => r.status === 200,
                'transaction time OK': (r) => r.timings.duration < 200,
                'response contains listings': (r) => r.json().data.getAllListings.listings.length > 0,
                'response structure is valid': (r) => {
                    const data = r.json().data;
                    return data && data.getAllListings && Array.isArray(data.getAllListings.listings);
                },
            });

            // Optional sleep to simulate user think time between requests
            sleep(1);
        });
    }
}
