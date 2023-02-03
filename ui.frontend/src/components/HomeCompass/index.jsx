import React, {useState, useEffect }from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import GoogleApi from "../../service/googleApi";
import Validacao from '../FormCompass/validar.json'; 

let logo;
let interrupter;
let textoFotter;
var objeto = Validacao;
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
 /* var objeto = Validacao;
 const itemReactTitle = { 
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
let DataAtual = new Date();
let dia = DataAtual.getDay();
let semana = dias[DataAtual.getDay() % 7];
let mes = meses[DataAtual.getMonth()];;
let ano = DataAtual.getFullYear();
let [relogio, setRelogio] = useState("");
var history = useHistory();



  
const Hora = () => {
    let novaHora = new Date();
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    minuto = zero(minuto);
    setRelogio(hora+':'+minuto);
}
var [localizacao, setLocalizacao ] = useState([]);
const getLocation = () => {
    Hora();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position){
    lat =  position.coords.latitude;
    lon = position.coords.longitude;
    GoogleApi
        .get("json?latlng="+lat +","+ lon+"&key=")
        .then((response) => setLocalizacao(response?.data))
        .catch((err) => {
            console.log("ops! Erro na api google" + err)
        });
}
   
    let user = sessionStorage.getItem('user');
    let pass = sessionStorage.getItem('pass');
    if(!user || !pass){
        history.push("/content/reactapp/us/en/login/index");
    }else{
        for(let i = 0; i < objeto.length; i++){
                if(user !== objeto[i].name || pass !== objeto[i].senha){
                   history.push("/content/reactapp/us/en/login/index");
                }else {
                    break;
                }
            }
        }
    
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

    if(!textFooter){
        textoFotter = "Digite algum texto"
     }else{
        textoFotter = textFooter
     }

    if(!logoHome) {
        logo = '/content/dam/espatalho.png';
    }else{
        logo = logoHome.src

    }
   
    var [estado, setEstado] = useState();

    let [seconds, setSeconds] = useState(600);
    useEffect(() => {
            const interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1001);
            setEstado(localizacao.plus_code?.compound_code.substr(8));
    },[localizacao.plus_code?.compound_code]);
    
    if(seconds === 0){
        user = sessionStorage.removeItem('user');
        pass = sessionStorage.removeItem('pass');
        history.push('/content/reactapp/us/en/login/index');
    }
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
                    <p>{estado} </p>
                    <h2><span class="material-symbols-outlined">wb_sunny</span>  29º</h2>
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
                        <li id="application">
                            <p>Application<br/> refresh in</p>
                        </li>
                        <li>
                            <h1>{seconds}</h1>
                            <p>seconds</p>
                        </li>
                    </ul>
                </div>
                <div class="desktop">
                    <Link to='/content/reactapp/us/en/login/pesquisa'><div class="logout">Acessar<br/> Busca</div></Link>
                    <Link to='/content/reactapp/us/en/login.html'><div class="search">Logout</div></Link>
                </div>
                <div class="mobil">
                    <Link to='/content/reactapp/us/en/login/pesquisa'><div class="search">Logout</div></Link>
                    <Link to='/content/reactapp/us/en/login.html'><div class="logout">Acessar Busca</div></Link>
                </div>
                
            </section>
        </div>
        </>
    )
}

export default HomeCompass