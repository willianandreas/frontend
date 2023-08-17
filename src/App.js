import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Função assíncrona para buscar as imagens estáticas da API do Giphy
    async function fetchImages() {
      try {
        const response = await axios.get(
          'https://api.giphy.com/v1/stickers/search', // Endpoint para buscar imagens estáticas (stickers)
          {
            params: {
              api_key: 'OisYdUJ8T2Ike0Aw3EJ9mQbdDOdo8vC8',
              q: 'icecream', // Termo de pesquisa para buscar stickers relacionados a cachorros
              limit: 1, // Defina o número de imagens que deseja buscar
            },
          }
        );
        setImages(response.data.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }

    fetchImages(); // Chame a função de busca quando o componente for montado
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Giphy Trending Dog Stickers</h1>
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
