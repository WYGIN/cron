import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateCronCommand } from '../impl/update-cron.command';
import { Model } from 'mongoose';
import { Cron } from '../../schemas/cron.schema';
import { InjectModel } from '@nestjs/mongoose';

@CommandHandler(UpdateCronCommand)
export class CreateCronHandler implements ICommandHandler<UpdateCronCommand> {
  constructor(@InjectModel(Cron.name) private repository: Model<Cron>) {}
  
  async execute(command: UpdateCronCommand) {
    const { payload } = command;
    return this.repository.findOneAndUpdate({name: payload.name}, {$set: payload}).exec()
  }
}
