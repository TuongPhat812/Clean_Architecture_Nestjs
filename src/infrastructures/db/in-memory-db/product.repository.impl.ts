import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../../domains/repositories/product.repository';
import { Product } from '../../../domains/entities/product.entity';

@Injectable()
export class ProductRepositoryImpl implements ProductRepository {
  private db = new Map<string, Product>(); // Fake in-memory DB

  async save(product: Product): Promise<void> {
    this.db.set(product.id, product);
  }

  async findById(id: string): Promise<Product | null> {
    return this.db.get(id) ?? null;
  }
}
