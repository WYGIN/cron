import { CreateCronDto } from "../dto/create-cron.dto";

export class CreateCronCommand {
    constructor(
      public readonly cron: CreateCronDto,
    ) {}
}