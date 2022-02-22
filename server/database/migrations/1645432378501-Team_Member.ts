import { MigrationInterface, QueryRunner } from 'typeorm';

export class TeamMember1645432378501 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
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
	  'task',
	  new TableForeignKey({
	    columnNames: ['user_id'],
		referencedColumnNames: ['id'],
		referencedTableName: 'User',
		onDelete: 'CASCADE',
	  }),
	);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('team_member');
  }

}
