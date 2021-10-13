import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { setInitialRank } from "../reducers";
import axios from "axios";

export default function useApplicationData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  // fetch api from the link when the component is mounted
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        setError(null);
        setData(null);
        setLoading(true);

        const response = await axios.get('https://dog.ceo/api/breeds/list/all');

        setData(response.data);
        dispatch(setInitialRank(response.data.message))
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchAPI();
  }, [])

  return {
    data,
    loading,
    error
  };
}