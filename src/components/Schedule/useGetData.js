import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetData = () => {
  const [ resources, setResources ] = useState({});
  const [ error, setError ] = useState('');

  useEffect(
    () => {
      (async () => {
        await axios
          .get('https://next.json-generator.com/api/json/get/EyIJsdymu')
          .then(response => setResources(response.data))
          .catch(err => setError(err && err.toJSON().message));
      })();
    }, []
  );

  return {resources, error};
};

export default useGetData;