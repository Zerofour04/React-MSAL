import React from 'react';
import { MsalAuthenticationTemplate, useMsal } from '@azure/msal-react';
import { InteractionType } from "@azure/msal-browser";
import { authRequest } from "./config/msalConfig";
import Header from './component/Header';
import { BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Input from './component/projects/input';
const App = () => {

  const msal = useMsal()
  console.log(msal)
  // @ts-ignore
  const ErrorComponent = ({ error }) => {
    return <p>An Error Occurred: {error}</p>;
  }

  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      authenticationRequest={authRequest}
      errorComponent={ErrorComponent}>
      <div>
      <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/mission-assignments">Mission assignments</Link>
        <Link to="/business-domains">Business Domains</Link>
        <Routes>

        <Route path = "/" element={<Header/>} />
        <Route path = "/projects" element={Input}/>
        <Route path = "/mission-assignments"/>
        <Route path = "/business-domains"/>
        </Routes>
      </div>
    </MsalAuthenticationTemplate>
  );
};

export default App;
