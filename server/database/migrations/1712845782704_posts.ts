import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'posts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('post_id')
      table.string('post_date').notNullable()
      table.string('post_category').notNullable()
      table.string('post_title').notNullable()
      table.string('post_slug').notNullable
      table.string('post_image').notNullable
      table.string('post_content').notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
