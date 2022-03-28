//This is the overall wrapper for the Game, that all the other components will live inside

import React, { useState, UseEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";



import Navigation from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Instructions from "./pages/Instructions";
import DragDrop from "./pages/DragDrop";
import Overview from "./pages/Overview";
// import Fish from "./pages/Fish";
// import Pottery from "./pages/Pottery";
// import GreatPlains from "./pages/GreatPlains";

// import Progress from "./pages/Progress";

import "./index.css";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  onError: (e) => {
    console.log(e);
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container fluid className="flex-column justify-flex-start min-100-vh">
          <Navigation />
          <Row>
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/overview" element={<Overview />} />

                <Route path="/instructions" element={<Instructions />} />

                <Route path="/overview" element={<Overview />} />

                <Route path="/dragdrop" element={<DragDrop />} />

                <Route path="/about" element={<About />} />
              </Routes>
          </Row>
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
