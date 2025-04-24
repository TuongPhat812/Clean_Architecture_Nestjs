import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { GetProductQuery } from './get-product.query';
import { PRODUCT_REPOSITORY } from '../../tokens';
import { ProductRepository } from '../../../domains/repositories/product.repository';

@QueryHandler(GetProductQuery)
export class GetProductHandler implements IQueryHandler<GetProductQuery> {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly repo: ProductRepository,
  ) {}

  async execute(query: GetProductQuery) {
    return this.repo.findById(query.id);
  }
}