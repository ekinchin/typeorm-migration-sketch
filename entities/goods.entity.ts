import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("goods_id_idx", ["id"], {})
@Index("goods_pk", ["id"], { unique: true })
@Entity("goods", { schema: "public" })
export class Goods {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "art_nunmber" })
  artNunmber: string;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;
}
