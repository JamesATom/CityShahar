// filter.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class FilterService {
    public filterListings(
        listings: any[],
        buildingType: string,
        floor: number,
        rooms: number,
        buildingAreaFrom: number,
        buildingAreaTo: number,
        buildingPriceFrom: number,
        buildingPriceTo: number,
        buildingYearFrom: number,
        buildingYearTo: number,
        safety: number,
        parking: number,
        garbage: number,
        serviceLift: number,
        passengerLift: number,
        balcony: number,
        playground: number,
        wifi: number
    ): any[] {
        // First, filter by building type if provided
        let filteredListings = (buildingType)
            ? listings.filter(listing =>
                  listing.category.name.en
                      .toLowerCase()
                      .includes((buildingType).toLowerCase())
              )
            : listings;
    
        // Then, filter by price range
        filteredListings = filteredListings.filter(listing => {
            const price = listing.price.usd;
    
            // If both buildingPriceFrom and buildingPriceTo are zero, include all listings
            if (buildingPriceFrom === 0 && buildingPriceTo === 0) {
                return true;
            }
            // If only buildingPriceFrom is set, include listings with price greater than or equal to buildingPriceFrom
            else if (buildingPriceFrom > 0 && buildingPriceTo === 0) {
                return price >= buildingPriceFrom;
            }
            // If only buildingPriceTo is set, include listings with price less than or equal to buildingPriceTo
            else if (buildingPriceFrom === 0 && buildingPriceTo > 0) {
                return price <= buildingPriceTo;
            }
            // If both buildingPriceFrom and buildingPriceTo are set, include listings within the range
            else {
                return price >= buildingPriceFrom && price <= buildingPriceTo;
            }
        });
    
        // Then, filter by building area range
        filteredListings = filteredListings.filter(listing => {
            const groups = Array.isArray(listing.generalAttributes.attributes)
                ? listing.generalAttributes.attributes
                : [];
    
            let areaAttr;
    
            for (const group of groups) {
                for (const attr of group['attributes']) {
                    if (
                        attr.name.en.toLowerCase() === 'total area' ||
                        attr.name.en.toLowerCase() === 'area of the house'
                    ) {
                        areaAttr = attr;
                        break;
                    }
                }
            }
    
            if (!areaAttr) {
                return true; // Include listing if area attribute is not found
            }
    
            const area = parseFloat(areaAttr.value.en);
    
            // If both buildingAreaFrom and buildingAreaTo are zero, include all listings
            if (buildingAreaFrom === 0 && buildingAreaTo === 0) {
                return true;
            }
            // If only buildingAreaFrom is set, include listings with area greater than or equal to buildingAreaFrom
            else if (buildingAreaFrom > 0 && buildingAreaTo === 0) {
                return area >= buildingAreaFrom;
            }
            // If only buildingAreaTo is set, include listings with area less than or equal to buildingAreaTo
            else if (buildingAreaFrom === 0 && buildingAreaTo > 0) {
                return area <= buildingAreaTo;
            }
            // If both buildingAreaFrom and buildingAreaTo are set, include listings within the range
            else {
                return area >= buildingAreaFrom && area <= buildingAreaTo;
            }
        });

        // Then, filter by building year range
        filteredListings = filteredListings.filter(listing => {
            const groups = Array.isArray(listing.generalAttributes.attributes)
                ? listing.generalAttributes.attributes
                : [];

            let yearAttr;

            for (const group of groups) {
                for (const attr of group['attributes']) {
                    if (attr.name.en.toLowerCase() === 'year of construction') {
                        yearAttr = attr;
                        break;
                    }
                }
            }

            if (!yearAttr) {
                return true; // Include listing if year attribute is not found
            }

            const year = parseInt(yearAttr.value.en);

            // If both buildingYearFrom and buildingYearTo are zero, include all listings
            if (buildingYearFrom === 0 && buildingYearTo === 0) {
                return true;
            }
            // If only buildingYearFrom is set, include listings with year greater than or equal to buildingYearFrom
            else if (buildingYearFrom > 0 && buildingYearTo === 0) {
                return year >= buildingYearFrom;
            }
            // If only buildingYearTo is set, include listings with year less than or equal to buildingYearTo
            else if (buildingYearFrom === 0 && buildingYearTo > 0) {
                return year <= buildingYearTo;
            }
            // If both buildingYearFrom and buildingYearTo are set, include listings within the range
            else {
                return year >= buildingYearFrom && year <= buildingYearTo;
            }
        });
    
        // Finally, apply the other filters
        return filteredListings.filter(listing => {
            const groups = Array.isArray(listing.generalAttributes.attributes) ? listing.generalAttributes.attributes : [];
    
            let floorAttr, roomsAttr, safetyAttr, parkingAttr, garbageAttr, serviceLiftAttr, passengerLiftAttr, balconyAttr, playgroundAttr, wifiAttr;

            for (const group of groups) {
                for (const attr of group['attributes']) {
                    const attrName = attr.name.en.toLowerCase();
                    const attrValue = attr.value.en.toLowerCase();
        
                    if (attrName === 'floor') {
                        floorAttr = attr;
                    } else if (attrName === 'rooms') {
                        roomsAttr = attr;
                    } else if (attrName === 'safety') {
                        safetyAttr = attr;
                    } else if (attrName === 'parking') {
                        parkingAttr = attr;
                    } else if (attrName.includes('garbage') && attrValue === 'eat') {
                        garbageAttr = attr;
                    } else if (attrName.includes('service lift') && attrValue === 'eat') {
                        serviceLiftAttr = attr;
                    } else if (attrName.includes('passenger elevator') && attrValue === 'eat') {
                        passengerLiftAttr = attr;
                    } else if (attrName.includes('balcony') && attrValue !== "no") {
                        balconyAttr = attr;
                    } else if (attrName === 'facilities') {
                        if (attrValue.includes('playground')) {
                            playgroundAttr = attr;
                        }
                        if (attrValue.includes('wi-fi')) {
                            wifiAttr = attr;
                        }
                    }
                }
            }
            
            const floorMatch = floor === 0 || (floorAttr && (floor >= 7 ? parseInt(floorAttr.value.en.split(' ').pop()) >= floor : floorAttr.value.en.split(' ').pop() === floor.toString()));
            const roomsMatch = rooms === 0 || (roomsAttr && (rooms >= 7 ? parseInt(roomsAttr.value.en.split(' ').pop()) >= rooms : roomsAttr.value.en.split(' ').pop() === rooms.toString()));
    
            // Filter by additional facilities
            const safetyMatch = safety === 0 || (safety === 1 && safetyAttr !== undefined);
            const parkingMatch = parking === 0 || (parking === 1 && parkingAttr !== undefined);
            const garbageMatch = garbage === 0 || (garbage === 1 && garbageAttr !== undefined);
            const serviceLiftMatch = serviceLift === 0 || (serviceLift === 1 && serviceLiftAttr !== undefined);
            const passengerLiftMatch = passengerLift === 0 || (passengerLift === 1 && passengerLiftAttr !== undefined);
            const balconyMatch = balcony === 0 || (balcony === 1 && balconyAttr !== undefined);
            const playgroundMatch = playground === 0 || (playground === 1 && playgroundAttr !== undefined);
            const wifiMatch = wifi === 0 || (wifi === 1 && wifiAttr !== undefined);

            return floorMatch && roomsMatch && safetyMatch && parkingMatch && garbageMatch && serviceLiftMatch && passengerLiftMatch && balconyMatch && playgroundMatch && wifiMatch;
        });
    }    
}
