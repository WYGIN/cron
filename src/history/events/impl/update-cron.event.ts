import {IEvent} from "@nestjs/cqrs";
import { CreateCronDto } from "../../../dto/create-cron.dto";

export class CronUpdateEvent implements IEvent {
    constructor(
        public readonly aggregateId: string,
        public readonly payload: CreateCronDto,
    ) {}
}