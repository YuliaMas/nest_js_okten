import { MigrationInterface, QueryRunner } from "typeorm";

export class AddBioToUser1729720762463 implements MigrationInterface {
    name = 'AddBioToUser1729720762463'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "bio" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "bio"`);
    }

}
