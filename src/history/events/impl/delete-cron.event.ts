import {IEvent} from "@nestjs/cqrs";
import { CreateCronDto } from "../../../dto/create-cron.dto";

export class CronDeleteEvent implements IEvent {
    constructor(
        public readonly aggregateId: string,
        public readonly name: string,
    ) {}
}