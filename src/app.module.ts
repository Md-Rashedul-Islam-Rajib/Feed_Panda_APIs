import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { PaginationHelper } from './common/pagination/helper/pagination.helper';

@Module({
  imports: [CategoriesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService,PaginationHelper],
  exports:[PaginationHelper]
})
export class AppModule {}
