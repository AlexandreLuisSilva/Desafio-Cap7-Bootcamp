import './styles.css';
import ButtonText from 'components/ButtonText';

const SearchCard = () => {
  return (
    <div className="base-card search-card">
      <div className="card-input">
        <input type="email" className="form-control input-my" placeholder="Digite sua busca"/>
      </div>
      <div className="card-button">
        <ButtonText text={"BUSCAR"} />
      </div>
    </div>
  );
};

export default SearchCard;
