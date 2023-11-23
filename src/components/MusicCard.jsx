import PropTypes from 'prop-types';
import '../styles/MusicCard.css';

export default function MusicCard({ trackName, previewUrl }) {

  return (
    <div className="music-card">
      <h4>{trackName}</h4>
      <audio src={previewUrl} controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento <code>audio</code>.
      </audio>
    </div>
  );
}

MusicCard.propTypes = {
  trackName: PropTypes.string,
  previewUrl: PropTypes.string,
  trackId: PropTypes.string,
}.isRequired;


