import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="intro">
        <FractalTree></FractalTree>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"dania"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">
            Data exploration: my obsession, your competitive edge.
            </div>
          <div className="intro-desc">
            <br />I view raw data as a precious commodity - the new oil that fuels the
            most valuable modern asset:<b> Artifical Intelligence</b>.
            Data isn't just a numbers and figures to me, it's a tresure trove of knowledge
            waiting to be unlocked.    
             <br /><br />As an <b>Aspiring Data Scientist,</b> I'm passionate about the process of transforming
             data into valuable insights that drive innovation and success. From Machine Learning to Advanced
             Analytics, I'm dedicated to exploring every aspect of this exciting field.
          </div>
          <a
            href="mailto:ardaniahjmldn@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Say hi!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
