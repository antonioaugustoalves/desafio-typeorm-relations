import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
//Continuar a partir de 49:18 no video
//https://www.youtube.com/watch?v=nYcdmLIPr7s
import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts';

class Product {
  id: string;

  name: string;

  price: number;

  quantity: number;

  order_products: OrdersProducts[];

  created_at: Date;

  updated_at: Date;
}

export default Product;
