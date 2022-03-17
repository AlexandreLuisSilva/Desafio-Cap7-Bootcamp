import './styles.css';
import CarImg from 'assets/images/car-card.png';
import ButtonText from 'components/ButtonText';

const CarCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={CarImg} alt="Nome do produto" />
      </div>
      <div className="card-mid-container">
        <h6>Audi Supra TT</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
      </div>
      <div className="card-bottom-container">
        <ButtonText text={"COMPRAR"} />
      </div>
    </div>
  );
};

export default CarCard;
