import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { AuthProvider } from "./context/authContext";

// Apollo Client Setup
import { ApolloProvider } from "@apollo/react-hooks";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//Pages
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import ProfilePage from "./pages/profilePage";
import LeaderBoardPage from "./pages/LeaderBoardPage";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/leaderboard" element={<LeaderBoardPage />} />
          </Routes>
          <Footer />
        </Router>
      </ApolloProvider>
    </AuthProvider>
  );
};

export default App;
