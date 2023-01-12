import './style.css'


var texto;
const Footer = ({ text }) => {
  console.log(text)
  if(!text) {
    texto = 'Alamy Neto'
  }else{
   
    texto = text
  }
 
  return <div class="footer"><p> Desenvolvido por:{texto}</p></div>;
};

export default Footer;
