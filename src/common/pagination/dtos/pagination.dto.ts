import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsIn, IsInt, IsOptional, Max, Min } from "class-validator";

export class PaginationDto {
  @ApiProperty({
    required: false,
    default: 1,
    description: 'Page number for pagination',
  })
  @Type(() => Number) // converting string to number
  @IsInt()
  @IsOptional()
  @Min(1)
  page?: number = 1;

  @ApiProperty({
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

  @ApiProperty({
    required: false,
    default: 'created_At',
    description: 'Field for sorting',
  })
  @IsOptional()
  sortBy?: string = 'created_At';

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
    default: 'desc',
    description: 'Sorting order for pagination',
  })
  @IsOptional()
  @IsIn(['asc', 'desc'])
  sortOrder?: 'asc' | 'desc' = 'desc';

  @ApiProperty({
    required: false,
    description: 'Search keyword for pagination',
  })
  @IsOptional()
  search?: string;
}