import * as React from 'react';
import {useState} from 'react';
import './style.css';
import Validacao from './validar.json'; 
import { useHistory } from "react-router-dom";

var title;
var texto;
var logo;
var x;
var objeto = Validacao;
let validacaoError;


const FormCompass = ({text, titulo, logoCompass}) => {
  var history = useHistory();
  sessionStorage.clear();
  sessionStorage.setItem('user', '');
  sessionStorage.setItem('pass', '');
  localStorage.clear();
  let [name, setName] = useState('');
  let [senha, setSenha] = useState(''); 
  let [errorSenha, setErrorSenha] = useState('');
  function Redirecionar(){
    console.log('estou aqui')
    history.push("/content/reactapp/us/en/login/Home");
   }
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
    let labelSenha = document.getElementById("erroSenha");
    let inputName = document.getElementById("name");
    let inputSenha = document.getElementById("password");
    if(!name || !senha){
      let mensagem = 'Ops, você esqueceu de preencher';
      labelSenha.classList.add("yellow");
      if(!name && senha){
        mensagem = mensagem + ' nome';
        labelSenha.classList.add("yellow");
        inputName.classList.add("borderyellow");
        inputSenha.classList.remove("borderyellow");
      }else if(!senha && name){
        mensagem = mensagem + ' senha';
        labelSenha.classList.add("yellow");
        inputSenha.classList.add("borderyellow");
        inputName.classList.remove("borderyellow");
      }else{
        mensagem = mensagem + ' nome e senha'
        inputName.classList.add("borderyellow");
        inputSenha.classList.add("borderyellow");
      }
      setErrorSenha(mensagem);
    }else{
       for(let i = 0; i < objeto.length; i++){
          if(name !== objeto[i].name || senha !== objeto[i].senha){
            setErrorSenha('Ops, usuário ou senha inválidos. Tente novamente!');
            labelSenha.classList.add("yellow");
            inputName.classList.add("borderyellow");
            inputSenha.classList.add("borderyellow");
            validacaoError = true;
          }else{
            if(validacaoError){
            labelSenha.classList.remove("yellow");
            inputName.classList.remove("borderyellow");
            inputSenha.classList.remove("borderyellow");
            setErrorSenha('');
            setName('');
            }else{
              validacaoError = false
            }
            console.log('estou no else');
            console.log(validacaoError);
            sessionStorage.setItem('user', name);
            sessionStorage.setItem('pass', senha);
            Redirecionar();
            break;
          } 
       }
    }
   
   };

  return (
    <>
    <div class="LoginForm" alt="Aqui você vai fazer seu login" title='Aqui você vai fazer seu login'>
      <div class="demo"> <img src={logo} class="logo"  alt="Logo da Compass.uol" title='Logo da Compass.uol'/></div>
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
              alt="Digite seu usuario aqui" title='Digite seu usuario aqui'
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
              alt="Digite seu usuario aqui" title='Digite seu usuario aqui'
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
          <button class="enviar" id="enviar" onClick={validarCampo} alt="Botão para entrar" title='Botão para entrar'>Continuar</button>
        </div>

      </div>
      <div class="s6 laptop">
          <img src={logo} class="logo"  alt="Logo da Compass.uol" title='Logo da Compass.uol'/>
      </div>
    </div>
    </>
  );
};

export default FormCompass;
