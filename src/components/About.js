import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";
import GitHubIcon from "@material-ui/icons/GitHub";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        A results-driven professional with experience 
        as an {" "} <b>Automation Engineer</b> at
        <a href="https://www.topglove.com/" target="_blank"> Top Glove Corp, </a> 
        an {" "} <b> Industrial Cyber Security Analyst Apprentice</b> at 
        <a href="https://corporate.exxonmobil.com/" target="_blank"> Exxonmobil Corp</a> and a
        <b> Data Management (Data Science) Apprentice</b> at{" "}
        <a href="https://www.pandit-it.com/" target="_blank">Pandit Sdn Bhd</a>.
        <br></br><br></br>Honed skills in business acumen, problem-solving, critical thinking, data analysis and story-telling.
      </p>
    );
    const two = (
      <p>
        Currently seeking a Junior Position as a Data Scientist to further developed these skills
        and abilities to gain a thorough hands-on experience in the field.
        <br></br>
        <br></br>
        Ultimate goal is to transition to a career in AI and to contribute to the development of 
        cutting-edge technologies that transform the world we live in. 
        <br/>
        <a style={{color:"#64ffda", fontSize:21}} href="https://github.com/ArdaniahJ" target="_blank">Click here for more projects </a> {" "}
        <a href="https://github.com/ArdaniahJ" target="_blank">
          <GitHubIcon style={{ fontSize: 19, color:"#e6f1ff"}}></GitHubIcon>
        </a>
      </p>

    );

    const desc_items = [one, two];

    const tech_stack = [
      "Python",
      "Javascript ES6+",
      "HTML & CSS",
      "Machine Learning",
      "React.js",
      "Deep Learning",
      "IBM Watson",
      "Web Scraping",
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/assets/me2.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
