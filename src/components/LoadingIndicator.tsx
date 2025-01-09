import React from 'react';

    const LoadingIndicator = () => {
      return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-200"></div>
        </div>
      );
    };

    export default LoadingIndicator;
