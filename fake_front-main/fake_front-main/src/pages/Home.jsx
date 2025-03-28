import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto pt-20 px-4">
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
            Detect Deepfakes with Confidence
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto dark:text-gray-300">
            Advanced AI-powered platform to identify deepfakes and verify content accuracy
          </p>
          <div className="space-x-4">
            <Link
              to="/upload"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Analyze Video
            </Link>
            <Link
              to="/verify"
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
            >
              Verify Content
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;