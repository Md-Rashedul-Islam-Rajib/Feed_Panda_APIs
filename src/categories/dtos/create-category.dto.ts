import { ApiProperty } from "@nestjs/swagger";
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

  @ApiProperty({
    required: false,
    enum: ['ACTIVE','INACTIVE','UPCOMING','DISCONTINUED'],
    default: 'ACTIVE',
    description: 'Category status',
  })
  @IsOptional()
  @IsEnum(CategoryStatus)
  status?: CategoryStatus;


  @ApiProperty({
    required: true,
    description: 'Store id'
  })
  @IsString()
  @IsNotEmpty()
  store_id: string;
}