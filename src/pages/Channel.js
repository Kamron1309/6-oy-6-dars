import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";

const Channel = () => {
  const { id } = useParams();

  return (
    <Layout>
      <div className="p-6">
        {/* Channel header */}
        <div className="bg-gray-800 h-40 rounded mb-6"></div>
        <h1 className="text-2xl font-bold mb-2">Channel {id}</h1>
        <p className="text-gray-400 mb-6">1.2M subscribers</p>

        {/* Videos grid */}
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5].map((vid) => (
            <Link key={vid} to={`/video/${vid}`}>
              <div className="bg-gray-800 p-3 rounded hover:bg-gray-700">
                <div className="h-32 bg-gray-600 mb-2 rounded"></div>
                <p className="font-bold">Video {vid}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Channel;
