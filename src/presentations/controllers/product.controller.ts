import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateProductCommand } from '../../applications/commands/create-product/create-product.command';
import { GetProductQuery } from '../../applications/queries/get-product/get-product.query';

@Controller('products')
export class ProductController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async create(@Body() body: { name: string; price: number }) {
    return this.commandBus.execute(new CreateProductCommand(body.name, body.price));
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.queryBus.execute(new GetProductQuery(id));
  }
}