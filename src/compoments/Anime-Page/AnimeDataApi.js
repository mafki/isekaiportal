function ApiFetch(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error fetching data anime:', error);
      });
  }
  
  async function AnimeDataApi() {
    try {
      const data = await ApiFetch('https://isekaiportalapi.onrender.com/anime');
      console.log('JSON data fetched and updated in variable', data);
      return data; // Return the fetched data here
    } catch (error) {
      console.error('hey amine error here:', error);
      throw error; // Re-throw the error to handle it elsewhere if needed
    }
   
  };
  
  export default AnimeDataApi;
  
    