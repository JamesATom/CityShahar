// listing.controller.ts
import { EventPattern, Payload } from '@nestjs/microservices';
import { EmitControllerService } from './services/emitController.service';
import { Controller } from '@nestjs/common';
import { CreateListingInput } from './dto/create-listing.input';

@Controller()
export class ListingController {
    constructor(private readonly emitControllerService: EmitControllerService) {}

    @EventPattern('listing_created')
    async handleListingCreatedEvent(@Payload() data: CreateListingInput) {
        console.log(`Recieved listing_created event... with data id: ${data}`);
        await this.emitControllerService.handleListingCreatedEvent(data);
    }
}
