import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddProdctIdToOrderProducts1605995679958 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('orders_products', new TableColumn({
        name:'product_id',
        type:'uuid',
        isNullable:true,
      }));

      await queryRunner.createForeignKey(
        'orders_products',
        new TableForeignKey({
          name:'ProductsOrderProduct',
          columnNames:['product_id'],
          referencedColumnNames:['id'],
          referencedTableName:'products',
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('orders_products', 'ProductsOrderProduct');
      await queryRunner.dropColumn('orders_products', 'product_id');
    }

}
