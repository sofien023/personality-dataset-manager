import React from 'react';
import Image from '../../../../public/assets/image.jpg'; // Adjust path if necessary

const data = [
  {
    Time_spent_Alone: 5,
    Stage_fear: 3,
    Social_event_attendance: 2,
    Going_outside: 4,
    Drained_after_socializing: 4,
    Friends_circle_size: 3,
    Post_frequency: 1,
    Personality: 2,
  },
  {
    Time_spent_Alone: 4,
    Stage_fear: 2,
    Social_event_attendance: 3,
    Going_outside: 3,
    Drained_after_socializing: 5,
    Friends_circle_size: 4,
    Post_frequency: 2,
    Personality: 3,
  },
];

const calculateAverages = (dataset) => {
  const keys = Object.keys(dataset[0]);
  const total = dataset.length;

  const averages = {};
  keys.forEach((key) => {
    const sum = dataset.reduce((acc, row) => acc + Number(row[key]), 0);
    averages[key] = (sum / total).toFixed(2);
  });

  return averages;
};

function Profile() {
  const averages = calculateAverages(data);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-50 mt-[0%]">
      <div className="bg-white shadow-2xl rounded-2xl w-full   ">

        {/* Section 1: Personal Info */}
        <div className="flex items-center  m-[6%]">
        <img
            src={Image}
            alt="Profile"
            className="rounded-full w-[9rem] h-[9rem] mr-[2rem] object-cover"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-800">John Doe</h1>
            <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <hr className="border-gray-300" />

        {/* Section 2: Behavioral Metrics */}
        <div className='ml-[10%]'>
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Behavioral Summary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(averages).map(([key, value]) => (
              <div
                key={key}
                className="bg-indigo-50 hover:bg-indigo-100 transition-all duration-200 rounded-xl p-4 shadow-md"
              >
                <p className="text-sm text-gray-500 capitalize">
                  {key.replace(/_/g, ' ')} : {value}
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Profile;
