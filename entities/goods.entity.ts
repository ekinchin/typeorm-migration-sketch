import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Goods {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  artNunmber: string;

  @Column()
  name: string | null;

  @Column()
  description: string | null;
}
