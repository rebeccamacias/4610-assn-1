import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class AddUserToProject1645673301016 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user_project',
                columns: [
                    {
                        name: 'id',
                        isPrimary: true,
                        isGenerated: true,
                        type: 'int',
                    },
                    {
                        name: 'userId',
                        type: 'int',
                    },
                    {
                        name: 'projectId',
                        type: 'int',
                    }
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'user_project',
          new TableForeignKey({
            columnNames: ['projectId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'project',
            onDelete: 'CASCADE',
          }),
        );

        await queryRunner.createForeignKey(
            'user_project',
          new TableForeignKey({
            columnNames: ['userId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            onDelete: 'CASCADE',
          }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
