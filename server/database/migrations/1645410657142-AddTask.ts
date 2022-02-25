import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Task1645410657142 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
	  new Table({
	    name: 'task',
		columns: [
		  {
		    name: 'id',
		    isPrimary: true,
		    isGenerated: true,
			type: 'int'
          },
		  {
		    name: 'projectId',
			type: 'int',
          },
		  {
		    name: 'title',
		    isNullable: false,
			type: 'text',
          },
		  {
		    name: 'description',
		    isNullable: false,
			type: 'text',
          },
		  {
		    name: 'timeEstimation',
			isNullable: false,
			type: 'real',
          },
		  {
		    name: 'status',
			isNullable: false,
			type: 'Boolean',
          },
		  {
			name: 'userId',
			type: 'int',
			isNullable: true
		  }
		],
	  }),
	);

	await queryRunner.createForeignKey(
		'task',
	  new TableForeignKey({
	    columnNames: ['projectId'],
		referencedColumnNames: ['id'],
		referencedTableName: 'project',
		onDelete: 'CASCADE',
	  }),
	);

	await queryRunner.createForeignKey(
		'task',
	  new TableForeignKey({
	    columnNames: ['userId'],
		referencedColumnNames: ['id'],
		referencedTableName: 'user',
		onDelete: 'CASCADE',
	  }),
	);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('task');
  }
}
