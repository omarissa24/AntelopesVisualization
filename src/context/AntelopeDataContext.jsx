import { createContext, useContext, useEffect, useState } from "react";

const AntelopeDataContext = createContext();

const AntelopeDataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_ANTELOPES_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [data]);

  return (
    <AntelopeDataContext.Provider value={{ data, loading, error }}>
      {children}
    </AntelopeDataContext.Provider>
  );
};

const useAntelopeData = () => {
  return useContext(AntelopeDataContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { AntelopeDataProvider, useAntelopeData };
