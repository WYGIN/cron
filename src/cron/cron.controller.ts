import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CronService } from './cron.service';
import { CreateCronDto } from './dto/create-cron.dto';
import { Cron } from './interfaces/cron.interface';

@Controller('cron')
export class CronController {
    constructor(private readonly cronService: CronService) {}

    @Post()
    async create(@Body() createCronDto: CreateCronDto) {
        this.cronService.create(createCronDto);
    }

    @Post()
    async update(@Body() createCronDto: CreateCronDto) {
        this.cronService.update(createCronDto);
    }

    @Get()
    async findAll(): Promise<Cron[]> {
        return this.cronService.findAll();
    }

    @Get(':name')
    async findOne(
        @Param('name')
        name: string,
    ): Promise<Cron> {
        return this.cronService.findOne(name);
    }

    @Post(':name')
    async delete(
        @Param('name')
        name: string,
    ): Promise<Boolean> {
        return this.cronService.delete(name)
    }
}