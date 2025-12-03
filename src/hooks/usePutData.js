import { useState } from "react";
import { putData } from "../services/api"; // Adjust path as needed

const usePutData = (endpoint, withCredentials = false) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const put = async (body) => {
    setIsLoading(true);
    setError(null);

    const res = await putData(endpoint, body, withCredentials);

    if (res.error) setError(res.error);
    else setData(res);

    setIsLoading(false);
  };

  return { data, error, isLoading, putData: put };
};

export default usePutData;