import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CronDocument = HydratedDocument<Cron>;

@Schema()
export class Cron {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  webhook: string;

  @Prop({ required: true })
  apiKey: string;

  @Prop({ validators: () => {} })
  schedule: string;

  @Prop({ default: Date.now() })
  startDate: number;
}

export const CronSchema = SchemaFactory.createForClass(Cron);
