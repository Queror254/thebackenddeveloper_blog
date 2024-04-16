 //@ts-nocheck
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import Application from '@ioc:Adonis/Core/Application'
import slugify from 'slugify'

export default class BlogController {
  public async index({response}: HttpContextContract) {
        const posts = await Post.all()
        console.log("Retrieving the blog posts ")
        return response.status(200).json(posts);
  }

public async create({ request, response }: HttpContextContract) {
  try {
    // Extracting required data from the request
    const { post_id, post_date, post_category, post_title, post_content } = request.only(['post_id', 'post_date', 'post_category', 'post_title', 'post_content'])

    // Generate post_slug from post_title
    const post_slug = slugify(post_title, { lower: true })

    // Handle file upload separately
    const post_image = request.file('post_image')

    // Check if an image was uploaded
    if (post_image) {
      // Save the image to a storage location (e.g., disk or cloud storage)
      await post_image.move(Application.tmpPath('../../client/public/uploads'), {
        name: `${new Date().getTime()}.${post_image.extname}`,
        overwrite: true
      })

      // Check if the image move was successful
      if (!post_image.isValid) {
        throw new Error(post_image.errors[0].message)
      }

      // Get the file path or URL of the uploaded image
      const imagePath = post_image.filePath // Adjust this based on your storage location
      console.log('imagePath', imagePath);

      const fileName = post_image.fileName;
      console.log('filename', fileName);

      // Create a new post record with the image path
      await Post.create({
        post_id,
        post_date,
        post_category,
        post_title,
        post_slug,
        post_image: fileName, // Save the image path in the database
        post_content
      })
    } else {
      // Handle case when no image was uploaded
      throw new Error('No image uploaded')
    }

    // Redirect back with success message
    return response.redirect().toPath('/posts')
  } catch (error) {
    // Handle any errors that occur during file move or project creation
    console.error(error)
    return { error }
  }
}


  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
