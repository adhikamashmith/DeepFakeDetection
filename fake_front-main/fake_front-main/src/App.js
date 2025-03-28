// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider, useSelector } from 'react-redux';
// import Header from './components/common/Header';
// import Home from './pages/Home';
// import Upload from './pages/Upload';
// import Verify from './pages/Verify';
// import './i18n';

// const AppContent = () => {
//   const isDarkMode = useSelector((state) => state.app.isDarkMode);

//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [isDarkMode]);

//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/upload" element={<Upload />} />
//           <Route path="/verify" element={<Verify />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// // const App = () => {
// //   return (
// //     <Provider store={store}>
// //       <AppContent />
// //     </Provider>
// //   );
// // };

// // export default App;



import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Verify from "./pages/Verify";
// import { store } from "./store"; // ✅ Import the Redux store'
import { store } from "./redux/store";
import "./i18n";

const AppContent = () => {
  const isDarkMode = useSelector((state) => state.app.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </div>
    </Router>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
