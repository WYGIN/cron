import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateCronCommand } from '../impl/create-cron.command';
import { Model } from 'mongoose';
import { Cron } from '../../schemas/cron.schema';
import { InjectModel } from '@nestjs/mongoose';

@CommandHandler(CreateCronCommand)
export class CreateCronHandler implements ICommandHandler<CreateCronCommand> {
  constructor(@InjectModel(Cron.name) private repository: Model<Cron>) {}

  async execute(command: CreateCronCommand) {
    const { cron } = command;
    return new this.repository(cron).save()
  }
}