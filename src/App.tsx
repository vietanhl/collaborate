import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter, NavLink } from "react-router-dom";
import styled from "styled-components";
import { HomePageView, ContactView, ErrorPageView } from "./views/LoadableView";
import Footer from "./components/Footer/Footer";
import { useMediaQuery } from "react-responsive";

const Header = styled.body`
  background-color: #f4f5f7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(15px + 1vmin);
  color: #282c34;
`;

const App = (props: any) => {
  const Default = ({ children }: any) => {
    const isNotMobile = useMediaQuery({ minWidth: 1200 });
    return isNotMobile ? children : null;
  };

  return (
    <>
      <Default>
        <NavLink className="menu-heading" to="/home">
          <p className="centered">Collaborate</p>
        </NavLink>{" "}
      </Default>

      <Header>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={(props: any) => {
                return <HomePageView />;
              }}
            />
            <Route
              path="/home"
              component={(props: any) => {
                return <HomePageView />;
              }}
            />
            <Route path="/contact" component={ContactView} />
            <Route path="*" component={ErrorPageView} />
            <Route path="/error" component={ErrorPageView} />
          </Switch>
        </BrowserRouter>
      </Header>
      <Footer />
    </>
  );
};

export default App;
