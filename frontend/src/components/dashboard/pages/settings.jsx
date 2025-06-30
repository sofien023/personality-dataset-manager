import React from 'react';

function Settings() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-50 ml-[6%] mb-[0%]">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-4xl p-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Settings</h1>
          <p className="text-lg text-gray-500">
            Manage your preferences and account settings
          </p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-8">

          {/* Account Settings */}
          <section className="bg-indigo-50 hover:bg-indigo-100 transition duration-200 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-2">Account Settings</h2>
            <p className="text-gray-600 mb-4">
              Update your email, password, and personal information.
            </p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
              Edit Account Info
            </button>
          </section>

          {/* Privacy Settings */}
          <section className="bg-indigo-50 hover:bg-indigo-100 transition duration-200 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-2">Privacy Settings</h2>
            <p className="text-gray-600 mb-4">
              Control what information you share and who can see your activity.
            </p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
              Manage Privacy
            </button>
          </section>

          {/* Notification Settings */}
          <section className="bg-indigo-50 hover:bg-indigo-100 transition duration-200 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-2">Notification Settings</h2>
            <p className="text-gray-600 mb-4">
              Choose your notification preferences for email and in-app alerts.
            </p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
              Adjust Notifications
            </button>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Settings;
