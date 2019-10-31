import React, { Component } from "react";

import UserCreate from "./UserCreate";
import BackgroundSerbia from "../img/serbia.jpg";
import BackgroundGermany from "../img/germany.jpg";
import BackgroundFrance from "../img/france.jpg";
import BackgroundUsa from "../img/us.jpg";
import BackgroundUk from "../img/uk.jpg";
import BackgroundNetherlands from "../img/holland.jpg";
import BackgroundChina from "../img/china.jpg";
import BackgroundItaly from "../img/italy.jpg";
import BackgroundTurkey from "../img/turkey.jpg";
import BackgroundSpain from "../img/spain.jpg";
import BackgroundBrazil from "../img/brazil.jpg";
import BackgroundRussia from "../img/russia.jpg";
import BackgroundCanada from "../img/canada.jpg";
import BackgroundAustralia from "../img/australia.jpg";
import BackgroundMexico from "../img/mexico.jpg";
import LanguageContext from "../contexts/LangugageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";
import "./App.css";

class App extends Component {
  state = { language: "english", colorButton: "red" };

  onCountryChange = (language, colorButton) => {
    this.setState({ language, colorButton });
  };

  render() {
    let background = "";
    switch (this.state.language) {
      case "english":
        background = `url(${BackgroundUk})`;
        break;
      case "serbian":
        background = `url(${BackgroundSerbia})`;
        break;
      case "german":
        background = `url(${BackgroundGermany})`;
        break;
      case "englishUsa":
        background = `url(${BackgroundUsa})`;
        break;
      case "french":
        background = `url(${BackgroundFrance})`;
        break;
      case "dutch":
        background = `url(${BackgroundNetherlands})`;
        break;
      case "chinese":
        background = `url(${BackgroundChina})`;
        break;
      case "spanish":
        background = `url(${BackgroundSpain})`;
        break;
      case "portuguese":
        background = `url(${BackgroundBrazil})`;
        break;
      case "turkish":
        background = `url(${BackgroundTurkey})`;
        break;
      case "italian":
        background = `url(${BackgroundItaly})`;
        break;
      case "spanishMex":
        background = `url(${BackgroundMexico})`;
        break;
      case "englishAus":
        background = `url(${BackgroundAustralia})`;
        break;
      case "russian":
        background = `url(${BackgroundRussia})`;
        break;
      case "frenchCan":
        background = `url(${BackgroundCanada})`;
        break;
    }
    return (
      <div
        style={{
          backgroundImage: background,
          height: "100vh",
          backgroundSize: "cover"
        }}
        className="ui container"
      >
        <LanguageSelector onCountryChange={this.onCountryChange} />
        <ColorContext.Provider value={this.state.colorButton}>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
