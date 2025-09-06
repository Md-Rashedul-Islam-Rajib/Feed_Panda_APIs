import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { PaginationHelper } from 'src/common/pagination/helper/pagination.helper';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GenerateSlug } from 'src/common/helper/generate-slug.helper';
import { FindAllProductsProvider } from './providers/find-all-products.provider';


@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PaginationHelper,GenerateSlug, FindAllProductsProvider],
  imports: [PrismaModule]
})
export class ProductsModule {}
