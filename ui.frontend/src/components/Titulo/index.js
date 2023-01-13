import './style.css';

var titulo;
const Titulo = ({ text }) => {
  if(!text){
    titulo = 'I have bad news for you'
  }else{
    titulo = text
  }
  return <div class="titulo"><p>{titulo}</p></div>;
};

export default Titulo;
