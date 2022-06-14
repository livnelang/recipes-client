import { useState, useEffect } from "react";

const HEADERS = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const useFetch = <T>(url: string) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [data, setData] = useState<T | null>(null);

  // empty array as second argument equivalent to componentDidMount
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(BASE_URL + url, HEADERS);
      const json = await response.json();
      setData(json);
    }

    if (data === null) {
      fetchData();
    }
  }, [BASE_URL, data, url]);

  return data;
};

export default useFetch;
