import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FindAllCategoryProvider } from './providers/find-all-category.provider';
import { PaginationHelper } from 'src/common/pagination/helper/pagination.helper';
import { GenerateSlug } from 'src/common/helper/generate-slug.helper';

@Module({
  controllers: [CategoriesController],
  providers: [
    CategoriesService,
    FindAllCategoryProvider,
    PaginationHelper,
    GenerateSlug
  ],
  imports: [PrismaModule]
})
export class CategoriesModule {}
