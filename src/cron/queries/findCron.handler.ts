import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindOneCronCommand, FindAllCronCommand } from './impl/find-cron.query';
import { Model } from 'mongoose';
import { Cron } from '../schemas/cron.schema';
import { InjectModel } from '@nestjs/mongoose';

@QueryHandler(FindOneCronCommand)
export class FindOneCronHandler implements IQueryHandler<FindOneCronCommand> {
  constructor(@InjectModel(Cron.name) private repository: Model<Cron>) {}

  async execute(command: FindOneCronCommand) {
    const { name } = command;
    return this.repository.findOne({name: name}).exec()
  }
}

@QueryHandler(FindAllCronCommand)
export class FindAllCronHandler implements IQueryHandler<FindAllCronCommand> {
  constructor(@InjectModel(Cron.name) private repository: Model<Cron>) {}

  async execute(_: FindAllCronCommand) {
    return this.repository.find()
  }
}
