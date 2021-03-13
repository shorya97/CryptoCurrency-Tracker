import React, { createContext, useEffect, useState } from "react";

export const CurrencyListContext = createContext();

export const CurrencyListContextProvider = props => {
    const [currencyList,SetCurrencyList] = useState(["bitcoin","ethereum","ripple"])

    useEffect(() => {
      localStorage.setItem("currencyList", currencyList);
    }, [currencyList]);

    const deleteCoin = (coin) => {
        SetCurrencyList(
          currencyList.filter((el) => {
            return el !== coin;
          })
        );
      }; 

    const addCoin = (coin) => {
      if (currencyList.indexOf(coin) === -1) {
        SetCurrencyList([...currencyList, coin]);
      }
    };

    return(
        <CurrencyListContext.Provider value={{currencyList, deleteCoin, addCoin}}>
            {props.children}
        </CurrencyListContext.Provider>
    );
};

