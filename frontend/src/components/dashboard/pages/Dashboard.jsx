import Histogram from "../graphs/Histogram";
import PieChart from "../graphs/PieChart";

export default function Dashboard() {
    return (
      <div className="inset-0 p-[3rem] text-gray-800 overflow-auto bg-white">
        <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
        <div className="w-full">
          <div
            className="p-[0.5rem] bg-[#f0f0f0] rounded-lg shadow-md flex flex-col justify-center items-center w-full"
            style={{
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              borderRadius: '8px',
              backgroundColor: '#f0f0f0',
              display: 'inline-flex',
              width: '100%',
              minWidth: '100%',
              marginBottom: '1rem',
            }}
          >
            <h2 className="text-xl font-semibold mb-2">
            <select>
              <option value="time_spent_alone">Time spent alone</option>
              <option value="social_event_attendance">Social Event Attendance</option>
              <option value="post_frequency">Post Frequency</option>
              <option value="going_outside">Going Outside</option>
              <option value="drained_after_socializing">Drained After Socializing</option>
            </select> 
            Histogram</h2>
            <Histogram />
          </div>
          <div className="p-[0.5rem] rounded-lg shadow-md flex flex-col justify-center items-center w-full"
            style={{
              display: 'inline-flex',
              width: '100%',
              maxWidth: '100%',
              marginBottom: '1rem',
            }}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              gap: '1rem',
            }}>
            <div
            className="p-[0.5rem] bg-[#f0f0f0] rounded-lg shadow-md flex flex-col justify-center items-center w-full "
            style={{
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              borderRadius: '8px',
              backgroundColor: '#f0f0f0',
              display: 'inline-flex',
              marginBottom: '1rem',
            }}
          >
            <h2 className="text-xl font-semibold mb-2">Dataset Histogram</h2>
            <PieChart />
            </div>
            
            </div>
          </div>
        </div>
      </div>
    );
  }