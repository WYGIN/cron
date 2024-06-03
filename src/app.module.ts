import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CronModule } from './cron/cron.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), CronModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
