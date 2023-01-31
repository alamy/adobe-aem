import React, {useState, useEffect, useCallback  }from "react";
import { useHistory } from "react-router-dom";
import './style.css';
import axios from "axios";

const Pesquisa = ({titulo, texto, logoPesquisa}) => {
  var title;
  var text;
  var logo;   
  let [usuario, setUsuario] = useState('');
  let [allUser, setAllUser] = useState([]);
  var history = useHistory();
  var id ;
  var prevId;
  
  localStorage.removeItem('user');
 
async function ConsultarUsuario(u){
  await axios.get('https://api.github.com/users/'+u)
        .then((res) => addUserArray(res?.data))
        .catch((err) => {
          console.log("ops! Erro na api GIT " + err)
      })
  }

   function addUserArray(t){
    id = t.id
        if(allUser.length === 0){
          setAllUser(allUser => [...allUser, t])
          prevId = id
        }else if(id === prevId){
          prevId = id
        }else{
          console.log("to no else --" + id + "@@@@" + prevId)
          setAllUser(allUser => [...allUser, t])
          prevId = id
        }
  }
  const ConsultarAll = () => {
    setAllUser([])
      for(var r = 0; r <= usuario.length; r++ ){
        ConsultarUsuario(usuario.slice(0,r))
      }
  }

  useEffect(() => {
    setAllUser(allUser)
},[allUser])

function Detalhes(u){
  localStorage.setItem('user', u)
  console.log(localStorage.setItem('user', u))
  history.push("/content/reactapp/us/en/login/pesquisa/detalhe");
}


    if(!texto){
        text = 'Para continuar navegando de forma segura, efetue o login na rede.'
      }else {
        text = texto
      }
      if(!titulo){
        title = 'Olá'
      }else {
        title = titulo
      }
      if(!logoPesquisa){
        logo = '/content/dam/1652452511440-removebg-preview.png';
      }else {
        logo = logoPesquisa.src
      }
  
     const listItems  =  
      allUser.map((allUser) =>
          <li class="boxUser">
            <img src={allUser.avatar_url} alt="perfil" class="perfil" />
            <address>
                <h3>{allUser.name}</h3>
                <p>{allUser.bio}</p>
            </address>
                    <button onClick={() => Detalhes(allUser.login)} class="vermais">Ver Mais</button>
         </li>
        ); 


    return(
      <>
        <section class="pesquisa">
          <div class="form">
            <div class="box-pesq">
              <h1>{text}</h1>
              <p> {title}</p>
              <div class='input'>
                <input 
                  type="text" 
                  class="iputpesquisa" 
                  placeholder="Ex.: Thauany" 
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}/>
                  </div>
                <button class="buscar" onClick={ConsultarAll}> <p>Buscar</p>  
                  <span class="material-symbols-outlined" >search</span>
                </button>
            </div>
            
              <ul class="listaUsuarios">
                {listItems}
              </ul>
          </div>
          <div class="bgCompassPesq">
            <img src={logo} alt="logo" />
          </div>
        </section>
      </>
    )
}

export default Pesquisa