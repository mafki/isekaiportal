import  {  useEffect } from "react";
import AnimeDataApi from './AnimeDataApi';

function AnimeDataFetcher({ onDataFetched }) {
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await AnimeDataApi();
        onDataFetched(fetchedData);
      } catch (error) {
        // Handle error if needed
      }
    }
    fetchData();
  }, [onDataFetched]);

  return null; // No need to render anything in this component
}

export default AnimeDataFetcher;
