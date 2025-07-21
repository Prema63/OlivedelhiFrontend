import React from 'react';

const Loadings = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        <div
          className="w-8 h-8 border-4 border-gray-300 rounded-full animate-spin"
          style={{ borderTopColor: '#3f3f3f' }}
        ></div>

      </div>
    </div>
  );
};

export default Loadings;
