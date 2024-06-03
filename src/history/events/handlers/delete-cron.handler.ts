import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { CronDeleteEvent } from '../impl/delete-cron.event';

@EventsHandler(CronDeleteEvent)
export class CreateCronItemHandler implements IEventHandler<CronDeleteEvent> {
  handle(event: CronDeleteEvent) {
    console.log(clc.yellowBright('Async HeroFoundItemEvent...'));
  }
}
