const BookmarkItem = props => {

  return (
    <li style={{
      borderLeft: props.isFavorite ? '5px solid goldenrod' : '5px solid transparent'
    }}>
      <div>
        <h3>{props.title}</h3>
        <span>{props.category}</span>
      </div>

      <p>
        <a href={props.url} target="_blank" rel="noreferrer">
          {props.url}
        </a>
      </p>

      <div>
        <button
          className={`favorite-button ${props.isFavorite ? 'active' : ''}`}
          onClick={() => props.onToggleFavorite(props.id)}
        >
          {props.isFavorite ? '★ Favorited' : '☆ Favorite'}
        </button>
        <button onClick={() => props.onDelete(props.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default BookmarkItem;