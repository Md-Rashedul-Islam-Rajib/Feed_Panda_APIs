import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsIn, IsInt, IsOptional, Max, Min } from "class-validator";

export class PaginationDto {
  @ApiPropertyOptional({
    required: false,
    default: 1,
    description: 'Page number for pagination',
  })
  @Type(() => Number) // converting string to number
  @IsInt()
  @IsOptional()
  @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({
    required: false,
    default: 10,
    description: 'Items per page for pagination',
  })
  @Type(() => Number) // converting string to number
  @IsInt()
  @IsOptional()
  @Min(1)
  @Max(50)
  limit?: number = 10;

  @ApiPropertyOptional({
    required: false,
    default: 'created_At',
    description: 'Field for sorting',
  })
  @IsOptional()
  sortBy?: string = 'created_At';

  @ApiPropertyOptional({
    required: false,
    enum: ['asc', 'desc'],
    default: 'desc',
    description: 'Sorting order for pagination',
  })
  @IsOptional()
  @IsIn(['asc', 'desc'])
  sortOrder?: 'asc' | 'desc' = 'desc';

  @ApiPropertyOptional({
    required: false,
    description: 'Search keyword for pagination',
  })
  @IsOptional()
  search?: string;
}