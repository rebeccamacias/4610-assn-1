import {MigrationInterface, PrimaryGeneratedColumn, QueryRunner, Table, TableForeignKey} from "typeorm";

export class AddUserToProject1645673301016 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user_to_project',
                columns: [
                    {
                        name: 'user_to_project_id',
                        isPrimary: true,
                        isGenerated: true,
                        type: 'int',
                    },
                    {
                        name: 'user_id',
                        isUnique: true,
                        type: 'int',
                    },
                    {
                        name: 'project_id',
                        isUnique: true,
                        type: 'int',
                    }
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'user_to_project',
          new TableForeignKey({
            columnNames: ['project_id'],
            referencedColumnNames: ['project_id'],
            referencedTableName: 'project',
            onDelete: 'CASCADE',
          }),
        );

        await queryRunner.createForeignKey(
            'user_to_project',
          new TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            onDelete: 'CASCADE',
          }),
        );

        await queryRunner.createForeignKey(
            'user',
          new TableForeignKey({
            columnNames: ['id'],
            referencedColumnNames: ['user_id'],
            referencedTableName: 'user_to_project',
            onDelete: 'CASCADE',
          }),
        );

        await queryRunner.createForeignKey(
          'project',
          new TableForeignKey({
            columnNames: ['project_id'],
          referencedColumnNames: ['project_id'],
          referencedTableName: 'user_to_project',
          onDelete: 'CASCADE',
          }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
