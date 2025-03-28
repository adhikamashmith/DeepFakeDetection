import React from 'react';
import Button from '../common/Buttons';

// const ContentAccuracyResults = ({ results }) => {
//   const { accuracyScore, credibility, analysis } = results;

//   const handleShare = () => {
//     const shareText = `Content Accuracy Score: ${accuracyScore}%\nAnalysis: ${analysis}`;
//     navigator.clipboard.writeText(shareText);
//     alert('Results copied to clipboard!');
//   };

//   return (
//     <div className="p-6 max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow">
//       <h2 className="text-2xl font-bold mb-4 dark:text-white">Content Accuracy Results</h2>
      
//       <div className="mb-6">
//         <div className="relative pt-1">
//           <div className="flex mb-2 items-center justify-between">
//             <span className="text-sm font-semibold dark:text-white">Accuracy Score</span>
//             <span className="text-sm font-semibold dark:text-white">{accuracyScore}%</span>
//           </div>
//           <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
//             <div
//               style={{ width: `${accuracyScore}%` }}
//               className="bg-blue-500 transition-all duration-500"
//             ></div>
//           </div>
//         </div>
//       </div>

//       <div className="mb-4">
//         <h3 className="font-semibold dark:text-white">Source Credibility</h3>
//         {credibility.map((source, index) => (
//           <div key={index} className="text-sm text-gray-600 dark:text-gray-300">
//             {source.source}: {source.reliability}%
//           </div>
//         ))}
//       </div>

//       <div className="mb-4">
//         <p className="text-sm text-gray-600 dark:text-gray-300">{analysis}</p>
//       </div>

//       <Button onClick={handleShare}>Share Results</Button>
//     </div>
//   );
// };

// export default ContentAccuracyResults;

const ContentAccuracyResults = ({ results }) => {
  // ✅ Extract fields safely
  const { score, response, accuracyScore = 0, credibility = {}, analysis = "" } = results;

  const handleShare = () => {
    const shareText = `Content Accuracy Score: ${accuracyScore}%\nAnalysis: ${analysis || response}`;
    navigator.clipboard.writeText(shareText);
    alert("Results copied to clipboard!");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Content Accuracy Results</h2>

      {/* ✅ Handle missing accuracyScore */}
      <div className="mb-6">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <span className="text-sm font-semibold dark:text-white">Accuracy Score</span>
            <span className="text-sm font-semibold dark:text-white">{accuracyScore || score}%</span>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: `${accuracyScore || score}%` }}
              className="bg-blue-500 transition-all duration-500"
            ></div>
          </div>
        </div>
      </div>

      {/* ✅ Iterate over `credibility` object properly */}
      {Object.keys(credibility).length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold dark:text-white">Source Credibility</h3>
          {Object.entries(credibility).map(([source, reliability], index) => (
            <div key={index} className="text-sm text-gray-600 dark:text-gray-300">
              {source}: {reliability}%
            </div>
          ))}
        </div>
      )}

      {/* ✅ Show analysis or response */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">{analysis || response}</p>
      </div>

      <Button onClick={handleShare}>Share Results</Button>
    </div>
  );
};

export default ContentAccuracyResults;
