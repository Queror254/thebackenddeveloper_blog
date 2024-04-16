import { DateTime } from 'luxon'
import { BaseModel, column} from '@ioc:Adonis/Lucid/Orm'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public postId: number

  @column()
  public postDate: string

  @column()
  public postCategory: string

  @column()
  public postTitle: string

  @column()
  public postSlug: string

  @column()
  public postImage: string

  @column()
  public postContent: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
