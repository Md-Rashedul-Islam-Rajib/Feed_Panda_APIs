import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { ProductPricingType, ProductStatus } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateProductDto {
  @ApiProperty({
    description: 'Store id that product belongs',
    example: 'store_111',
  })
  @IsString()
  @IsNotEmpty()
  store_id: string;

  @ApiProperty({
    description: 'Franchise id that product belongs',
    example: 'fran_111',
  })
  @IsString()
  @IsNotEmpty()
  franchise_id: string;

  @ApiProperty({
    description: 'Product name',
    example: 'Pizza',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({
    description: 'Optional description of the product',
    example: 'A delicious pizza with cheese',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Price of the product',
    example: 9.99,
  })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    description: 'Pricing type of the product',
    enum: ProductPricingType,
    example: ProductPricingType.FLAT,
  })
  @IsEnum(ProductPricingType)
  @IsOptional()
  pricing_type: ProductPricingType = ProductPricingType.FLAT;

  @ApiProperty({
    description: 'Preparation time in minutes',
    example: 15,
  })
  @IsNumber()
  @IsNotEmpty()
  preparation_time: number;

  @ApiProperty({
    description: 'Status of the product',
    enum: ProductStatus,
    example: ProductStatus.PUBLISHED,
  })
  @IsEnum(ProductStatus)
  @IsOptional()
  status?: ProductStatus = ProductStatus.PUBLISHED;

  @ApiPropertyOptional({
    description: 'Slug (will be auto-generated if absent)',
    example: 'store_111-burger',
  })
  @IsString()
  @IsNotEmpty()
  slug?: string;

  @ApiPropertyOptional({
    description: 'MetaData as JSON object',
    example: { calories: '250k', size: 'Medium' },
  })
  @IsOptional()
  meta?: object;

  @ApiPropertyOptional({
    description: 'Array of category ids',
    example: ['cat_111','cat_112'],
  })
  @IsUUID('all',{each:true})
  @IsOptional()
  categoryIds?: string[];
}