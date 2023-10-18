import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/Login.css';
import { MyContext } from '../context/Context';

export default function Login() {
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  const myContext = useContext(MyContext);

  const handleUser = ({ target }) => {
    setUser(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    myContext.setUser(user);
    navigate('/dashboard');
  };

  return (
    <div id="form" className="login-container">
      <div id="form-body">
        <div id="welcome-lines">
          <div id="welcome-line-1">Bem-vindo</div>
          <div id="welcome-line-2">Faça login para continuar</div>
        </div>
        <form onSubmit={handleSubmit} id="input-area">
          <div className="form-inp">
            <input value={user} onChange={handleUser} placeholder="Usuário" />
          </div>
          <div id="submit-button-cvr">
            <button id="submit-button" type="submit" disabled={user.length < 3}>
              Entrar
            </button>
          </div>
        </form>
        <div id="forgot-pass">
          <a href="/">Esqueceu a senha?</a>
        </div>
      </div>
    </div>
  );
}
