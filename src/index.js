import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "./components/App/App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const localGrapghQl = "http://localhost:4000/";

const client = new ApolloClient({
    uri: localGrapghQl,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
