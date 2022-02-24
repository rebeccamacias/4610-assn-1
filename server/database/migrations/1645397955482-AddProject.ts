import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Project1645397955482 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
	  new Table({
	    name: 'project',
		columns: [
		  {
		    name: 'project_id',
		    isPrimary: true,
		    isGenerated: true,
			type: 'int'
          },
		  {
		  	name: 'team_leader_id',
			type: 'int',
		  },
		  {
		  	name: 'name',
			isNullable: false,
			type: 'text',
		  },
		  {
		    name: 'description',
			isNullable: false,
			type: 'text',
		  },
		  {
		    name: 'context_id',
			isNullable: false,
			type: 'text',
		  },
        ],
	  }),
	);

	await queryRunner.createForeignKey(
	  'project',
	  new TableForeignKey({
	    columnNames: ['team_leader_id'],
		referencedColumnNames: ['id'],
		referencedTableName: 'user',
		onDelete: 'CASCADE',
	  }),
	);

	await queryRunner.createForeignKey(
		'project',
		new TableForeignKey({
	  	columnNames: ['context_id'],
		referencedColumnNames: ['contextId'],
		referencedTableName: 'user_role',
		onDelete: 'CASCADE',
	  }),
	);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('project');
  }

}
