import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  ///

  /// Declarations

  const [data, setData] = useState(undefined);
  const [error, setError] = useState(null);

  /// Functions

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => setError(err));
  }, [url]);

  /// Return

  return [data, error];
};
export default useFetch;
