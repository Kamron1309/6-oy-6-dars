import { useState } from 'react';
import { useParams, Link } from "react-router-dom";

// Layout komponentini yaratamiz (alohida fayl o'rniga shu yerda)
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sarlavha */}
      <header className="bg-white shadow-sm py-3 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <button className="mr-4 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            <span className="ml-1 font-bold text-xl">YouTube</span>
          </div>
        </div>
        
        <div className="flex-1 mx-8">
          <div className="relative max-w-xl">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full py-2 px-4 bg-gray-100 rounded-l-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button className="absolute right-0 top-0 h-full bg-gray-100 rounded-r-full px-4 border border-l-0 border-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex items-center">
          <button className="p-2 rounded-full hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <button className="ml-4 p-1 rounded-full border border-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white h-screen sticky top-0 overflow-y-auto">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link to="/" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <a href="#explore" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Explore</span>
                </a>
              </li>
              <li>
                <a href="#subscriptions" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span>Subscriptions</span>
                </a>
              </li>
            </ul>
            
            <hr className="my-4" />
            
            <ul className="space-y-2">
              <li>
                <a href="#library" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                  <span>Library</span>
                </a>
              </li>
              <li>
                <a href="#history" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>History</span>
                </a>
              </li>
              <li>
                <a href="#your-videos" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Your Videos</span>
                </a>
              </li>
              <li>
                <a href="#watch-later" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Watch Later</span>
                </a>
              </li>
              <li>
                <a href="#liked-videos" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  <span>Liked Videos</span>
                </a>
              </li>
            </ul>
            
            <hr className="my-4" />
            
            <h3 className="font-bold px-4 py-2">SUBSCRIPTIONS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#marcus" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
                  <div className="h-6 w-6 rounded-full bg-red-400 mr-4"></div>
                  <span>Marcus Levin</span>
                </a>
              </li>
              <li>
                <a href="#tech" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
                  <div className="h-6 w-6 rounded-full bg-blue-400 mr-4"></div>
                  <span>Tech Channel</span>
                </a>
              </li>
              <li>
                <a href="#music" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
                  <div className="h-6 w-6 rounded-full bg-green-400 mr-4"></div>
                  <span>Music Channel</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

// Video Component
const Video = () => {
  const { id } = useParams();

  return (
    <Layout>
      <div className="p-6 flex flex-col lg:flex-row">
        {/* Main video */}
        <div className="flex-1 lg:mr-6 mb-6 lg:mb-0">
          <div className="h-72 lg:h-96 bg-gray-700 mb-4 rounded-lg"></div>
          <h2 className="text-xl font-bold mb-2">
            Blind Woodturner: Turning passion into fine art
          </h2>
          <p className="text-gray-600 mb-4">576,969 views • 3 weeks ago</p>
          
          {/* Channel info */}
          <div className="flex items-center mb-6">
            <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
            <div className="flex-1">
              <h3 className="font-bold">Marcus Levin</h3>
              <p className="text-sm text-gray-600">1.2M subscribers</p>
            </div>
            <button className="bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 text-white">
              Subscribe
            </button>
          </div>
          
          {/* Video description */}
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <p className="mb-2">
              Chris Fisher, also known as the <strong>Blind Woodturner</strong>, learned his craft by listening to hundreds of hours of YouTube videos and experimenting in his workshop. Now he's a YouTube creator himself, sells his products worldwide, and does demonstrations all around the country.
            </p>
            <button className="text-blue-600 font-medium">SHOW MORE</button>
          </div>
          
          {/* Comments section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Comments • 243</h3>
            
            <div className="flex mb-6">
              <div className="h-10 w-10 rounded-full bg-gray-300 mr-3"></div>
              <div className="flex-1">
                <input 
                  type="text" 
                  placeholder="Add a public comment..." 
                  className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            
            {/* Comment list */}
            <div className="space-y-4">
              <div className="flex">
                <div className="h-10 w-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <h4 className="font-semibold">James Gosse <span className="text-gray-600 text-sm font-normal">• 6 hours ago</span></h4>
                  <p className="mt-1">Wow, world is full of different skills</p>
                  <div className="flex items-center mt-2">
                    <button className="text-gray-600 flex items-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      243
                    </button>
                    <button className="text-gray-600">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="h-10 w-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <h4 className="font-semibold">Alan Cooper <span className="text-gray-600 text-sm font-normal">• 4 days ago</span></h4>
                  <p className="mt-1">Can you provide a list of the tools you use?</p>
                  <div className="flex items-center mt-2">
                    <button className="text-gray-600 flex items-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      156
                    </button>
                    <button className="text-gray-600">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Suggested videos */}
        <div className="lg:w-72 space-y-4">
          <h3 className="font-bold text-lg">Suggested Videos</h3>
          {[1, 2, 3, 4, 5].map((vid) => (
            <Link key={vid} to={`/video/${vid}`}>
              <div className="flex items-start space-x-3 bg-white p-2 rounded-lg hover:bg-gray-100">
                <div className="w-40 h-24 bg-gray-600 rounded-lg flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-sm mb-1 line-clamp-2">Suggested Video Title {vid} - Woodturning Tutorial</p>
                  <p className="text-gray-600 text-xs">Marcus Levin</p>
                  <p className="text-gray-600 text-xs">1M views • 3 years ago</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Video;