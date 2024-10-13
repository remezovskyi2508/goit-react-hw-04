import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.btn}>
      <button onClick={onClick} type="button">
        Load more
      </button>
    </div>
  );
}
