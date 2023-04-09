import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    Pandit: {
      jobTitle: "Data Management (Data Science) Apprentice @",
      duration: "DEC 2021 - MAR 2022",
      desc: [
        "Collaborated with mentor to build a Recommendation Engine with a target to increase client sales by 15%-20% based on most bought category targeting and new suggestions. An image recommender system is its add-on for clothing sales.",
        "Built a Web Crawler & Scraper with RPA tools to scrap hundredths to millionths E-commerce Product Price Comparison with a goal to increase client’s apparel campaign sales rate by 10%-12%."
      ]
    },
    EXXONMOBIL: {
      jobTitle: "Industrial Cyber Security Analyst Apprentice @",
      duration: "SEPT 2021 - OCT 2021",
      desc: [
        "Demonstrated proficiency in conducting comparative analysis to determine false positives and true positives baseline for OT security threats on Upstream environment, utilizing Splunk SIEM and Nozomi Guardian's built-in ML tools to optimize IDS configuration rules.",
        "Reviewed Historical IDS Logs in along with Supervisor to determine which IoC to be the IDS baseline in accordance to the company ICS infrastructure.",
        "Participated in IT and OT cybersecurity experts' technical knowledge sharing session for the kick-off development of a new in-house OT network IDS to reduce false positives."
      ]
    },
    "TOP GLOVE": {
      jobTitle: "Automation Engineer & Researcher (R&D) @",
      duration: "OCT 2018 - APR 2020",
      desc: [
        "Participated and innovated with C-suite, Director Boards, stakeholders, and Project Research Team in pioneering the Additive Manufacturing Execution System (MES) on fourth level (L3) as the Digital Twin Proof-of-concept (POC) foundation and titled as the 1st out of 44 factories to become the first Digital Factory in the company yielding up to 10% profit margin during the POC launch.",
        "Lead the team of 5 in orchestrating the development strategies and implementation for MES and successfully reduced the aggregated production costs by 15% - 20% on the selected production lines for 3 consecutive months during the first POC launch.",
        "Resolved and conceptualized with vendors on IT and OT level for ERP (SAP) backend amendment, additions to legacy, and authorizations needed for MES system integration for streaming data pipeline to allow end-users real-time seamless monitoring functionality hence achieved end-users monitoring satisfaction by 25% - 30% during POC launch exceeding the 10% of initial target."
      ]
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
