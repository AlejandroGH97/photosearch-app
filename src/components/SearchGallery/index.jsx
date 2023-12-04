import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PhotoCard from '../PhotoCard';

function SearchGallery({ setTagInput }) {
  const { tagName } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setTagInput(tagName);
    fetch(
      `https://api.unsplash.com/search/photos?query=${tagName}&per_page=10&orientation=squarish`,
      {
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_TOKEN}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const photoData = data.results.map((photo) => {
          const {
            user: { first_name: firstName, last_name: lastName },
          } = photo;
          const user = lastName ? `${firstName} ${lastName[0]}` : firstName;
          const tags = photo.tags.map((tag) => tag.title);

          return {
            id: photo.id,
            url: photo.urls.regular,
            description: photo.alt_description,
            user,
            date: photo.created_at,
            tags,
          };
        });
        setPhotos(photoData);
      });
  }, [tagName, setTagInput]);

  return (
    <>
      <h2>Results</h2>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </>
  );
}

SearchGallery.propTypes = {
  setTagInput: PropTypes.func,
};

export default SearchGallery;
