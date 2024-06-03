import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { CronCreateEvent } from '../impl/create-cron.event';

@EventsHandler(CronCreateEvent)
export class CreateCronItemHandler implements IEventHandler<CronCreateEvent> {
  handle(event: CronCreateEvent) {
    console.log(clc.yellowBright('Async HeroFoundItemEvent...'));
  }
}
