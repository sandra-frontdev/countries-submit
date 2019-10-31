import React, { Component } from "react";

import FlagRussia from "../img/russia.svg";
import FlagCanada from "../img/canada.svg";
import FlagAustralia from "../img/australia.svg";
import FlagMexico from "../img/mexico.svg";
import FlagUnitedKingdom from "../img/united-kingdom.svg";
import FlagSerbia from "../img/serbia.svg";
import FlagUnitedStates from "../img/united-states.svg";
import FlagGermany from "../img/germany.svg";
import FlagNetherlands from "../img/netherlands.svg";
import FlagFrance from "../img/france.svg";
import FlagItaly from "../img/italy.svg";
import FlagChina from "../img/china.svg";
import FlagTurkey from "../img/turkey.svg";
import FlagSpain from "../img/spain.svg";
import FlagBrazil from "../img/brazil.svg";

class LanguageSelector extends Component {
  render() {
    return (
      <div>
        <h1 class="ui header center aligned">Select a language</h1>
        <img
          className="flag"
          width="75"
          onClick={() => this.props.onCountryChange("english")}
          src={FlagUnitedKingdom}
          alt="United Kingdom Flag"
          title="English UK"
        ></img>

        <img
          className="flag"
          width="75"
          onClick={() => this.props.onCountryChange("serbian", "secondary")}
          src={FlagSerbia}
          alt="Serbia Flag"
          title="Serbian"
        ></img>
        <img
          className="flag"
          width="75"
          onClick={() => this.props.onCountryChange("englishUsa", "orange")}
          src={FlagUnitedStates}
          alt="United States Flag"
          title="English Usa"
        ></img>
        <img
          className="flag"
          width="75"
          onClick={() => this.props.onCountryChange("german", "yellow")}
          src={FlagGermany}
          alt="Germany Flag"
          title="German"
        ></img>
        <img
          className="flag"
          width="75"
          onClick={() => this.props.onCountryChange("french", "pink")}
          src={FlagFrance}
          alt="France Flag"
          title="French"
        ></img>
        <img
          className="flag"
          width="75"
          onClick={() => this.props.onCountryChange("dutch", "black")}
          src={FlagNetherlands}
          alt="Netherlands Flag"
          title="Dutch"
        ></img>
        <img
          className="flag"
          width="75"
          onClick={() => this.props.onCountryChange("chinese", "pink")}
          src={FlagChina}
          alt="China Flag"
          title="Chinese"
        ></img>
        <img
          className="flag"
          width="75"
          onClick={() => this.props.onCountryChange("italian", "green")}
          src={FlagItaly}
          alt="Italy Flag"
          title="Italian"
        ></img>
        <img
          className="flag"
          width="75"
          onClick={() => this.props.onCountryChange("turkish", "black")}
          src={FlagTurkey}
          alt="Turkey Flag"
          title="Turkish"
        ></img>
        <img
          className="flag"
          width="75"
          onClick={() => this.props.onCountryChange("portuguese", "yellow")}
          src={FlagBrazil}
          alt="Brazil Flag"
          title="Portuguese"
        ></img>
        <img
          className="flag"
          width="75"
          onClick={() => this.props.onCountryChange("spanish", "olive")}
          src={FlagSpain}
          alt="Spain Flag"
          title="Spanish"
        ></img>
        <img
          className="flag"
          width="75"
          onClick={() => this.props.onCountryChange("spanishMex", "teal")}
          src={FlagMexico}
          alt="Mexico Flag"
          title="Spanish"
        ></img>
        <img
          className="flag"
          width="75"
          onClick={() => this.props.onCountryChange("englishAus", "gold")}
          src={FlagAustralia}
          alt="Australia Flag"
          title="English"
        ></img>
        <img
          className="flag"
          width="75"
          onClick={() => this.props.onCountryChange("russian", "green")}
          src={FlagRussia}
          alt="Russia Flag"
          title="Russian"
        ></img>
        <img
          className="flag"
          width="75"
          onClick={() => this.props.onCountryChange("frenchCan", "orange")}
          src={FlagCanada}
          alt="Canada Flag"
          title="French"
        ></img>
      </div>
    );
  }
}

export default LanguageSelector;
