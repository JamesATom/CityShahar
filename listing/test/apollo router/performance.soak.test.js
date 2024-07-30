// performance.db.test.js apollo router
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '5m', target: 50 },  // Ramp up to 50 users over 5 minutes
    { duration: '4h', target: 50 },  // Stay at 50 users for 4 hours
    { duration: '5m', target: 0 },   // Ramp down to 0 users over 5 minutes
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests must complete below 500ms
    http_req_failed: ['rate<0.01'],   // http errors should be less than 1%
  },
};

const url = 'https://seashell-app-hkrfl.ondigitalocean.app/'; // Replace with your actual endpoint

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

  // Randomly sleep between 1 and 5 seconds to simulate real user behavior
  sleep(Math.random() * 4 + 1);
}