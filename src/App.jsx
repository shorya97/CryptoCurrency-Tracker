import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CurrencyHomePage from "./pages/CurrencyHomePage";
import CurrencyDetailPage from "./pages/CurrencyDetailPage";
import Header from "./components/Header";
import "./App.css";
import { CurrencyListContextProvider } from "./context/CurrencyListContext";

const App = () => {
    return (
        <div className="container">
            <CurrencyListContextProvider>
                <BrowserRouter>
                <Header />
                    <Route exact path="/" component={CurrencyHomePage} />
                    <Route path="/coins/:id" component={CurrencyDetailPage} />
                </BrowserRouter>
            </CurrencyListContextProvider>
        </div>
    )
}

export default App;