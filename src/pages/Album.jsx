import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Loading from "../components/Loading";
import MusicCard from "../components/MusicCard";
import '../styles/Album.css';


export default function Album() {
  const [isLoading, setIsLoading] = useState(false);
  const [album, setAlbum] = useState([]);
  const [songs, setSongs] = useState([]);

  console.log(songs);

  const { id } = useParams();

  const url = `https://itunes.apple.com/lookup?id=${id}&entity=song`;

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();

    setTimeout(() => {
      setIsLoading(false);
      setAlbum(data.results[0]);
      setSongs(data.results);
    }, 1000);

  };

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <>
      <div>
        <NavBar />
        <div className="album-details">
        <h2>{album.artistName}</h2>
        {album.artworkUrl100 && (
          <img
            src={album.artworkUrl100.replaceAll('100x100bb', '200x200bb')}
            alt={album.artistName}
          />
        )}
        <h3>{album.collectionName}</h3>
      </div>
      <div className="adjust-container">
        <div className="songs-container">
        {
          isLoading ? <Loading/> : (
            <div>
              { songs.slice(1).map((music) => (
                <div key={ music.trackId }> 
                  <MusicCard
                    trackName={ music.trackName }
                    previewUrl={ music.previewUrl }
                    trackId={ music.trackId }
                  />
                </div>
              )) }
            </div>
          )
        }
        </div>  
      </div>
      </div>
    </>
  );
}
