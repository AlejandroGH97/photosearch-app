import PropTypes from 'prop-types';
import './PhotoCard.css';

function PhotoCard({ photo }) {
  return (
    <div className="photo-card">
      <div className="photo-image-container">
        <img src={photo.url} alt={photo.description} />
        <div className="photo-info-overlay">
          <div className="photo-data">
            <div>
              By <strong>{photo.user}</strong>
            </div>
            <div>{new Date(photo.date).toDateString()}</div>
          </div>
          <div className="photo-tags">
            {photo.tags?.slice(0, 3).map((tag) => (
              <div className="tag" title={tag} key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

PhotoCard.propTypes = {
  photo: PropTypes.shape({
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
    user: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default PhotoCard;
