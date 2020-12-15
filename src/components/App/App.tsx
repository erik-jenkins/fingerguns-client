import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Register from '../Register';

const MainContainer = styled(Container)`
  margin-top: 2rem;
  padding-bottom: 1rem;
`;

function App() {
  return (
    <>
      <Navbar/>
      <MainContainer>
        <Switch>
          <Route path="/movies">
            <p>movies</p>
          </Route>
          <Route path="/groups">
            <p>groups</p>
          </Route>
          <Route path="/login">
            <p>login</p>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          
          {/* TODO: check if user is logged in to decide which to show */}
          <Route path="/feed">
            <p>feed</p>
          </Route>
          <Route path="/" exact>
            <p>index</p>
          </Route>
        </Switch>
      </MainContainer>
    </>
  );
}

export default App;
