// mapper.service.ts
import { Injectable } from '@nestjs/common';
import { CommonService } from '../../../common/services/common.service';

@Injectable()
export class MapperService {
    constructor(private readonly commonService: CommonService) {}
    
    public mapListingToProperty(listing: any, lang: string): any {
        const firstImage = listing.imageSet?.images[0]?.original || 'N/A';
        const { area, house, fullAddress } = listing.address || { area: { en: 'N/A' }, house: { en: 'N/A' }, fullAddress: { en: 'N/A' } };

        return {
            id: listing.id,
            price: listing.price,
            address: {
                area: this.commonService.getLocalizedValue(area, lang),
                house: this.commonService.getLocalizedValue(house, lang),
                fullAddress: this.commonService.getLocalizedValue(fullAddress, lang),
            },
            image: firstImage,
            isCommissioned: listing.isCommissioned,
        };
    }  
}
