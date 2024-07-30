// performance.db.test.js apollo gateway
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 100 }, // Ramp up to 100 users over 2 minutes
    { duration: '5m', target: 100 }, // Stay at 100 users for 5 minutes
    { duration: '2m', target: 200 }, // Ramp up to 200 users over 2 minutes
    { duration: '5m', target: 200 }, // Stay at 200 users for 5 minutes
    { duration: '2m', target: 300 }, // Ramp up to 300 users over 2 minutes
    { duration: '5m', target: 300 }, // Stay at 300 users for 5 minutes
    { duration: '2m', target: 0 },   // Ramp down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests must complete below 500ms
    http_req_failed: ['rate<0.1'], // http errors should be less than 10%
  },
};

const url = 'https://starfish-app-8guhe.ondigitalocean.app/graphql'; // Replace with your actual endpoint

const query = `
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
`;

const variables = {
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
};

export default function () {
  const payload = JSON.stringify({
    query: query,
    variables: variables,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response has data': (r) => r.json().data !== null,
    'response has listings': (r) => r.json().data.getAllListings.listings.length > 0,
  });

  sleep(1);
}