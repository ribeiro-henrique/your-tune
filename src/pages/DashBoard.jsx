import NavBar from "../components/NavBar";
import { useState } from 'react';
import '../styles/DashBoard.css';
import photo from '../assets/img-music2.jpg';
import Loading from "../components/Loading";

export default function DashBoard() {
  const [busca, setBusca] = useState('');
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar o carregamento

  const url = `https://itunes.apple.com/search?entity=album&term=${busca}&attribute=allArtistTerm`;

  const handleBusca = ({ target }) => {
    setBusca(target.value);
  };

  const fetchData = async () => {
    setIsLoading(true); // Ative o estado de carregamento
    const response = await fetch(url);
    const data = await response.json();
    setTimeout(() => {
      setIsLoading(false);
      setResult(data.results);
    }, 1000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await fetchData();
    setResult(data);
  };

  return (
    <>
      <NavBar />
      <div className="ajustes-finais">
        <form onSubmit={handleSubmit}>
          <input value={busca} onChange={handleBusca} placeholder="Buscar Artista" />
          <button type="submit">Buscar</button>
        </form>
      </div>
      {isLoading ? (
        <Loading /> // Renderize o componente de Loading enquanto a busca está em andamento
      ) : (
        <div className="album-container">
          {
            result.length > 0 ? result.map((e) => (
              <div key={e.collectionId} className="card">
                <div className="img-holder">
                  <img
                    src={e.artworkUrl100.replaceAll('100x100bb', '200x200bb')}
                    alt={e.collectionName}
                  />
                </div>
                <div className="text">
                  <h2>{e.collectionName}</h2>
                  <p>{e.primaryGenreName}</p>
                  <p>{e.copyright}</p>
                </div>
                <div className="play-icon">
                  <div className="circle">
                    <div className="triangle"></div>
                  </div>
                </div>
              </div>
            )) : 
            <div>
              <img src={photo} alt="" />
            </div>
          }
        </div>
      )}
    </>
  );
}
