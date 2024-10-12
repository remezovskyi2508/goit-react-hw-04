import css from './ImageCard.module.css';

export default function ImageCard({ image }) {
  return (
    <div className={css.wrapper}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}
