import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { PRODUCT_REPOSITORY } from '../../tokens';
import { ProductRepository } from '../../../domains/repositories/product.repository';
import { CreateProductCommand } from './create-product.command';
import { Product } from '../../../domains/entities/product.entity';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler implements ICommandHandler<CreateProductCommand> {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly repo: ProductRepository,
  ) {}

  async execute(command: CreateProductCommand): Promise<string> {
    const product = Product.create(command.name, command.price);
    await this.repo.save(product);
    return product.id;
  }
}