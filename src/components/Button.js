import React, { Component } from "react";

import LanguageContext from "../contexts/LangugageContext";
import ColorContext from "../contexts/ColorContext";
import "./App.css";

class Button extends Component {
  // Button.contextType = LanguageContext
  renderValue = value => {
    switch (value) {
      case "english":
      case "englishAus":
      case "englishUsa":
        return "Submit";
      case "french":
      case "frenchCan":
        return "Soumettre";
      case "serbian":
        return "Pošalji";
      case "spanish":
      case "spanishMex":
        return "Enviar";
      case "german":
        return "Einreichen";
      case "dutch":
        return "Voorleggen";
      case "turkish":
        return "Sunmak";
      case "chinese":
        return "提交";
      case "portuguese":
        return "Enviar";
      case "italian":
        return "Sottoscrivi";
      case "russian":
        return "Представить";
    }
  };

  myFunction() {
    return alert("Thanks for submitting your form!");
  }

  renderColorButton(color) {
    return (
      <div className="button">
        <button
          onClick={() => this.myFunction()}
          id="button"
          className={`ui button big toggle center ${color}`}
        >
          <LanguageContext.Consumer>
            {value => this.renderValue(value)}
          </LanguageContext.Consumer>
        </button>
      </div>
    );
  }
  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderColorButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
