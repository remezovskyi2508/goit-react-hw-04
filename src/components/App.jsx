import { useState } from 'react';
import '../components/App.css';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';

function App() {
  const [searchTopic, setSearchTopic] = useState('');
  const handleSearchSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchValue = form.elements.searchInput.value.trim();
    setSearchTopic(searchValue);
    form.reset();
  };
  return (
    <>
      <SearchBar onSearchSubmit={handleSearchSubmit} />
      <ImageGallery query={searchTopic} />
    </>
  );
}

export default App;
