import React, {useState, useEffect}from "react";
import { Link } from "react-router-dom";
//import axios from "axios";
import './style.css';

const Detalhe = ({textoRepositorio , textoFavorito, textoDetalhes}) => {
    var userStory = localStorage.getItem('user')
    var allRepo;
    var allFavo;
    var personUser;
    var textRepo;
    var textDeta;
    var textoFav;
    var [allRepositorio, setAllRepositorio ] = useState([]);
    var [allFavoritos, setAllFavoritos ] = useState([]);
    var [person, setPerson] = useState([]);
    const [activeTab, setActiveTab] = useState("tab1");

    async function getUser() {
        const userObject = await fetch('https://api.github.com/users/'+userStory);
        personUser = await userObject.json();
        console.log(personUser)
        setPerson(personUser)
      }
    
      async function getRepos() {
        const reposObject = await fetch('https://api.github.com/users/'+userStory+'/repos');
        allRepo = await reposObject.json();
        console.log(allRepo)
        setAllRepositorio(allRepo)
      }
    
      async function getFavor() {
        const favoObject = await fetch('https://api.github.com/users/'+userStory+'/starred');
        allFavo = await favoObject.json();
        console.log(allFavo)
        setAllFavoritos(allFavo)
      }

  

    const handleTab1 = () => {
        setActiveTab("tab1");
      };
    
      const handleTab2 = () => {
        setActiveTab("tab2");
      };
      
      if(!textoRepositorio){
          textRepo = "Digite algum texto"
      }else {
         textRepo = textoRepositorio
      }
  
     if(!textoDetalhes){
          textDeta = "Digite algum texto"
     }else {
          textDeta = textoDetalhes
     }
  
     if(!textoFavorito){
          textoFav = "Digite algum texto"
     }else {
          textoFav = textoFavorito
     }
    
        const Chamadas = () => {
            console.log('Estou na Chamada')
          
            
           
            getUser()
            getRepos()
            getFavor()
        }
        
        useEffect(() => {
            Chamadas()
        }, [])
        
        const MostrarMais = () =>{
            document.getElementById("boxDetalhe").classList.add("rolagem");
            document.getElementById("boxDetalhe").scrollTo(0, 1000)
        }
       

   const repositorio = allRepositorio.map((allRepositorio) => 
        <li>
            <div class="liDetalhe">
                <h1>{allRepositorio.name}</h1>
                <p>{allRepositorio.description}</p>
            </div>
            {allRepositorio.stargazers_count === 1 ? <span class="material-symbols-sharp yellow star">star</span> : <span class="material-symbols-sharp gray star">star</span>}
            <div class="liBtn">
                <button class="btn-desktop">Compartilhar</button>
                <button class="btn-mobil"><span class="material-symbols-sharp">share</span></button>
            </div>
        </li>
        ) 

   const favorito = allFavoritos.map((allFavoritos) => 
        <li>
            <div class="liDetalhe">
                <h1>{allFavoritos.name}</h1>
                <p>{allFavoritos.description}</p>
            </div>
            <div class="liBtn">
                <span class="material-symbols-sharp yellow">star</span>
                <button class="btn-desktop">Compartilhar</button>
                <button class="btn-mobil"><span class="material-symbols-sharp">share</span></button>
            </div>
        </li>
    ) 


    return (
        <>
        <div class='detalhe'>
            <div class="interDetalhe">
                <div class="detalheUsuario">
                    <img src={person.avatar_url} alt="perfil" class="perfilDetalhe" />
                    <h2>{person.name}</h2>
                    <p>{person.bio}</p>
                </div>
                <div class="box-detalhe" id="boxDetalhe">
                    <ul class='nav'>
                        <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}><p>{textRepo} <span>{allRepositorio.length}</span></p></li>
                        <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}><p>{textoFav} <span>{allFavoritos.length}</span></p></li>
                    </ul>
                    <div className="outlet">
                        {activeTab === "tab1" ? <ul class="ulRepo">{repositorio}</ul> : <ul class="ulRepo">{favorito}</ul>}
                    </div>
                </div>
                <Link to='/content/reactapp/us/en/login/pesquisa'><div class="voltar">Voltar</div></Link>
               <div class="maisDetalhes" onClick={MostrarMais}><p>{textDeta} </p><span class="material-symbols-outlined">expand_more</span></div> 
            </div>
        </div>
        </>
    )
}

export default Detalhe