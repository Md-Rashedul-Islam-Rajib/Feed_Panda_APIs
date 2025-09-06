import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * configuration for swagger documentation
   */

  const swaggerConfig = new DocumentBuilder()
    .setTitle('FeedPanda_APIs')
    .setDescription('Inventory management system for FeedPanda')
    .setVersion('0.0.1')
    .build()
  
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api',app,document)
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
