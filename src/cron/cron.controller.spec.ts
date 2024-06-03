import { Test } from '@nestjs/testing';
import { CronController } from './cron.controller';
import { CronService } from './cron.service';
import { Cron } from './interfaces/cron.interface';

describe('CatsController', () => {
  let cronController: CronController;
  let cronService: CronService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CronController],
      providers: [CronService],
    }).compile();

    cronService = moduleRef.get<CronService>(CronService);
    cronController = moduleRef.get<CronController>(CronController);
  });

  describe('findAll', () => {
    it('should return an array of crons', async () => {
      const result: Cron[] = [
        {
          name: 'cron-daily',
          apiKey: 'xxxxxxxxxxx',
          schedule: '* * ',
          startDate: Date.now(),
          webhook: "webhook.site",
        },
      ];
      jest.spyOn(cronService, 'findAll').mockImplementation(() => result);

      expect(await cronController.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a cron', async () => {
      const result: Cron = {
          name: 'cron-daily',
          apiKey: 'xxxxxxxxxxx',
          schedule: '* * ',
          startDate: Date.now(),
          webhook: "webhook.site",
        };
      jest.spyOn(cronService, 'findOne').mockImplementation(() => result);

      expect(await cronController.findOne(result.name)).toBe(result);
    });
  });

  describe('create', () => {
    it('should create a crons', async () => {
      const result: Cron = {
          name: 'cron-daily',
          apiKey: 'xxxxxxxxxxx',
          schedule: '* * ',
          startDate: Date.now(),
          webhook: "webhook.site",
      };
      jest.spyOn(cronService, 'create').mockImplementation(() => result);

      expect(await cronController.create(result)).toBe(result);
    });
  });

  describe('update', () => {
    it('should update the cron', async () => {
      const result: Cron = {
          name: 'cron-daily',
          apiKey: 'xxxxxxxxxxx',
          schedule: '* * ',
          startDate: Date.now(),
          webhook: "webhook.site",
        };
      jest.spyOn(cronService, 'update').mockImplementation(() => result);

      expect(await cronController.update(result)).toBe(result);
    });
  });

  describe('delete', () => {
    it('should delete a cron', async () => {
      const result: Cron = {
          name: 'cron-daily',
          apiKey: 'xxxxxxxxxxx',
          schedule: '* * ',
          startDate: Date.now(),
          webhook: "webhook.site",
        };
      jest.spyOn(cronService, 'delete').mockImplementation(() => result);

      expect(await cronController.delete(result.name)).toBe(true);
    });
  });
});