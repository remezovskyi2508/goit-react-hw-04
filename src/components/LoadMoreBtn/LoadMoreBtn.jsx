import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn() {
  return (
    <>
      <button type="button">Load more</button>
    </>
  );
}

useEffect(() =>{
    const fetchImages = async() =>{
        const {data} = await axios.get('https://api.unsplash.com/photos/?client_id={key}')
    }
})