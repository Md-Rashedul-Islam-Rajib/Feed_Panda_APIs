/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryQueryDto } from '../dtos/category-query.dto';
import { PaginationHelper } from 'src/common/pagination/helper/pagination.helper';

@Injectable()
export class FindAllCategoryProvider {
  constructor(
    private readonly prisma: PrismaService,
    private readonly paginationHelper: PaginationHelper,
  ) {}
  /**
   * find all the categories service
   * @param categoryQueryDto : category query object instance including pagination object
   * @returns : category object array as response with pagination meta data
   */

  public async findAll(categoryQueryDto: CategoryQueryDto) {
    // destructuring for for check and set the query value

    const {
      status,
      created_At,
      search,
      updated_At,
      limit,
      page,
      sortBy,
      sortOrder,
    } = categoryQueryDto;

    const where: any = {};

    // adding filter logic

    if (status) where.status = status;
    if (created_At) where.created_At = { gte: new Date(created_At) };
    if (updated_At) where.updated_At = { gte: new Date(updated_At) };
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { slug: { contains: search, mode: 'insensitive' } },
      ];
    }
    return this.paginationHelper.paginate(
      'category',
      where,
      page,
      limit,
      {
        products: {
          //including related data
          select: { id: true, name: true },
        },
      },
      {
        [sortBy ?? 'created_At']: sortOrder,
      },
    );
  }
}
