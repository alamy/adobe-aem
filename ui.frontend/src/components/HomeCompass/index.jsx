import React from "react";
import Validar from  "../FormCompass/validar.json";
import "./style.css";
//import  Estados from'./estados.json';
//import  Municipios from'./municipios.json';

let logo;
let interrupter;
let textoFotter;
var objeto = Validar;
var x;
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
}
function ValidacaoAEM(e){
    if(!e){
        interrupter = true
       
    }else{
        interrupter = false 
    }
    return interrupter
   
}

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
    "######   Longitude: " + position.coords.longitude;
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
    let user = sessionStorage.getItem('user');
    let pass = sessionStorage.getItem('pass');
    if(!user || !pass){
      //  window.location.replace("http://localhost:4502/content/reactapp/us/en/login.html");
    }else{
        for(let i = 0; i < objeto.length; i++){
                if(user !== objeto[i].name || pass !== objeto[i].senha){
                    console.log("vc não deveria está aqui")
               //     window.location.replace("http://localhost:4502/content/reactapp/us/en/login.html");
                }else {
                    console.log("seja muito bemvindo " + x)
                    getLocation()
                    break
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
     if(ValidacaoAEM(textFooter)){
        textoFotter = "Digite algum texto"
     }else{
        textoFotter = textFooter
     }
    for(var n = 0; n <= itemEAMTitle.length; n++){
        if(ValidacaoAEM(itemEAMTitle[n])) {
            console.log('não resolvi isso')
        }
    }
    for(var f = 0; f <= itemEAMParagrafo.length; f++){
        if(ValidacaoAEM(itemEAMParagrafo[n])) {
           console.log('não resolvi isso')
        }
    }
    if(!logoHome) {
        logo = '/content/dam/espatalho.png';
    }else{
        logo = logoHome.src
    }
    return (
        <>
        <div class="bodyHome">
            <ul class="header">
                <li class="logoHome">
                    <img src={logo} alt="logo" />
                </li>
                <li class="hora">
                    <h1>Hora</h1>
                    <p>Data asdasd</p>
                </li>
                <li class="localidade">
                    <p>Local</p>
                    <h2>Temperatura</h2>
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
                <p>{textoFotter}</p>
            </section>
        </div>
        </>
    )
}

export default HomeCompass