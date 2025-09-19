import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";

const Video = () => {
  const { id } = useParams();

  return (
    <Layout>
      <div className="p-6 flex">
        {/* Main video */}
        <div className="flex-1 mr-6">
          <div className="h-96 bg-gray-700 mb-4 rounded"></div>
          <h2 className="text-xl font-bold mb-2">
            Blind Woodturner: Turning passion into fine art
          </h2>
          <p className="text-gray-400 mb-4">576,969 views • 3 weeks ago</p>
          <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">
            Subscribe
          </button>
        </div>

        {/* Suggested videos */}
        <div className="w-72 space-y-3">
          {[1, 2, 3, 4, 5].map((vid) => (
            <Link key={vid} to={`/video/${vid}`}>
              <div className="flex items-center space-x-3 bg-gray-800 p-2 rounded hover:bg-gray-700">
                <div className="w-24 h-16 bg-gray-600 rounded"></div>
                <div>
                  <p className="font-bold text-sm">Suggested Video {vid}</p>
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
