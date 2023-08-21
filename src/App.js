import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const apiKeys = [
        'OisYdUJ8T2Ike0Aw3EJ9mQbdDOdo8vC8',
        'SZqJWWOlCltOdUSUy1WKXl4VvwzHBlno',
        'PukEAHWU5ges00LFrs8ZbtQuscEIBS59',
        '2qwS0KyQJwEDBF3mQYVxQ4527nml4XEp',
        'F8T1tpoMOwBk2J8N4RJeQNNG9kh7eRvI',
        'WFILObOa0xwdAdZmTNeHNqeYsKf213c1',
        'ZX2vksWzMIIZhwPrFEqjc6SZY0mjYxRf',
        '1HI7yUh5twxDW9vUUh289rQK57Kv3zeS',
        '8VIqMCXyYG1t3O001q07nl2BOHOwU5dx',
      ];

      const searchTerms = ['dog', 'rat', 'cat', 'house', 'tree'];

      const imagesFromApi = [];

      for (const apiKey of apiKeys) {
        for (const searchTerm of searchTerms) {
        try {
          const response = await axios.get(
            'https://api.giphy.com/v1/stickers/search',
            {
              params: {
                api_key: apiKey,
                q: searchTerm,
                limit: 2,
              },
            }
          );

          imagesFromApi.push(...response.data.data);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      }
    }

    setImages(imagesFromApi);
  }

  fetchImages();
}, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Giphy Trending By <br></br>Willian Andreas</h1>
        <div className="image-container">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.images.fixed_height.url}
              alt={image.title}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
