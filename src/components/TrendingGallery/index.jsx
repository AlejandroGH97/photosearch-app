import PhotoCard from '../PhotoCard';
import { useEffect, useState } from 'react';

function TrendingGallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.unsplash.com/photos/random?count=10&orientation=squarish',
      {
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_TOKEN}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const photoData = data.map((photo) => {
          const {
            user: { first_name: firstName, last_name: lastName },
          } = photo;
          const user = lastName ? `${firstName} ${lastName[0]}` : firstName;

          return {
            id: photo.id,
            url: photo.urls.regular,
            description: photo.alt_description,
            user,
            date: photo.created_at,
          };
        });
        setPhotos(photoData);
      });
  }, []);

  return (
    <>
      <h2>Trending photos right now</h2>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </>
  );
}

export default TrendingGallery;
