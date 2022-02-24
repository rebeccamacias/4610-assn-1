import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Project1645397955482 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
	  new Table({
	    name: 'project',
		columns: [
		  {
		    name: 'id',
		    isPrimary: true,
		    isGenerated: true,
			isUnique: true,
			type: 'int'
          },
		  {
		  	name: 'teamLeaderId',
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
		    name: 'contextId',
			isUnique: true,
			isNullable: false,
			type: 'text',
		  },
        ],
	  }),
	);

	await queryRunner.createForeignKey(
	  'project',
	  new TableForeignKey({
	    columnNames: ['teamLeaderId'],
		referencedColumnNames: ['id'],
		referencedTableName: 'user',
		onDelete: 'CASCADE',
	  }),
	);

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('project');
  }

}
