import React, { Fragment } from "react";


import Content from "../components/MFAContent";
import {
  Button
} from "reactstrap";

import {
  useLocation
} from "react-router-dom";
import config from "../auth_config.json";



const AskMFA = () => {
  
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const state = query.get("state");

  
  return (
  <Fragment>
    <hr />
    <Content />
    <Button color="primary" size="lg" simple onClick={() => {window.location = "https://" + config.domain + "/continue?enroll=true&state="+state}}>
                Enroll MFA 
              </Button>
              <Button color="primary" size="lg" simple onClick={() => {window.location = "https://" + config.domain + "/continue?enroll=false&state="+state}}>
                Continue without MFA
              </Button>
  </Fragment>
)};

export default AskMFA;
