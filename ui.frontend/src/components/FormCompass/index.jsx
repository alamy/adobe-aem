import * as React from 'react';
import {useState} from 'react';
import './style.css';
import Validacao from './validar.json'; 
//import  Estados from'./estados.json';
//import  Municipios from'./municipios.json';

var title;
var texto;
var logo;
var x;
var objeto = Validacao;
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  
  // for(var e; e < Estados.length; e++){
 //   if(position.coords.latitude ===)
 // }
  x = "Latitude: " + position.coords.latitude + 
  "<br />Longitude: " + position.coords.longitude;
}
const FormCompass = ({text, titulo, logoCompass}) => {

  let [name, setName] = useState('');
  let [senha, setSenha] = useState(''); 
  let [errorSenha, setErrorSenha] = useState('');
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
    getLocation();
    if(!name || !senha){
      console.log('falta nome')
    }else{
       for(let i = 0; i < objeto.length; i++){
          if(name !== objeto[i].name || senha !== objeto[i].senha){
            setErrorSenha('Ops, usuário ou senha inválidos. Tente novamente!');
            var labelSenha = document.getElementById("erroSenha");
            var inputName = document.getElementById("name");
            var inputSenha = document.getElementById("password");
            labelSenha.classList.add("yellow");
            inputName.classList.add("borderyellow");
            inputSenha.classList.add("borderyellow");
          }else{
            console.log('logado')
            setErrorSenha('');
            labelSenha.classList.remove("yellow");
            inputName.classList.remove("borderyellow");
            inputSenha.classList.remove("borderyellow");
            break;
          } 
       }
    }
   
   };

  return (
    <>
    <div class="LoginForm">
      {x}
      <div id="demo"></div>
      <div class="s6 login-form">
        <h1>{title}</h1>
        <p>{texto}</p>
        <div class="formulario">
          <h3>Login</h3>
          <div class='campo' id="name">
          <input 
              type='text' 
              name="user" 
              id="user"
              placeholder='Insira seu nome' 
              value={name}
              onChange={(e) => setName(e.target.value)}
          />
          <label for="user">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2">
              </path>
              <circle cx="12" cy="7" r="4">
              </circle>
              </svg>
          </label>
          </div>
          
          <div class='campo' id="password">
          <input 
              type='password' 
              name="senha" 
              placeholder='*******' 
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
          />
          <label for="senha">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2">
              </rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4">
              </path>
            </svg>
          </label>
          </div>
          
          <div id="erroSenha">{errorSenha}</div>
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
