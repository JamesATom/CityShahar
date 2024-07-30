// listing.constants.ts
export const SVG_PATH = 'assets/svg/';
export const DEFAULT_GEOLOCATION = { latitude: 0, longitude: 0 };
export const DEFAULT_ADDRESS_KEYS = 'N/A';

export const HOUSE_DETAILS_ATTRIBUTES = new Set([
    'total area', 'rooms', 'floor', 'floors in the building', 'wall material', 
    'bathroom', 'kitchen stove', 'heating', 'balcony', 'view from the window', 'repair'
]);

export const HOUSE_RULES_ATTRIBUTES = new Set(['accommodations']);

export const FACILITIES_ATTRIBUTES = new Set([
    'technique', 'facilities', 'safety', 'furniture', 'passenger elevator', 'parking'
]);