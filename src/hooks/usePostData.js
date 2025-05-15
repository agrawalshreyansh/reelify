import { useState } from "react";
import { postData } from "../services/api"; // Adjust path as needed

const usePostData = (endpoint, withCredentials = false) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const post = async (body) => {
    setIsLoading(true);
    setError(null);

    const res = await postData(endpoint, body, withCredentials);

    if (res.error) setError(res.error);
    else setData(res);

    setIsLoading(false);
  };

  return { data, error, isLoading, postData: post };
};

export default usePostData;
