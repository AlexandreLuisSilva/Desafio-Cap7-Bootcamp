import './styles.css';

const ButtonText = (props: { text: any }) => {
  return (
    <button className="btn btn-primary">
      <p>{props.text}</p>
    </button>
  );
};

export default ButtonText;
