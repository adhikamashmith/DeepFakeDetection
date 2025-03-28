import React from "react";
import Button from "../common/Buttons";

const DeepfakeResults = ({ results }) => {
  const deepfakeProbability = Number(results.deepfakeProbability); // Ensure it's a number
  const { confidence, detailedAnalysis } = results;

  const getColor = (probability) => {
    if (probability > 75) return "bg-red-500";
    if (probability > 50) return "bg-yellow-500";
    return "bg-green-500";
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(results, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "deepfake_analysis.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Deepfake Analysis Results</h2>

      <div className="mb-6">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <span className="text-sm font-semibold dark:text-white">Deepfake Probability</span>
            <span className="text-sm font-semibold dark:text-white">{(confidence * 100).toFixed(1)}%</span>
          </div>
          {/* Progress bar */}
          <div className="h-2 bg-gray-200 rounded overflow-hidden">
            <div
              className={`${getColor(deepfakeProbability)} h-2 transition-all duration-500`}
              style={{ width: `${(confidence * 100).toFixed(1)}%` }} // Ensure dynamic width update
            ></div>
          </div>
        </div>
      </div>

      <div className="mb-4 mt-4">
        <p className="dark:text-white">Confidence Level: {(confidence * 100).toFixed(1)}%</p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{detailedAnalysis}</p>
      </div>

      <Button onClick={handleDownload}>Download Report</Button>
    </div>
  );
};

export default DeepfakeResults;
