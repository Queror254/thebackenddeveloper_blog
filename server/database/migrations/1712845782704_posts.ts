import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'posts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('post_id')
      table.dateTime('post_date').notNullable()
      table.text('post_content').notNullable()
      table.enum('post_status', ['draft', 'published']).defaultTo('draft')
      table.string('post_type').notNullable()
      table.integer('post_like_count').unsigned().defaultTo(0)
      table.integer('post_comment_count').unsigned().defaultTo(0)
      table.boolean('post_has_article').defaultTo(false)
      table.text('article_title').notNullable()
      table.text('article_content').notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
