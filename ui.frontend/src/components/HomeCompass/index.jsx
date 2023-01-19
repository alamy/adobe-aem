import React, {useState, useEffect, useRef }from "react";
import "./style.css";
import { Link } from "react-router-dom";
//import  Estados from'./estados.json';
//import  Municipios from'./municipios.json';

let logo;
let interrupter;
let textoFotter;
var meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];
  var dias = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]

/* const itemReactTitle = { 
    title1: 'a',
    title2: 'a',
    title3: 'a',
    title4: 'a',
}

const itemReactParagrafo = {
    paragrafo1: 'a',
    paragrafo2: 'a',
    paragrafo3: 'a',
    paragrafo4: 'a',
}*/
function ValidacaoAEM(e){
    if(!e){
        interrupter = true
       
    }else{
        interrupter = false 
    }
    return interrupter
   
}

function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}

const HomeCompass = ({ 
                        logoHome, 
                        titleOne, 
                        titleTwo, 
                        titleThree, 
                        titleFour, 
                        desciptionOne, 
                        desciptionTwo, 
                        desciptionThree, 
                        desciptionFour, 
                        textFooter 
                    }) => { 

var lat;
var lon;
let googlemaps;
let DataAtual = new Date();
let dia = DataAtual.getDay();
let semana = dias[DataAtual.getDay() % 7];
let mes = meses[DataAtual.getMonth()];;
let ano = DataAtual.getFullYear();
let [relogio, setRelogio] = useState("");
let [timeout, setTimeout] = useState(600);
let prevTimeout = useRef(timeout);
let [local, setLocal ] = useState([]);
const getLocation = () => {
   // console.log("estou getLocation")
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      alert("Geolocation is not supported by this browser.");
    }
  }
  let [localizacao, setLocalizacao ] = useState([]);
  function showPosition(position){
    Hora();
    lat =  position.coords.latitude;
    lon = position.coords.longitude;
    googlemaps = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat +","+ lon+"&key=AIzaSyB_8fXTTUr2koqUklfGRF8K4iGfKkpq_Rs";
    console.log(googlemaps)
    fetch(googlemaps, { method:"GET"})
        .then((response) => response.json())
        .then((localizacao) => console.log(localizacao));
    
        console.log(localizacao)
}
    /* let user = sessionStorage.getItem('user');
    let pass = sessionStorage.getItem('pass');
    if(!user || !pass){
        window.location.replace("http://localhost:4502/content/reactapp/us/en/login.html");
    }else{
        for(let i = 0; i < objeto.length; i++){
                if(user !== objeto[i].name || pass !== objeto[i].senha){
                    console.log("vc não deveria está aqui")
                    window.location.replace("http://localhost:4502/content/reactapp/us/en/login.html");
                }else {
                    console.log("seja muito bemvindo " + possicao)
                    getLocation()
                    break
                }
            }
        }
    */
    
    const itemEAMTitle = [  
                            titleOne, 
                            titleTwo, 
                            titleThree, 
                            titleFour
                        ]

    const itemEAMParagrafo = [  
                                desciptionOne, 
                                desciptionTwo, 
                                desciptionThree, 
                                desciptionFour
                            ]
     if(ValidacaoAEM(textFooter)){
        textoFotter = "Digite algum texto"
     }else{
        textoFotter = textFooter
     }
    for(var n = 0; n <= itemEAMTitle.length; n++){
        if(ValidacaoAEM(itemEAMTitle[n])) {
           // console.log('não resolvi isso')
        }
    }
    for(var f = 0; f <= itemEAMParagrafo.length; f++){
        if(ValidacaoAEM(itemEAMParagrafo[n])) {
          // console.log('não resolvi isso')
        }
    }
    if(!logoHome) {
        logo = '/content/dam/espatalho.png';
    }else{
        logo = logoHome.src
    }
    const Hora = () => {
        let novaHora = new Date();
        let hora = novaHora.getHours();
        let minuto = novaHora.getMinutes();
        minuto = zero(minuto);
        setRelogio(hora+':'+minuto);
    }
    console.log(prevTimeout.current)
   /* useEffect(() => {
        console.log(timeout)
        setInterval(setTimeout(timeout - 1), 100000);
       
    }, [timeout]);*/
    useEffect(() => {
        setInterval(Hora ,60000);
    });
    console.log("#############################")      
    console.log(localizacao)
    console.log("#############################")
    prevTimeout.current  = timeout;
    return (
        <>
        <div class="bodyHome" onLoad={getLocation}>
            <ul class="header">
                <li class="logoHome">
                    <img src={logo} alt="logo" />
                </li>
                <li class="hora">
                    <h1>{relogio}</h1>
                    <p> {semana}, {dia} de {mes} de {ano}</p>
                </li>
                <li class="localidade">
                    <p></p>
                    <h2>22º</h2>
                </li>
            </ul>
                
            <section class="bodyCompass">
                <h3>{titleOne}</h3>
                <p>{desciptionOne}</p>
                <h2>{titleTwo}</h2>
                <p>{desciptionTwo}</p>
                <h1>{titleThree}</h1>
                <p>{desciptionThree}</p>
                <h1>{titleFour}</h1>
                <p>{desciptionFour}</p>
            </section>    

            <section class="footerHome">
                <div class="descripitionFooter">
                    <p>{textoFotter}</p>
                </div>
                <div class="timeout">
                    <ul>
                        <li>
                            <p>Application refresh in</p>
                        </li>
                        <li>
                            <h1>{timeout}</h1>
                            <p>seconds</p>
                        </li>
                    </ul>
                </div>
                <Link to='/content/reactapp/us/en/login.html'><div class="logout">Acessar<br/> Busca</div></Link>
                <Link to='/content/reactapp/us/en/login.html'><div class="search">Logout</div></Link>
            </section>
        </div>
        </>
    )
}

export default HomeCompass