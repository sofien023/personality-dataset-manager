export default function Dashboard() {
    return (
      <div className="bg-gray-100 h-screen p-[10%] text-gray-800 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">📊 Analytics</div>
          <div className="bg-white p-6 rounded shadow">📁 Projects</div>
          <div className="bg-white p-6 rounded shadow">📬 Messages</div>
        </div>
      </div>
    );
  }