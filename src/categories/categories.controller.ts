import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { CategoryQueryDto } from './dtos/category-query.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';

@ApiTags('categories') // create separate category named "categories" in swagger ui
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

    
    // post controller for create category
  @Post()
  @ApiOperation({ summary: 'Create a new category' })
  @ApiResponse({ status: 201, description: 'Category successfully created' })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.createCategory(createCategoryDto);
    }
    

    // get all controller for fetching category
    @Get()
    @ApiOperation({ summary: 'Get all categories with optional filters' })
        @ApiResponse({status: 200, description: 'All categories fetched successfully'})
    findAll(@Query() categoryQueryDto: CategoryQueryDto) {
        return this.categoriesService.findAllCategory(categoryQueryDto)
    }


    // get single controller for fetching category
    @Get(':id')
    @ApiOperation({ summary: 'Get a category by Id' })
    @ApiResponse({ status: 200, description: 'Category fetched successfully' })
    findOne(@Param('id') id: string) {
        return this.categoriesService.findById(id)
    }


    // patch controller for category
    @Patch(':id')
    @ApiOperation({ summary: 'Update a category' })
    @ApiResponse({ status: 200, description: 'Category updated successfully' })
    update(
        @Param('id') id: string,
        @Body() updateCategoryDto: UpdateCategoryDto) {
        return this.categoriesService.updateCategory(id,updateCategoryDto)
    }
    

    // delete controller for category
    @Delete(':id')
    @ApiOperation({ summary: 'Delete a category' })
    @ApiResponse({ status: 200, description: 'Category deleted successfully' })
    delete(@Param('id') id: string) {
        return this.categoriesService.deleteCategory(id);
    }

}
