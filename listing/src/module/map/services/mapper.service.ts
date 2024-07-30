// mapper.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class MapperService {
    public mapListingToProperty(listing: any): any {
        // Format the USD price
        const formattedPrice = this.formatPrice(listing.price.usd);

        return {
            id: listing.id,
            price: formattedPrice,
            geoLocation: listing.address.geoLocation,
        };
    }  

    private formatPrice(price: number): string {
        if (price >= 1000000) {
            return (price / 1000000).toFixed(2) + 'M';
        } else if (price >= 1000) {
            return Math.round(price / 1000) + 'K';
        } else {
            return price.toString();
        }
    }
}
