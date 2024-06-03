import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron } from './schemas/cron.schema';
import { CreateCronDto } from './dto/create-cron.dto';
import { CommandBus } from '@nestjs/cqrs'
import { CreateCronCommand } from './commands/createCron.command';
import { FindOneCronCommand, FindAllCronCommand } from './commands/findCron.command';
import { UpdateCronCommand } from './commands/updateCron.command';
import { DeleteCronCommand } from './commands/deleteCron.command';

@Injectable()
export class CronService {
//   constructor(@InjectModel(Cron.name) private cronModel: Model<Cron>) {}

//   async create(createCronDto: CreateCronDto): Promise<Cron> {
//     const createdCron = new this.cronModel(createCronDto);
//     return createdCron.save();
//   }

    constructor(private cronModel: CommandBus) {}

    async create(createCronDto: CreateCronDto) {
        return this.cronModel.execute(new CreateCronCommand(createCronDto))
    }

    async findOne(name: string) {
        return this.cronModel.execute(new FindOneCronCommand(name))
    }

    async findAll() {
        return this.cronModel.execute(new FindAllCronCommand())
    }

    async update(payload: CreateCronDto) {
        return this.cronModel.execute(new UpdateCronCommand(payload))
    }

    async delete(name: string) {
        return this.cronModel.execute(new DeleteCronCommand(name))
    }


    // async findOne(name: string): Promise<Cron> {
    // return this.cronModel.findOne({name: name}).exec()
    // }

    // async findAll(): Promise<Cron[]> {
    // return this.cronModel.find().exec();
    // }

    // async update(payload: CreateCronDto): Promise<Cron> {
    // const updateCron = this.cronModel.findOneAndUpdate({name: payload.name}, {$set: payload}).exec()
    // return updateCron
    // }

    // async delete(name: string): Promise<boolean> {
    // const deleteCron = this.cronModel.deleteOne({ name: name }).exec()
    // return (await deleteCron).acknowledged
    // }
}
