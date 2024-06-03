import { Injectable } from '@nestjs/common';
import { CreateCronDto } from './dto/create-cron.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs'
import { CreateCronCommand } from './commands/impl/create-cron.command';
import { FindOneCronCommand, FindAllCronCommand } from './queries/impl/find-cron.query';
import { UpdateCronCommand } from './commands/impl/update-cron.command';
import { DeleteCronCommand } from './commands/impl/delete-cron.command';

@Injectable()
export class CronService {
    constructor(private cmdBus: CommandBus, private queryBus: QueryBus) {}

    async create(createCronDto: CreateCronDto) {
        return this.cmdBus.execute(new CreateCronCommand(createCronDto))
    }

    async findOne(name: string) {
        return this.queryBus.execute(new FindOneCronCommand(name))
    }

    async findAll() {
        return this.queryBus.execute(new FindAllCronCommand())
    }

    async update(payload: CreateCronDto) {
        return this.cmdBus.execute(new UpdateCronCommand(payload))
    }

    async delete(name: string) {
        return this.cmdBus.execute(new DeleteCronCommand(name))
    }
}
