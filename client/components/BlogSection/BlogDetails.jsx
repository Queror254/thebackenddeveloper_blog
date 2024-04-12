import React from 'react'
import TopBar from '../TopNavigation/TopBar';

const BlogDetail = () => {

  return (
<div>
<TopBar />
<div class="flex mt-20 mb-40 sm:mt-40">
  <div class="w-1/7 sm:w-1/6 h-12"></div>
  <div class="w-5/7 sm:w-4/6 w-full p-4 flex justify-center items-center mb-40">
  <div className='flex flex-col'>
    <div className='Blog_title font-bold text-3xl sm:text-5xl w-full text-gray-900 mb-8'>How to View Localhost Web Apps on Mobile Browsers</div>
    <div className='writer_details flex flex-row mb-4'>
      <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 mr-2 rounded-full bg-gray-50" />
      <div className="text-sm leading-6 flex flex-col">
            <p className="flex flex-row text-gray-900">
              <a href="#" className='mr-2 font-bold hover:underline'>
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
               <a href="#" className="text-gray-600 text-sm hover:underline">App Developer</a>
            </p>
            <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
      </div>
    </div>
    <div className='blog_img'>
      <img class="w-full rounded-md" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3270&amp;q=80" alt="Sunset in the mountains"/>
    </div>
    <div className='mt-4 post_content text-md sm:text-xl text-gray-800 h-12'>
      <p>
        We are always building a web application that needs to be responsive/optimized for mobile. Viewing the web app post-deployment on mobile is very frustrating.
Yes, of course, we can use chrome inspect tools for viewing our web apps on different mobile screens provided by chrome inspect tools.
But it’s not perfectly emulating an actual mobile browser, sometimes we need to get better clarity on how things are looking on a real device.<br/> <br/>

Here’s a method that I use to make testing on mobile devices extremely easy. These instructions are used for LINUX environment.

Start your application in your machine, go to any browser and enter your localhost URL. Once you have done that now, follow these steps:-
<br/> <br/>
<h2><b>Step 1: Connect your devices to the same network</b></h2><br/>
A little confusing but it is really easy.

IMP:- Make sure that your computer and your mobile device are connected to the same wifi network.
<br/> <br/>
<h2><b>Step 2: Find your local IP address if your computer (IPV4)</b></h2><br/>
There are different ways to find IP address on your machine, to find out the IP address of your desktop:

Type into the command line ipconfig for Windows or ifconfig for Linux.

On Linux, you can directly run this command: ifconfig | grep “inet “ | grep -v 127.0.0.1

For Windows, you can find the IP address by visiting Control Panel. In the search box, search for “adapter”. Click on View Network Connections. Select the active network connection and click View status of this connection. Click Details and the IP address should be found next to IPv4 Address.

For Mac, open the Network Utility. You can find this quickly with Spotlight by typing cmd + space and then start typing “Network”. With Network Utility open, your IP address can be found next to the label IP Address.
<br/> <br/>
<h2><b>Step 3: Get the port number</b></h2><br/>
On your dev machine, serve your application in whatever way you usually do that serves it over a localhost address.

Note down the port number, on which your web application is running.


React App
Once you are able to view your app locally on your computer via localhost, you can move to the final step:-
<br/> <br/>
<h2><b>Step 4: Open your mobile browser</b></h2><br/>
Using your mobile browser, navigate to the IP address we found on our desktop and the port number where your application is running
<br/>
<em><b>http://(Local IP Address):port number</b></em><br/>

For ex- If your application is running on localhost:8080 and your IP address is like <b>123.12.11.110</b>, then on mobile, we navigate to <b><em>123.12.11.110:8080 </em></b> 

And that’s it!<br/> <br/>
You should now be viewing your app on your mobile device. Set it up right next to your main monitor, because it will reload every time your localhost reloads, so it will be perfectly in sync with the locally served desktop web application.

You don’t get any front-end dev tools with this experience, but you do get an early warning if things look or behave differently on a native browser’s experience.
      </p>
    </div>
    </div>
  </div>
  <div class="w-1/7 sm:w-1/6 h-12"></div>
</div>
</div>
  )
}

export default BlogDetail;
