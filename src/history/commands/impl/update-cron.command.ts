import { CreateCronDto } from "../../dto/create-cron.dto";

export class UpdateCronCommand {
    constructor(
      public readonly payload: CreateCronDto,
    ) {}
}

