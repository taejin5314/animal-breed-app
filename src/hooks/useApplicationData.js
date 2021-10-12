import { useEffect, useState } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [data, setData] = useState({})

  const apiFetch = async (url) => {
    const response = await axios.get(url);
    return setData(response.data);
  }

  useEffect(() => {
    apiFetch("https://dog.ceo/api/breeds/list/all")
  }, [])

  return {
    data
  };
}