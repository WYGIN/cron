import {
    AggregateRoot,
} from '@nestjs/cqrs';
import { CreateCronCommand } from './commands/impl/create-cron.command';
import { CreateCronDto } from './dto/create-cron.dto';
import { UpdateCronCommand } from './commands/impl/update-cron.command';
import { DeleteCronCommand } from './commands/impl/delete-cron.command';

export class CronAggregate extends AggregateRoot {
    constructor() {
        super()
        this.autoCommit = true
    }

    createCron(payload: CreateCronDto): void {
        this.apply(new CreateCronCommand(payload))
    }

    updateCron(payload: CreateCronDto): void {
        this.apply(new UpdateCronCommand(payload))
    }

    deleteCron(name: string): void {
        this.apply(new DeleteCronCommand(name))
    }
}
