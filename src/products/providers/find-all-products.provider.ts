/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import { PaginationHelper } from 'src/common/pagination/helper/pagination.helper';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductQueryDto } from '../dtos/product-query.dto';

@Injectable()
export class FindAllProductsProvider {
    constructor(
        private readonly prisma: PrismaService,
        private readonly paginationHelper:PaginationHelper
    ) { }
    
    /**
       * find all products with filter options
       * @param productQueryDto : Query parameter for filtering products
       * @returns : products object array
       */  
        
        public async findAll(productQueryDto: ProductQueryDto) {
            
            // destructing all options for applying filter logic
            const { minPrice, maxPrice, status, limit, page, sortBy, sortOrder, search, created_At, updated_At } = productQueryDto;
    
            const where: any = {};
    
            // filter by price
            if (minPrice !== undefined || maxPrice !== undefined) {
                where.price = {};
                if(minPrice !== undefined) where.price.gte = minPrice;
                if(maxPrice !== undefined) where.price.lte = maxPrice;
            }
    
            // filter by status, creation and update date
            if (status) where.status = status;
                if (created_At) where.created_At = { gte: new Date(created_At) };
                if (updated_At) where.updated_At = { gte: new Date(updated_At) };
    
            // field base search filter
            if(search){
                where.OR = [
                    {name: {contains:search, mode: 'insensitive'}},
                    {description: {contains:search, mode: 'insensitive'}},
                    { slug: { contains: search, mode: 'insensitive' } }
                    
                ]
            }
    
    
            return this.paginationHelper.paginate(
                'product',
                where,
                page,
                limit,
                {
                    categories : {
                        select: {id:true,name:true}
                    }
                },
                {
                    [sortBy ?? 'created_At']: sortOrder
                }
            )
        }
    
}
