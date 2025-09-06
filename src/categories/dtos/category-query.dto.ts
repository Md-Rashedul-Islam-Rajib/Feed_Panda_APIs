import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CategoryQueryDto {
  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsDateString()
  created_At?: Date;

  @IsOptional()
  @IsDateString()
  updated_At?: Date;

  @IsOptional()
  @IsString()
  search?: string;
}
