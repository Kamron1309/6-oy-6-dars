import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const videos = [
  { id: 1, title: "Video 1", channel: "Marcus Levin" },
  { id: 2, title: "Video 2", channel: "James Gouse" },
  { id: 3, title: "Video 3", channel: "Alan Cooper" },
  { id: 4, title: "Video 4", channel: "Skylar Dias" },
];

const Home = () => {
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4 p-6">
        {videos.map((video) => (
          <Link key={video.id} to={`/video/${video.id}`}>
            <div className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition">
              <div className="h-40 bg-gray-600 mb-2 rounded"></div>
              <h2 className="font-bold">{video.title}</h2>
              <p className="text-gray-400">{video.channel}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
