import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron } from './schemas/cron.schema';
import { CreateCronDto } from './dto/create-cron.dto';

@Injectable()
export class CronService {
  constructor(@InjectModel(Cron.name) private cronModel: Model<Cron>) {}

  async create(createCronDto: CreateCronDto): Promise<Cron> {
    const createdCat = new this.cronModel(createCronDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cron[]> {
    return this.cronModel.find().exec();
  }
}
