import React from 'react';

const ProfileSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-card p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Profile Section</h2>
        <a href="#" className="text-red-600 hover:text-red-700 font-medium">Edit Profile</a>
      </div>

      <div className="flex items-center space-x-4">
        {/* Avatar */}
        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-gray-600 text-xl font-semibold">AJ</span>
        </div>

        {/* User Info */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">Alex Johnson</h3>
          <div className="flex items-center space-x-2 mt-1">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              SUPER ADMIN
            </span>
          </div>
          <p className="text-gray-600 text-sm mt-2">alex.j@company.com</p>
        </div>
      </div>

      {/* Additional Profile Info */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Department</p>
            <p className="font-medium text-gray-900">IT Support</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-medium text-gray-900">San Francisco, CA</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Join Date</p>
            <p className="font-medium text-gray-900">March 15, 2021</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Status</p>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium text-gray-900">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
