// common.service.ts
import { Injectable } from '@nestjs/common';
import { DivideAttributeDto } from '../dto/divide-generalAtt.input';
import { SVG_PATH } from '../constants/listing.constants';

@Injectable()
export class CommonService {
    public getLocalizedValue(json: any, lang: string): string {
        return json?.[lang] || 'N/A';
    }

    public mapAttributes(attributes: DivideAttributeDto[], lang: string): any[] {
        const uniquePaths = new Set<string>();
        return attributes
            .map(attr => ({
                key: attr.name.en.toLowerCase(),
                name: this.getLocalizedValue(attr.name, lang),
                value: this.getLocalizedValue(attr.value, lang),
                unitMeasurement: attr.unitMeasurement,
                available: true,
                path: `${SVG_PATH}${attr.name.en.toLowerCase().replace(/\s/g, '_')}.svg`,
            }))
            .filter(attr => {
                if (uniquePaths.has(attr.path)) {
                    return false;
                } else {
                    uniquePaths.add(attr.path);
                    return true;
                }
            });
    }
}
