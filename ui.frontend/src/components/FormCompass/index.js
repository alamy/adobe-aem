import './style.css'

var title;
var texto;
var logo;
const FormCompass = ({ text, titulo, logoCompass}) => {
  if(!text){
    texto = 'Olá'
  }else {
    texto = text
  }

  if(!titulo){
    title = 'Olá'
  }else {
    title = titulo
  }
  if(!logoCompass){
    logo = '/content/dam/espatalho.png';
  }else {
    logo = logoCompass.src
  }
  
  return (
    <>
    <div class="container">
    <div class="row">
      <div class="col s6">
        <h1>{title}</h1>
        <p>{texto}</p>
        <form>
          <input type='text' name="user" placeholder='Insira seu nome' />
          <input type='password' name="senha" placeholder='*******' />
          <input type='submit' name='enviar' value="Continuar" />
        </form>
      </div>
      <div class="col s6">
          <img src={logo} alt="imagem" />
      </div>
    </div>
    </div>
    </>
  );
};

export default FormCompass;
