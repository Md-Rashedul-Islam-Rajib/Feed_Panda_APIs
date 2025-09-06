import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { PaginationHelper } from './common/pagination/helper/pagination.helper';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [CategoriesModule, PrismaModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService,PaginationHelper],
  exports:[PaginationHelper]
})
export class AppModule {}
