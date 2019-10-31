import React, { Component } from "react";

import LanguageContext from "../contexts/LangugageContext";
import "./App.css";

class Field extends Component {
  static contextType = LanguageContext;
  render() {
    let text = "";
    switch (this.context) {
      case "english":
        text = "Enter name";
        break;
      case "serbian":
        text = "Unesi ime";
        break;
      case "german":
        text = "Name eingeben";
        break;
      case "french":
        text = "Entrez le nom";
        break;
      case "dutch":
        text = "Voer naam in";
        break;
      case "englishUsa":
        text = "Enter name";
        break;
      case "german":
        text = "Name eingeben";
        break;
      case "chinese":
        text = "輸入名字";
        break;
      case "spanish":
        text = "Ingresa un nombre";
        break;
      case "portuguese":
        text = "Insira um nome";
        break;
      case "turkish":
        text = "Bir isim girin";
        break;
      case "italian":
        text = "Inserisci un nome";
        break;
      case "spanishMex":
        text = "Ingresa un nombre";
        break;
      case "frenchCan":
        text = "Entrez le nom";
        break;
      case "russian":
        text = "Введите имя";
        break;
      case "englishAus":
        text = "Enter Name";
        break;
    }
    //const text = this.context === "english" ? "Name" : "Ime";
    return (
      <div className="ui field">
        <label className="label">{text}</label>
        <input
          style={{ width: "98%", margin: "10px" }}
          placeholder="Your Name"
        />
      </div>
    );
  }
}

export default Field;
