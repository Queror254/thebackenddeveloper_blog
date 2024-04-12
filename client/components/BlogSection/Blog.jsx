import React from 'react';
import TopBar from '../TopNavigation/TopBar'
import Link from 'next/link'
const Blog = () => {
  return (
<div>
<TopBar />
<div class="flex mt-8 mb-4">
<div class="w-3/4 main_b bg-gray-500 ma-h-screen">
<div className="bg-white py-10 sm:py-10 p-16 sm:pl-16 sm:pr-0">
  <div className="mx-auto max-w-7xl px-6 sm:pl-4 sm:pr-2">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <div className='mb-4 mt-8 font-bold text-gray-900 text-3xl sm:mt-4'>
        <Link href={'/'}>
        Let's Code
        </Link>
      </div>
      {/**filter card */}
      <div className='filter_card flex flex-row flex-wrap justify-around'>
        <div className='bg-gray-400 rounded-full p-2 hover:underline mb-2'>Nodejs</div>
        <div className='bg-gray-400 rounded-full p-2 hover:underline mb-2'>API</div>
        <div className='bg-gray-400 rounded-full p-2 hover:underline mb-2'>Django</div>
        <div className='bg-gray-400 rounded-full p-2 hover:underline mb-2'>AWS</div>
        <div className='bg-gray-400 rounded-full p-2 hover:underline mb-2'>Render</div>
        <div className='bg-gray-400 rounded-full p-2 hover:underline mb-2'>Adonisjs</div>
        <div className='bg-gray-400 rounded-full p-2 hover:underline mb-2'>Redis</div>
        <div className='bg-gray-400 rounded-full p-2 hover:underline mb-2'>Mysql</div>
        <div className='bg-gray-400 rounded-full p-2 hover:underline mb-2'>Mongo DB</div>
        <div className='bg-gray-400 rounded-full p-2 hover:underline mb-2'>Authentication</div>
        <div className='bg-gray-400 rounded-full p-2 hover:underline mb-2'>API rate limiting</div>
        <div className='bg-gray-400 rounded-full p-2 hover:underline mb-2'>Session</div>
        <div className='bg-gray-400 rounded-full p-2 hover:underline mb-2'>Streaming</div>
        <div className='bg-gray-400 rounded-full p-2 hover:underline mb-2'>postgreSQL</div>
      </div>
    </div>
    <div className="mx-auto mt-1 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-2 border-t border-gray-200 pt-10 sm:mt-5 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 overflow-hidden" style={{ overflowY: 'scroll', height:1500,}}>
      <Link href={'/blog_details'}> 
      <article className="flex max-w-xl flex-col items-start justify-between">
        <img class="w-full rounded-md" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3270&amp;q=80" alt="Sunset in the mountains"></img>
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
      </article>
      </Link>

      <Link href={'/blog_details'}>
      <article className="flex max-w-xl flex-col items-start justify-between">
        <img class="w-full" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3603&amp;q=80" alt="Sunset in the mountains"></img>
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
      </article>
      </Link>
  
      <Link href={'/blog_details'}>
      <article className="flex max-w-xl flex-col items-start justify-between">
      <img class="w-full" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3270&amp;q=80" alt="Sunset in the mountains"></img>
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
      </article>
      </Link>

      <Link href={'/blog_details'}>
      <article className="flex max-w-xl flex-col items-start justify-between">
                <img class="w-full" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3270&amp;q=80" alt="Sunset in the mountains"></img>

        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
      </article>
      </Link>

      <Link href={'/blog_details'}>
      <article className="flex max-w-xl flex-col items-start justify-between">
        <img class="w-full" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3603&amp;q=80" alt="Sunset in the mountains"></img>
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
      </article>
      </Link>
  
      <Link href={'/blog_details'}>
      <article className="flex max-w-xl flex-col items-start justify-between">
      <img class="w-full" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3270&amp;q=80" alt="Sunset in the mountains"></img>
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
      </article>
      </Link>

      <Link href={'/blog_details'}> 
      <article className="flex max-w-xl flex-col items-start justify-between">
        <img class="w-full rounded-md" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3270&amp;q=80" alt="Sunset in the mountains"></img>
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
      </article>
      </Link>

      <Link href={'/blog_details'}>
      <article className="flex max-w-xl flex-col items-start justify-between">
        <img class="w-full" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3603&amp;q=80" alt="Sunset in the mountains"></img>
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
      </article>
      </Link>
  
      <Link href={'/blog_details'}>
      <article className="flex max-w-xl flex-col items-start justify-between">
      <img class="w-full" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3270&amp;q=80" alt="Sunset in the mountains"></img>
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
      </article>
      </Link>

      <Link href={'/blog_details'}>
      <article className="flex max-w-xl flex-col items-start justify-between">
                <img class="w-full" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3270&amp;q=80" alt="Sunset in the mountains"></img>

        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
      </article>
      </Link>

      <Link href={'/blog_details'}>
      <article className="flex max-w-xl flex-col items-start justify-between">
        <img class="w-full" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3603&amp;q=80" alt="Sunset in the mountains"></img>
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
      </article>
      </Link>
  
      <Link href={'/blog_details'}>
      <article className="flex max-w-xl flex-col items-start justify-between">
      <img class="w-full" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3270&amp;q=80" alt="Sunset in the mountains"></img>
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
      </article>
      </Link>

      <Link href={'/blog_details'}> 
      <article className="flex max-w-xl flex-col items-start justify-between">
        <img class="w-full rounded-md" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3270&amp;q=80" alt="Sunset in the mountains"></img>
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
      </article>
      </Link>

      <Link href={'/blog_details'}>
      <article className="flex max-w-xl flex-col items-start justify-between">
        <img class="w-full" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3603&amp;q=80" alt="Sunset in the mountains"></img>
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
      </article>
      </Link>
  
      <Link href={'/blog_details'}>
      <article className="flex max-w-xl flex-col items-start justify-between">
      <img class="w-full" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3270&amp;q=80" alt="Sunset in the mountains"></img>
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
      </article>
      </Link>

      <Link href={'/blog_details'}>
      <article className="flex max-w-xl flex-col items-start justify-between">
                <img class="w-full" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3270&amp;q=80" alt="Sunset in the mountains"></img>

        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
      </article>
      </Link>

      <Link href={'/blog_details'}>
      <article className="flex max-w-xl flex-col items-start justify-between">
        <img class="w-full" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3603&amp;q=80" alt="Sunset in the mountains"></img>
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
      </article>
      </Link>
  
      <Link href={'/blog_details'}>
      <article className="flex max-w-xl flex-col items-start justify-between">
      <img class="w-full" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3270&amp;q=80" alt="Sunset in the mountains"></img>
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
      </article>
      </Link>

    </div>
  </div>
</div>
  </div>
  <div class="side_b mbl_hidden border-l bg-white text-slate-900 p-10">
    <div className="top_h bg-white flex flex-col">
      <div className='featured flex flex-col'>
       <div className='font-bold border-b'>Featured Post</div>
      <div className='post flex flex-col mt-2'>
        <div className='post_head flex flex-row'>
          <div className="relative flex flex-row gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-7 w-7 mr-1 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="flex flex-row text-gray-900">
              <a href="#" className='mr-1'>
                <span className="absolute inset-0 text-sm "></span>
                Michael Foster
              </a>
               <a href="#" className="text-gray-600 text-sm hover:underline">App Developer</a>
            </p>
          </div>
        </div>
        </div>
        <div className='post_title'>
          <div className='font-bold'>
            What Is The Amazon “Tipping Point,” Exactly?
          </div>
        </div>
        <time datetime="2020-03-16" className="text-gray-500 text-sm mr-1">Mar 16, 2020</time> 
      </div> 
            <div className='post flex flex-col mt-2'>
        <div className='post_head flex flex-row'>
          <div className="relative flex flex-row gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-7 w-7 mr-1 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="flex flex-row text-gray-900">
              <a href="#" className='mr-1'>
                <span className="absolute inset-0 text-sm "></span>
                Michael Foster
              </a>
               <a href="#" className="text-gray-600 text-sm hover:underline">App Developer</a>
            </p>
          </div>
        </div>
        </div>
        <div className='post_title'>
          <div className='font-bold'>
            What Is The Amazon “Tipping Point,” Exactly?
          </div>
        </div>
        <time datetime="2020-03-16" className="text-gray-500 text-sm mr-1">Mar 16, 2020</time> 
      </div> 
            <div className='post flex flex-col mt-2'>
        <div className='post_head flex flex-row'>
          <div className="relative flex flex-row gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-7 w-7 mr-1 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="flex flex-row text-gray-900">
              <a href="#" className='mr-1'>
                <span className="absolute inset-0 text-sm "></span>
                Michael Foster
              </a>
               <a href="#" className="text-gray-600 text-sm hover:underline">App Developer</a>
            </p>
          </div>
        </div>
        </div>
        <div className='post_title'>
          <div className='font-bold'>
            What Is The Amazon “Tipping Point,” Exactly?
          </div>
        </div>
        <time datetime="2020-03-16" className="text-gray-500 text-sm mr-1">Mar 16, 2020</time> 
      </div> 
            <div className='post flex flex-col mt-2'>
        <div className='post_head flex flex-row'>
          <div className="relative flex flex-row gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-7 w-7 mr-1 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="flex flex-row text-gray-900">
              <a href="#" className='mr-1'>
                <span className="absolute inset-0 text-sm "></span>
                Michael Foster
              </a>
               <a href="#" className="text-gray-600 text-sm hover:underline">App Developer</a>
            </p>
          </div>
        </div>
        </div>
        <div className='post_title'>
          <div className='font-bold'>
            What Is The Amazon “Tipping Point,” Exactly?
          </div>
        </div>
        <time datetime="2020-03-16" className="text-gray-500 text-sm mr-1">Mar 16, 2020</time> 
      </div> 
      </div>
      <div className='topic_categories mt-8 text-slate-900'>
       <div className='font-bold border-b'>Topics</div>
        <ul className='mt-2 flex flex-row flex-wrap justify-around gap-2 cursor-pointer'>
          <li className='bg-gray-400 rounded-full p-2 hover:underline'>Nodejs</li>
          <li className='bg-gray-400 rounded-full p-2 hover:underline'>Api</li>
          <li className='bg-gray-400 rounded-full p-2 hover:underline'>mysql</li>
          <li className='bg-gray-400 rounded-full p-2 hover:underline'>postman</li>
          <li className='bg-gray-400 rounded-full p-2 hover:underline'>Authentication</li>
          <li className='bg-gray-400 rounded-full p-2 hover:underline'>Api</li>
          <li className='bg-gray-400 rounded-full p-2 hover:underline'>mysql</li>
          <li className='bg-gray-400 rounded-full p-2 hover:underline'>postman</li>
          <li className='bg-gray-400 rounded-full p-2 hover:underline'>mysql</li>
          <li className='bg-gray-400 rounded-full p-2 hover:underline'>postman</li>
          <li className='bg-gray-400 rounded-full p-2 hover:underline'>Authentication</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Blog
