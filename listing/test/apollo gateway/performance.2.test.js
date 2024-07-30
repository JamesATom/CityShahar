// apollo gateway performance test
import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate } from 'k6/metrics';

// Custom metrics
const responseTimeTrend = new Trend('response_time');
const successRate = new Rate('success_rate');

export const options = {
    scenarios: {
        constant_load: {
            executor: 'constant-vus',
            vus: 200,
            duration: '30s',
        },
        ramping_load: {
            executor: 'ramping-vus',
            startVUs: 1,
            stages: [
                { duration: '10s', target: 10 },
                { duration: '10s', target: 20 },
                { duration: '10s', target: 0 },
            ],
        },
    },
    thresholds: {
        'response_time': ['p(95)<200'],
        'success_rate': ['rate>0.90'],
    },
};

function performQuery(page, type, regionId, districtId, filters, sort) {
    const url = 'https://starfish-app-8guhe.ondigitalocean.app/graphql';
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
                page: page,
                type: type,
                regionId: regionId,
                districtId: districtId,
                filters: filters,
                sort: sort
            },
            lang: ""
        }
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    return http.post(url, payload, params);
}

export default function () {
    const filters = {
        buildingType: "House",
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
    };
    const sort = {
        recommended: 1,
        priceHighToLow: 0,
        priceLowToHigh: 0
    };
    const res = performQuery(1, "rent", 14, 161, filters, sort);
    check(res, {
        'status was 200': (r) => r.status == 200,
        'transaction time OK': (r) => r.timings.duration < 200,
    });

    // Record custom metrics
    responseTimeTrend.add(res.timings.duration);
    successRate.add(res.status === 200);

    sleep(1); // Simulate user think time
}