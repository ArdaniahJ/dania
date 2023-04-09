import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const projects = {
      "Dania.J Portfolio": {
        desc:
          "Dania.J is a landing page prototype to showcase a clear and succint self-information that are easy to navigate",
        techStack: "JavaScript, HTML & CSS, React.js",
        link: "https://github.com/ArdaniahJ/DaniaJ",
      },
      "Multi-Step Global CO2 Emissions Forecast with Time-Series Techniques": {
        desc:
          "An Empirical Analysis of Global CO2 Emissions and Multi-Step Emissions Forecasting (10 Years) using Mutltiple Time-Series Techniques (TST).",
        techStack: "Python, TSF Models (AR, ARIMA, SARIMAX, SARIMA), TS Analysis (MA, SES, Holt's ES, ACF & PACF)",
        link: "https://github.com/ArdaniahJ/Multi-Step_Forecasting_Global_CO2_Emissions_with_TST",
      },
      " Optimizing XGBoost Hyperparameters with Simulated Annealing for Fraud Detection": {
        desc:
          "Optimized financial fraud detection model by tuning XGBoost hyperparameters with Simulated Annealing with a target to achieve 10% accuracy improvements and 5% reduction in fraud losses for a banking client.",
        techStack: "Python, Colab, Simulated Annealing, XGBoost",
        link: "https://github.com/ArdaniahJ/XGBoost_Hyperparameter_Tuning_with_Simulated_Annealing",
        open: ""
      },
      "Fashion Search with YOLOX for Fashion Recognition and Recommendation": {
        desc:
          "An apparel detection detector based on YOLOX. Given a fashion image, the detector is able to finds and localize potential apparel and recommend the similar or the exact apparel by the end of every clicks.",
        techStack: "Python, YOLOX, Colab, Remo AI, FastAPI, ONNX",
        link: "https://github.com/ArdaniahJ/YOLOX_Fashion_Search_Enabler_with_YOLOX",
        open: ""
      },
      "Custom Road Signs Detector with YOLOv5": {
        desc:
          "A Road Sign Detector designed for identifying and classifying custom road signs with high precision, even in challenging environments.",
        techStack: "Python, YOLOv5s, Colab, PyTorch",
        link: "https://github.com/ArdaniahJ/Custom_Road_Signs_Detector_with_YOLOv5",
        open: ""
      },
      "Detoxify Comments with NLP": {
        desc:
          "Sieving toxic comments on Twitter by identifying and filtering out comments in real-time through Text Vectorization and DL.",
        techStack: "Python, TensorFlow & TPU, NLP, DL",
        link: "https://github.com/ArdaniahJ/Tall_Tales_Detoxify_with_NLP",
        open: ""
      },
      "Principal Component Analysis Compilations": {
        desc:
          "Unraveling the intricacies of Principal Component Analysis (PCA) for an in-depth understanding on its implementation to identify key variables and patterns within complex datasets.",
        techStack: "Python, PCA, Colab",
        link: "https://github.com/ArdaniahJ/Principal_Component_Analysis_Compilations",
      },
      "Web Scraping and RPA": {
        desc:
          "Showcasing how data from Amazon and its competitors, ranging from thousands to millions of records, is scraped and automated for E-commerce market analysis.",
        techStack: "Python, chromedriver2, Selenium, BeautifulSoup",
        link: "https://github.com/ArdaniahJ/Web_Scraping_and_RPA",
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ portfolio</span>
        </div>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
