import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FindAllCategoryProvider } from './providers/find-all-category.provider';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, FindAllCategoryProvider],
  imports: [PrismaModule]
})
export class CategoriesModule {}
