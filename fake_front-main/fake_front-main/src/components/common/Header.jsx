import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../redux/slices/appSlice';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.app.isDarkMode);

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="text-xl font-bold">Deepfake Detector</Link>
        <div className="space-x-4">
          <Link to="/upload">Upload</Link>
          <Link to="/verify">Verify Link</Link>
          <button
            onClick={() => dispatch(toggleDarkMode())}
            className="p-2 rounded-full bg-gray-700"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;