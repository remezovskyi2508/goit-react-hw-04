import axios from 'axios';
import { useEffect, useState } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import css from './ImageGallery.module.css';

export default function ImageGallery({ query }) {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const params = {
    client_id: 'KTgPCjIl5bHSKS3rJgiOFvqns88NWiKXgvLhb7v-WzM',
    per_page: 15,
    page: 1,
    orientation: 'landscape',
    query: query,
  };

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const { data } = await axios.get(
          `https://api.unsplash.com/search/photos/?client_id=${params.client_id}&orientation=${params.orientation}&page=${params.page}&per_page=${params.per_page}&query=${params.query}`
        );
        setImages(data.results);
      } catch (error) {
        setIsError(true);
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) {
      setImages(null);
      fetchImages();
    }
  }, [query]);
  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ul className={css.gallery}>
        {images !== null &&
          images.map(image => (
            <li className={css.galleryList} key={image.id}>
              <ImageCard image={image} />
            </li>
          ))}
      </ul>
    </>
  );
}
