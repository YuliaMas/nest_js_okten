import { MigrationInterface, QueryRunner } from "typeorm";

export class AddLikeMe1729721151501 implements MigrationInterface {
    name = 'AddLikeMe1729721151501'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "bio"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "bio" character varying NOT NULL`);
    }

}
