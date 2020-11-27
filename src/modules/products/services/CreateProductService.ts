import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';
import ProductsRepository from '../infra/typeorm/repositories/ProductsRepository';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

@injectable()
class CreateProductService {
  constructor(private productsRepository: IProductsRepository) {}

  @inject('ProductsRepository')
  public async execute({ name, price, quantity }: IRequest): Promise<Product> {
    // TODO
    const productExists = await this.productsRepository.findByName(name);

    if(productExists){
      throw new AppError("There is already a product with this name.");
    }

    const product = await this.productsRepository.create({
      name,
      price,
      quantity,
    });

    return product;

  }
}

export default CreateProductService;
