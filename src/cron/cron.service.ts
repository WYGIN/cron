import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron } from './schemas/cron.schema';
import { CreateCronDto } from './dto/create-cron.dto';

@Injectable()
export class CronService {
  constructor(@InjectModel(Cron.name) private cronModel: Model<Cron>) {}

  async create(createCronDto: CreateCronDto): Promise<Cron> {
    const createdCron = new this.cronModel(createCronDto);
    return createdCron.save();
  }

  async find(name: string): Promise<Cron> {
    return this.cronModel.findOne({name: name}).exec()
  }

  async findAll(): Promise<Cron[]> {
    return this.cronModel.find().exec();
  }

  async update(payload: CreateCronDto): Promise<Cron> {
    const updateCron = this.cronModel.findOneAndUpdate({name: payload.name}, {$set: payload}).exec()
    return updateCron
  }

  async delete(name: string): Promise<boolean> {
    const deleteCron = this.cronModel.deleteOne({ name: name }).exec()
    return (await deleteCron).acknowledged
  }
}
