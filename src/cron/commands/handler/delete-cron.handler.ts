import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteCronCommand } from '../impl/delete-cron.command';
import { Model } from 'mongoose';
import { Cron } from '../../schemas/cron.schema';
import { InjectModel } from '@nestjs/mongoose';

@CommandHandler(DeleteCronCommand)
export class CreateCronHandler implements ICommandHandler<DeleteCronCommand> {
  constructor(@InjectModel(Cron.name) private repository: Model<Cron>) {}

  async execute(command: DeleteCronCommand) {
    const { name } = command;
    return this.repository.findOneAndDelete({name: name}).exec()
  }
}
