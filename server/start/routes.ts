import Route from '@ioc:Adonis/Core/Route'

//routes




//Blog post routes

//fetch post from db
Route.get('/posts', 'BlogController.index')

//create
Route.post('/create', 'BlogController.create');

//open the details page : 
Route.get('/details/:slug', 'BlogController.more')


