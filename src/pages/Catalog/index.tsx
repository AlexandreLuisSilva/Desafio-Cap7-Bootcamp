import SearchCard from 'components/SearchCard';
import CarCard from '../../components/CarCard';
import './styles.css';

const Catalog = () => {
  return (
    <div className="cat-content">
      <div className="container ctn-search">
        <SearchCard />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-4 col-xxl-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 col-xxl-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 col-xxl-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 col-xxl-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 col-xxl-4">
            <CarCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
