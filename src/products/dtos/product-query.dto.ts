// src/products/dto/product-query.dto.ts
import { ApiPropertyOptional } from '@nestjs/swagger';
import { ProductStatus } from '@prisma/client';
import {
  IsOptional,
  IsString,
  IsNumber,
  IsDateString,
  IsArray,
} from 'class-validator';

export class ProductQueryDto {
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
    description: "Query parameter for product's category filter",
    example: 'Pizza',
  })
  @IsOptional()
  @IsArray()
  categories?: string;

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
