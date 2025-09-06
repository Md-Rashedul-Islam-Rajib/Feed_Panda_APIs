import { FindAllProductsProvider } from './providers/find-all-products.provider';
import { PaginationHelper } from './../common/pagination/helper/pagination.helper';
import { ProductQueryDto } from './dtos/product-query.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { GenerateSlug } from 'src/common/helper/generate-slug.helper';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';


@Injectable()
export class ProductsService {
  constructor(
    private readonly prisma: PrismaService,
      private readonly generateSlug: GenerateSlug,
      private readonly paginationHelper: PaginationHelper,
    private readonly findAllProducts: FindAllProductsProvider,
  ) {}

    
    /**
     *  Create product service
     * 
     * @param createProductDto :product creation instance
     * 
     */
    
  public async createProduct(createProductDto: CreateProductDto) {
    
      // destructuring for generating slug and collect the category ids array
      const {
      name,
      store_id,
      categoryIds,
      status = 'PUBLISHED',
      ...rest
    } = createProductDto;

      // generating slug with store_id and name
    const slug = this.generateSlug.generateSlug(store_id, name);

      // checking if categories exist with the provided categories ids
    const categories = await this.prisma.category.findMany({
      where: { id: { in: categoryIds } },
    });

    if (categories.length !== categoryIds?.length) {
      throw new NotFoundException('Categories not found', {
        cause: 'One or more categories not found in database ',
        description:
          "Provided category id(s) don't with any category in database",
      });
    }

    
    return this.prisma.product.create({
      data: {
        name,
        slug,
        status,
        store_id,
            ...rest,
        // join this product with provided categories via id
        categories: {
          connect: categoryIds.map((categoryId) => ({
            id: categoryId, 
          })),
        },
      },
      include: {
        categories: true
      },
    });
  }

  /**
   * find all products with filter options
   * @param productQueryDto : Query parameter for filtering products
   * @returns : products object array
   */  
    
    public async findAll(productQueryDto: ProductQueryDto) {
       return await this.findAllProducts.findAll(productQueryDto)
       }


    /**
     * Find by product id
     * @param id : product id
     * @returns :product object
     */

    public async findById(id: string) {
// checking if product exists
        const product = await this.prisma.product.findUnique({
            where: { id },
            include: {
                categories: true
            }
    })

        if (!product) {
            throw new NotFoundException(`Product with ${id} not found`)
        }

        return product;
    }



    /**
     * Update product service
     * @param id :product id
     * @param updateProductDto : Partial type of create product instance 
     * 
     */

    public async updateProduct(id: string, updateProductDto: UpdateProductDto) {    
    
        // checking if products exists
        await this.findById(id);

        const { categoryIds, ...updateData } = updateProductDto;
        

        /**
         * if name changes, then we re-generate the slug
         */

        if (updateData.name) {
            const product = await this.prisma.product.findUnique({ where: { id } });
            updateData['slug'] = this.generateSlug.generateSlug(product!.store_id,updateData.name)
        }


        // if category id need to update,then we need to check provided category ids exist in database
        if (categoryIds) {
            const categories = await this.prisma.category.findMany({
                where: {id : {in : categoryIds}}
            })

            if (categories.length !== categoryIds.length) {
                throw new NotFoundException('One or more categories not found',{
                    cause: 'Provided categories id weren\'t match with the database'
                })
            }


            // delete existing connect between product category via id
            await this.prisma.productCategories.deleteMany({
                where: {product_id: id}
            })


            // update new category connection via category ids
            updateData['categories'] = {
                create: categoryIds.map((categoryId)=> ({
                    category : {connect : {id: categoryId}}
                }))
            }
        }

        return this.prisma.product.update({
            where: { id },
            data: updateData,
            include: {
                categories: true
            }
        })

    }


    /**
     * delete service for products
     * @param id : product id
     * 
     */

    public async deleteProduct(id: string) {
        await this.findById(id);
        return this.prisma.product.delete({where: {id}})
    }







}
