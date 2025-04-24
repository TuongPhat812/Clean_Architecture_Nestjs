import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ProductController } from '../presentations/controllers/product.controller';
import { CreateProductHandler } from '../applications/commands/create-product/create-product.handler';
import { GetProductHandler } from '../applications/queries/get-product/get-product.handler';
import { ProductService } from '../applications/services/product.service';
import { ProductRepositoryImpl } from '../infrastructures/db/in-memory-db/product.repository.impl';
import { PRODUCT_REPOSITORY } from '../applications/tokens';

@Module({
  imports: [CqrsModule],
  controllers: [ProductController],
  providers: [
    ProductService,
    { provide: PRODUCT_REPOSITORY, useClass: ProductRepositoryImpl },
    CreateProductHandler,
    GetProductHandler,
  ],
})
export class ProductModule {}