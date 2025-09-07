import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryStatus } from '@prisma/client';
import { GenerateSlug } from 'src/common/helper/generate-slug.helper';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryQueryDto } from './dtos/category-query.dto';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';
import { FindAllCategoryProvider } from './providers/find-all-category.provider';

@Injectable()
export class CategoriesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly findAllCategoryProvider: FindAllCategoryProvider,
    private readonly generateSlug: GenerateSlug,
  ) {}

  /**
   *  private method for generating slug by combine with store_id and name
   * @param store_id : unique id of the store
   * @param name : name of the store
   * @returns : combination of store_id and name
   */

  /**
   * category creation service
   *
   * @param createCategoryDto : category object instance
   *
   */

  public async createCategory(createCategoryDto: CreateCategoryDto) {
    // destructuring for generating slug and default status

    const {
      name,
      store_id,
      status = CategoryStatus.ACTIVE,
    } = createCategoryDto;

    const slug = this.generateSlug.generateSlug(store_id, name);

    return this.prisma.category.create({
      data: {
        name,
        slug,
        status,
        store_id,
      },
    });
  }

  /**
   * find all the categories service
   * @param categoryQueryDto : category query object instance including pagination object
   * @returns : category object array as response with pagination meta data
   */

  public async findAllCategory(categoryQueryDto: CategoryQueryDto) {
    return await this.findAllCategoryProvider.findAll(categoryQueryDto);
  }

  /**
   * find any category by id service
   * @param id : category id
   * @returns : category object from database
   */

  public async findById(id: string) {
    // checking if category exists
    const category = await this.prisma.category.findUnique({ where: { id } });

    // if category isn't exists, throw not found exception
    if (!category) {
      throw new NotFoundException(`Category with ${id} not found`, {
        cause: 'Wrong category id',
        description: 'Provided category was not found in the database',
      });
    }

    // if category exists then return that category
    return category;
  }

  public async updateCategory(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ) {
    // checking if category exists
    await this.findById(id);

    /**
     * though slug is combine of store_id and name,
     * if user wants to update category name/store_id
     * then we have re-generate slug again
     *  */
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (updateCategoryDto.name) {
      updateCategoryDto['slug'] = this.generateSlug.generateSlug(
        category!.store_id,
        updateCategoryDto.name,
      );
    }
    if (updateCategoryDto.store_id) {
      updateCategoryDto['slug'] = this.generateSlug.generateSlug(
        updateCategoryDto.store_id,
        category!.name,
      );
    }

    // return the updated category object along with new slug
    return this.prisma.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  public async deleteCategory(id: string) {
    // checking if category exists before initialize the delete operation
    await this.findById(id);
    await this.prisma.category.delete({ where: { id } });
    return `Category deleted successfully`
  }
}
