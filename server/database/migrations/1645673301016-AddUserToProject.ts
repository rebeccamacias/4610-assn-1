import {MigrationInterface, PrimaryGeneratedColumn, QueryRunner} from "typeorm";

export class AddUserToProject1645673301016 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        @PrimaryGeneratedColumn()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
