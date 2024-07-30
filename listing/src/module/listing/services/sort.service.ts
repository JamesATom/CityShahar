// sort.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class SortService {
    public sortListings(listings: any[], priceHighToLow: number, priceLowToHigh: number): any[] {
        if (priceHighToLow === 1) {
            return listings.sort((a, b) => b.price.usd - a.price.usd);
        } else if (priceLowToHigh === 1) {
            return listings.sort((a, b) => a.price.usd - b.price.usd);
        }
        return listings;
    }   
}
