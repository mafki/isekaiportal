function ReAnime(d) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('https://isekaiportalapi.onrender.com/get', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: d }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('JSON data fetched and updated in variable', data);
      resolve(data); // Resolve the promise with the fetched data
    } catch (error) {
      console.error('Anime error here:', error);
      reject(error); // Reject the promise with the error
    }
  });
}

export default ReAnime;

  