// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import LinkVerification from '../components/verification/LinkVerification';
// import ContentAccuracyResults from '../components/results/ContentAccuracyResults';
// import LoadingSpinner from '../components/common/LoadingSpinner';

// const Verify = () => {
//   const [results, setResults] = useState(null);
//   const { isLoading, error } = useSelector((state) => state.app);

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
//       <div className="max-w-6xl mx-auto px-4">
//         <h1 className="text-3xl font-bold mb-6 dark:text-white">Content Accuracy Verification</h1>
        
//         <LinkVerification onResults={setResults} />
        
//         {isLoading && <LoadingSpinner />}
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         {results && <ContentAccuracyResults results={results} />}
//       </div>
//     </div>
//   );
// };

// export default Verify;


// src/pages/Verify.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/common/LoadingSpinner";
import ContentAccuracyResults from "../components/results/ContentAccuracyResults";
// import { Button } from "@/components/ui/button"; // ✅ Import the button component
import Button from "../components/common/Buttons";

const Verify = () => {
  const [input, setInput] = useState(""); // ✅ Store input
  const [results, setResults] = useState(null); // ✅ Store response results
  const [loading, setLoading] = useState(false); // ✅ Show loading
  const [error, setError] = useState(null); // ✅ Store errors
  const { isDarkMode } = useSelector((state) => state.app); // ✅ Redux dark mode state

  const handleSubmit = async () => {
    if (!input.trim()) {
      setError("Input is required");
      return;
    }

    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const response = await fetch("http://localhost:5000/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });

      const data = await response.json();
      console.log(data);
      
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setResults(data); // ✅ Store the results
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex flex-col gap-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text or URL to verify"
          className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white h-32 resize-y"
          aria-label="Text input"
        />
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Verifying..." : "Verify Content"}
        </Button>

        {loading && <LoadingSpinner />}
        {error && <p className="text-red-500">{error}</p>}
        {results && <ContentAccuracyResults results={results} />}
      </div>
    </div>
  );
};

export default Verify;