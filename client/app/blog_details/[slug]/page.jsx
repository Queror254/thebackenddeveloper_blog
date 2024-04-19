'use client'
import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation';

const BlogDetails = ({params}) => {
  console.log('slug', params.slug)
  const [postData, setPostData] = useState(null);
  const slug = params.slug;

  useEffect(() => {
    const fetchData = async () => {
      console.log('slug:', slug);
      if (!slug) {
        console.log('Error: Slug is missing');
        return;
      }

      try {
        const res = await fetch(`http://127.0.0.1:3333/details/${slug}`);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const fetchedData = await res.json();
        console.log('fetchedData:', fetchedData);
        setPostData(fetchedData);
        console.log('posdData',postData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [slug]);

  if (!postData) {
    return <div className='text-gray-950'>Loading...</div>;
  }


  return (
 <div class="flex mt-20 mb-40 sm:mt-40">
  <div class="w-1/7 sm:w-1/6 h-12"></div>
  <div class="w-5/7 sm:w-4/6 w-full p-4 flex justify-center items-center mb-40">
  {postData.map(post => (
  <div className='flex flex-col'>
    <div className='Blog_title font-bold text-3xl sm:text-5xl w-full text-gray-900 mb-8'>{post.post_title}</div>
    <div className='writer_details flex flex-row mb-4'>
      <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 mr-2 rounded-full bg-gray-50" />
      <div className="text-sm leading-6 flex flex-col">
            <p className="flex flex-row text-gray-900">
              <a href="#" className='mr-2 font-bold hover:underline'>
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
               <a href="#" className="text-gray-600 text-sm hover:underline">{post.post_category}</a>
            </p>
            <time datetime="2020-03-16" className="text-gray-500">{post.post_date}</time>
      </div>
    </div>
    <div className='blog_img'>
      <img class="w-full rounded-md" src={`/uploads/${post.post_image}`} alt="Sunset in the mountains"/>
    </div>
    <div className='mt-4 post_content text-md sm:text-xl text-gray-800 h-12'>
      <p>{post.post_content}</p>
    </div>
  </div>
  ))}
  </div>
  <div class="w-1/7 sm:w-1/6 h-12"></div>
 </div>
  )
}

export default BlogDetails
