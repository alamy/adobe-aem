import * as React from 'react';
import './style.css';

var title;
var texto;
var logo;

var name = " asda";
var senha = " asda";



const FormCompass = ({text, titulo, logoCompass}) => {
   
  if(!text){
    texto = 'Para continuar navegando de forma segura, efetue o login na rede.'
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
  const validarCampo = () => {
    // name = document.getElementById('#name').value;
    // senha = document.getElementById('#password').value;
     console.log('estou aqui');
   };

  return (
    <>
    <div class="LoginForm">
      <div class="s6 login-form">
        <h1>{title}</h1>
        <p>{texto}</p>
        <div class="formulario">
          <h3>Login</h3>
          <input type='text' name="user" placeholder='Insira seu nome' id="name" />
          <input type='password' name="senha" placeholder='*******' id="password" />
          <button class="enviar" id="enviar" onClick={validarCampo}>Continuar</button>
        </div>
      </div>
      <div class="s6 laptop">
          <img src={logo} alt="imagem" class="logo" />
      </div>
    </div>
    </>
  );
};

export default FormCompass;
