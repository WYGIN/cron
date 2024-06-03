import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { CronUpdateEvent } from '../impl/update-cron.event';

@EventsHandler(CronUpdateEvent)
export class CreateCronItemHandler implements IEventHandler<CronUpdateEvent> {
  handle(event: CronUpdateEvent) {
    console.log(clc.yellowBright('Async HeroFoundItemEvent...'));
  }
}
