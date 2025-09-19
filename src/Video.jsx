import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";

const Video = () => {
  const { id } = useParams();

  // Odatda video ma'lumotlari API dan olinadi, lekin hozir misol uchun
  const videoData = {
    title: "Blind Woodturner: Turning passion into fine art",
    views: "576,969",
    date: "3 weeks ago",
    suggestions: [1, 2, 3, 4, 5]
  };

  return (
    <Layout>
      <div className="p-6 flex flex-col md:flex-row">
        {/* Main video */}
        <div className="flex-1 md:mr-6 mb-6 md:mb-0">
          <div className="aspect-video bg-gray-700 mb-4 rounded-lg">
            {/* Video pleyer joylashuvi */}
            <div className="w-full h-full flex items-center justify-center text-white">
              Video ID: {id}
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">
            {videoData.title}
          </h2>
          <p className="text-gray-400 mb-4">{videoData.views} views • {videoData.date}</p>
          <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-colors">
            Subscribe
          </button>
        </div>

        {/* Suggested videos */}
        <div className="md:w-72 space-y-3">
          {videoData.suggestions.map((vid) => (
            <Link key={vid} to={`/video/${vid}`}>
              <div className="flex items-center space-x-3 bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="w-24 h-16 bg-gray-600 rounded flex-shrink-0"></div>
                <div className="min-w-0">
                  <p className="font-bold text-sm truncate">Suggested Video {vid}</p>
                  <p className="text-gray-400 text-xs">1M views</p>
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