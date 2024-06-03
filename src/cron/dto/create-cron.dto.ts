import { IsInt, IsString } from 'class-validator';

export class CreateCronDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly webhook: string;

  @IsString()
  readonly apiKey: string;

  @IsString()
  readonly schedule: string;

  @IsInt()
  readonly startDate: number;
}
