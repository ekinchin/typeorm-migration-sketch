import { Goods as GoodsMigration } from '../generated/entities/Goods';
import { Goods as GoodsTarget } from '../entities/goods.entity';

type EQ<A, B> =
  A extends B ?
  B extends A ?
  unknown: unknown : [A, B, 'not equal'];

const req:EQ<GoodsTarget, GoodsMigration> = new GoodsTarget;
