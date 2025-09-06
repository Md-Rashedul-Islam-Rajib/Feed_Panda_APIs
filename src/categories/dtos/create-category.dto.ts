import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { CategoryStatus } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCategoryDto {
  @ApiProperty({
    required: true,
    description: 'Category Name',
    example: 'Pizza',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({
    required: false,
    enum: ['ACTIVE', 'INACTIVE', 'UPCOMING', 'DISCONTINUED'],
    default: CategoryStatus.ACTIVE,
    description: 'Category status',
  })
  @IsOptional()
  @IsEnum(CategoryStatus)
  status?: CategoryStatus = CategoryStatus.ACTIVE;

  @ApiPropertyOptional({
    description: 'Slug (auto-generated if it is absent)',
    example: 'store_111-burger',
  })
  @IsString()
  @IsOptional()
  slug?: string;

  @ApiProperty({
    required: true,
    description: 'Store id',
  })
  @IsString()
  @IsNotEmpty()
  store_id: string;
}