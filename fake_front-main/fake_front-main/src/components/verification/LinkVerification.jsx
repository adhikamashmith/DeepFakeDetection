// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setLoading, setError } from '../../redux/slices/appSlice';
// import { verifyContent } from '../../utils/api';
// import Button from '../common/Buttons';

// const LinkVerification = ({ onResults }) => {
//   const [url, setUrl] = useState('');
//   const dispatch = useDispatch();

//   const isValidUrl = (urlString) => {
//     try {
//       new URL(urlString);
//       return true;
//     } catch {
//       return false;
//     }
//   };

//   const handleSubmit = async () => {
//     if (!isValidUrl(url)) {
//       dispatch(setError('Please enter a valid URL'));
//       return;
//     }

//     dispatch(setLoading(true));
//     try {
//       const response = await verifyContent(url);
//       onResults(response.data);
//     } catch (error) {
//       dispatch(setError('Error verifying content'));
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };

//   return (
//     <div className="p-6 max-w-2xl mx-auto">
//       <div className="flex flex-col gap-4">
//         <input
//           type="url"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="Enter URL to verify"
//           className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white"
//           aria-label="URL input"
//         />
//         <Button onClick={handleSubmit}>Verify Content</Button>
//       </div>
//     </div>
//   );
// };

// export default LinkVerification;




// src/components/verification/LinkVerification.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading, setError } from '../../redux/slices/appSlice';
import { verifyContent } from '../../utils/api';
import Button from '../common/Button';

const LinkVerification = ({ onResults }) => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (!input.trim()) { // Only check if input is empty
      dispatch(setError('Please enter some text to verify'));
      return;
    }

    dispatch(setLoading(true));
    try {
      const response = await verifyContent(input);
      onResults(response.data);
    } catch (error) {
      dispatch(setError('Error verifying content'));
    } finally {
      dispatch(setLoading(false));
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
        <Button onClick={handleSubmit}>Verify Content</Button>
      </div>
    </div>
  );
};

export default LinkVerification;