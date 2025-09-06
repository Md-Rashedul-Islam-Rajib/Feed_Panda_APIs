import {ApiPropertyOptional } from '@nestjs/swagger';
import { CategoryStatus } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsIn,
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CategoryQueryDto {
  // PaginationDto properties
  @ApiPropertyOptional({
    required: false,
    default: 1,
    description: 'Page number for pagination',
  })
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({
    required: false,
    default: 10,
    description: 'Items per page for pagination',
  })
  @Type(() => Number)
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

  // CategoryFilterDto properties

  @ApiPropertyOptional({
    required: false,
    enum: ['ACTIVE', 'INACTIVE', 'UPCOMING', 'DISCONTINUED'],
    default: 'ACTIVE',
    description: 'Category status',
  })
  @IsOptional()
  @IsEnum(CategoryStatus)
  status?: CategoryStatus;

  @ApiPropertyOptional({
    required: false,
    description: 'creation date of category',
  })
  @IsOptional()
  @IsDateString()
  created_At?: Date;

  @ApiPropertyOptional({
    required: false,
    description: 'update date of category',
  })
  @IsOptional()
  @IsDateString()
  updated_At?: Date;

  @ApiPropertyOptional({
    required: false,
    description: 'Name or slug of the category',
  examples: ['Pizza','store-1-burger']
  })
  @IsOptional()
  @IsString()
  search?: string;
}
