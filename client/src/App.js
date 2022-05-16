//This is the overall wrapper for the Game, that all the other components will live inside

import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";



import Navigation from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutEnd from "./pages/AboutEnd";
import Instructions from "./pages/Instructions";
import Trivia from "./pages/Trivia";
import GreatPlains from "./pages/GreatPlains";
import California from "./pages/California";
import PacificNW from "./pages/PacificNW";
import Southwest from "./pages/Southwest";
import Lesson from "./pages/Lesson";

// Importing our theme provider which will make our global state available to child components
import CountProvider from './utils/GameContext';


// import Progress from "./pages/Progress";

import "./index.css";
import CultureToday from "./pages/CultureToday";

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
      <CountProvider>
        <Container fluid className="flex-column justify-flex-start min-100-vh ">
          <Navigation />
          <Row>
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/instructions" element={<Instructions />} />

                <Route path="/trivia" element={<Trivia />} />

                <Route path="/about" element={<About />} />

                <Route path="/aboutend" element={<AboutEnd />} />

                <Route path="/california" element={<California />} />

                <Route path="/greatplains" element={<GreatPlains />} />

                <Route path="/southwest" element={<Southwest />} />

                <Route path="/pacificnw" element={<PacificNW />} />

                <Route path="/lesson" element={<Lesson />} />

                <Route path="/culturetoday" element={<CultureToday />} />

              </Routes>
          </Row>
        </Container>
        </CountProvider>
      </Router>
    </ApolloProvider>
  ); 
}

export default App;
