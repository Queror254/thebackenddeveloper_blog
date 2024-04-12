import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('comment_id')
      table.bigInteger('comment_post_id').unsigned().notNullable()
      table.bigInteger('comment_count').unsigned().notNullable()
      table.text('comment_author').notNullable()
      table.string('comment_author_ip').notNullable()
      table.dateTime('comment_date').notNullable()
      table.text('comment_content').notNullable()
      table.boolean('comment_approved').defaultTo(false)
      table.integer('comment_like_count').unsigned().defaultTo(0)
      table.string('comment_author_email').notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
