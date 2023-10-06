import  {  useEffect } from "react";
import RAnimeApi from './RAnimeApi';

function RAnimeFetcher({ onDataFetched }) {
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await RAnimeApi();
        onDataFetched(fetchedData);
      } catch (error) {
        // Handle error if needed
      }
    }
    fetchData();
    
  }, [onDataFetched]);
  
  return null; // No need to render anything in this component
}

export default RAnimeFetcher;