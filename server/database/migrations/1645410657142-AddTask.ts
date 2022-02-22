import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Task1645410657142 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
	  new Table({
	    name: 'task',
		columns: [
		  {
		    name: 'task_id',
		    isPrimary: true,
		    isGenerated: true,
			type: 'int'
          },
		  {
		    name: 'team_member_id',
			type: 'int',
          },
		  {
		    name: 'project_id',
			type: 'int',
          },
		  {
		    name: 'title',
		    isNullable: false,
			type: 'int',
          },
		  {
		    name: 'description',
		    isNullable: false,
			type: 'int',
          },
		  {
		    name: 'time_estimation',
			isNullable: false,
			type: 'int',
          },
		  {
		    name: 'status',
			isNullable: false,
			type: 'Boolean',
          },
		],
	  }),
	);

	await queryRunner.createForeignKey(
		'task',
	  new TableForeignKey({
	    columnNames: ['project_id'],
		referencedColumnNames: ['project_id'],
		referencedTableName: 'project',
		onDelete: 'CASCADE',
	  }),
	);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('task');
  }
}
