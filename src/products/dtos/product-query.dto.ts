// src/products/dto/product-query.dto.ts
import { ApiPropertyOptional } from '@nestjs/swagger';
import { ProductStatus } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsDateString, IsIn, IsInt, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class ProductQueryDto {

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
  

  @ApiPropertyOptional({
    description: "Query parameter for product's minimum price filter",
    example: 250,
  })
  @IsOptional()
  @IsNumber()
  minPrice?: number;

  @ApiPropertyOptional({
    description: "Query parameter for product's maximum price filter",
    example: 1550,
  })
  @IsOptional()
  @IsNumber()
  maxPrice?: number;


  @ApiPropertyOptional({
    description: "Query parameter for product's status filter",
    example: ProductStatus.PUBLISHED,
  })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional({
    required: false,
    description: 'creation date of product',
  })
  @IsOptional()
  @IsDateString()
  created_At?: Date;

  @ApiPropertyOptional({
    required: false,
    description: 'update date of product',
  })
  @IsOptional()
  @IsDateString()
  updated_At?: Date;

  @ApiPropertyOptional({
    required: false,
    description: 'Name or slug of the product',
    examples: ['Pizza', 'store-1-burger'],
  })
  @IsOptional()
  @IsString()
  search?: string;
}
