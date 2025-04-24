import { randomUUID } from 'crypto';

export class Product {
  private constructor(
    public readonly id: string,
    public name: string,
    public price: number,
  ) {}

  static create(name: string, price: number): Product {
    return new Product(randomUUID(), name, price);
  }
}