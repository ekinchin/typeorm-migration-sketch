import {MigrationInterface, QueryRunner} from "typeorm";

export class init1628767076120 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query('ALTER TABLE Goods ADD COLUMN cost INTEGER');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query('ALTER TABLE Goods DROP COLUMN cost');
    }

}
