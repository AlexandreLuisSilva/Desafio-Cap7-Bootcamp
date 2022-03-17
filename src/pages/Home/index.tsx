import './styles.css';
import MainImage from 'assets/images/car-header.png';
import ButtonText from '../../components/ButtonText';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="hcard-content">
          <div className="hcard-content-text">
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
        <div className="hcard-content-img">
          <img src={MainImage} alt="Carro Exemplo" />
        </div>
      </div>
      <div className="home-button-container">
        <div className="hbtn">
          <Link to="/products">
            <ButtonText text={'VER CATÁLOGO'} />
          </Link>
        </div>
        <div className="hbtn-text">
          <p>Começe agora a navegar</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
