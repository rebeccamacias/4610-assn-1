import { MigrationInterface, QueryRunner } from 'typeorm';

export class TeamLeader1645432303903 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
	  new Table({
	    name: 'team_leader',
		columns: [
		  {
		    name: 'team_leader_id',
		    isPrimary: true,
		    isGenerated: true,
			type: 'int'
          },
		  {
		    name: 'user_id',
			type: 'int'
          },
		  {
		    name: 'project_id',
			type: 'int'
          },
		],
	  }),
	);

	await queryRunner.createForeignKey(
	  'team_leader',
	  new TableForeignKey({
	    columnNames: ['user_id'],
		referencedColumnNames: ['id'],
		referencedTableName: 'user',
		onDelete: 'CASCADE',
	  }),

	  new TableForeignKey({
	    columnNames: ['project_id'],
		referencedColumnNames: ['project_id'],
		referencedTableName: 'project',
		onDelete: 'CASCADE',
	  }),
	);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('team_leader');
  }

}
