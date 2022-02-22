import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class AddTeamMember1645561318537 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'team_member',
              columns: [
                {
                  name: 'team_member_id',
                  isPrimary: true,
                  isGenerated: true,
                  type: 'int',
                },
                {
                  name: 'user_id',
                  type: 'int',
                },
              ],
            }),
        );

        await queryRunner.createForeignKey(
            'team_member',
            new TableForeignKey({
              columnNames: ['user_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'user',
              onDelete: 'CASCADE',
            }),
          );      
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('team_member');
    }

}
