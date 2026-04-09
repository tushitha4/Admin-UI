import React from 'react';

const SecuritySettings = () => {
  return (
    <div className="bg-white rounded-lg shadow-card p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Security Settings</h2>

      {/* Password Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-gray-900">Password</h3>
            <p className="text-sm text-gray-500 mt-1">Last changed 3 months ago</p>
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
            Change Password
          </button>
        </div>
      </div>

      {/* Last Login Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-gray-900">Last Login</h3>
            <p className="text-sm text-gray-500 mt-1">October 24, 2023 at 10:15 AM</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">IP: 192.168.1.104</p>
            <p className="text-sm text-gray-600">San Francisco, US</p>
          </div>
        </div>
      </div>

      {/* Two-Factor Authentication Section */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-gray-900">Two-Factor Authentication</h3>
            <p className="text-sm text-gray-500 mt-1">Highly recommended for administrators</p>
          </div>
          <button className="bg-green-100 text-green-800 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors">
            Inactive
          </button>
        </div>
      </div>

      {/* Security Alert */}
      <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
        <div className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-red-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div className="flex-1">
            <p className="text-sm text-red-800">
              Your last login was on October 24, 2023 at 08:42 AM from IP 192.168.1.45. If this wasn't you, please change your password immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
