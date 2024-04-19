'use client'
import React from 'react';
import Tiptap from '../Tiptap';
const Create = () => {

  return (
    <div className="max-w-md mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">Create a New Blog Post</h1>
      <form action="http://127.0.0.1:3333/create" method="POST" className="space-y-4" encType="multipart/form-data">
        <div>
          <label htmlFor="post_date" className="block text-gray-900">Post Date:</label>
          <input type="text" id="post_date" name="post_date" className="w-full border rounded-md px-3 py-2 text-gray-500" placeholder="20th Jan 2024" required />
        </div>
        <div>
          <label htmlFor="post_title" className="block text-gray-900">Post Title:</label>
          <input type="text" id="post_title" name="post_title" className="w-full border rounded-md px-3 py-2 text-gray-500" placeholder="Welcome to thebackend_developer blog" required />
        </div>
        <div>
          <label htmlFor="image" className="block text-gray-900">Upload Image:</label>
          <input type="file" id="post_image" name="post_image" className="w-full border rounded-md px-3 py-2 text-gray-500" accept="image/*" />
        </div>
        <div>
          <label htmlFor="post_category" className="block text-gray-900">Post Category:</label>
          <input type="text" id="post_category" name="post_category" className="w-full border rounded-md px-3 py-2 text-gray-500" placeholder="Frontend" required />
        </div>

        <div>
          <label htmlFor="post_content" className="block text-gray-900">Post Content:</label>
          <Tiptap />
          {/*<textarea id="post_content" name="post_content" className="w-full border rounded-md px-3 py-2 text-gray-500" rows="5" placeholder="Welcome to my frontend, I'm Preist" required></textarea>*/}
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
