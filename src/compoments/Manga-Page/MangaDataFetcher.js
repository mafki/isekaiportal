import  {  useEffect } from "react";
import MangaDataApi from './MangaDataApi';

function MangaDataFetcher({ onDataFetched }) {
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await MangaDataApi();
        onDataFetched(fetchedData);
      } catch (error) {
        // Handle error if needed
      }
    }
    fetchData();
  }, [onDataFetched]);

  return null; // No need to render anything in this component
}

export default MangaDataFetcher;
