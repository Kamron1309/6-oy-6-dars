import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="flex bg-black text-white min-h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-900 text-white p-4">
        <h1 className="text-red-500 font-bold text-xl mb-6">YouTube</h1>
        <nav className="space-y-3 flex flex-col">
          <Link to="/">🏠 Home</Link>
          <Link to="/channel/1">📺 Channel</Link>
          <Link to="/video/1">▶ Video</Link>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
