import React, { useContext, useEffect, useState } from 'react'
import cryptoGecko from "../apis/cryptoGecko";
import {CurrencyListContext} from '../context/CurrencyListContext';
import Coin from "./Coin";

const CoinList = () => {
    const [coins,setCoins] = useState([])
    const {currencyList,deleteCoin} = useContext(CurrencyListContext)
    const [isLoading,setIsLoading] = useState(false)
    console.log(currencyList)
    useEffect(()=>{
        const fetchData = async() =>{
            setIsLoading(true) 
            const response = await cryptoGecko.get("/coins/markets", {
                params: {
                    vs_currency: "inr",
                    ids: currencyList.join(","),

                }
            })

            setCoins(response.data)
            setIsLoading(false)
        }

        if (currencyList.length>0){
            fetchData()
        } else{
            setCoins([])
        }
    },[currencyList])

    const renderCoins = () => {
        if (isLoading) {
          return <div>Loading...</div>;
        }
    
        return (
          <ul className="coinlist list-group mt-2">
            {coins.map((coin) => {
              return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin}/>;
            })}
          </ul>
        );
      };

    return (
        <div>
            {renderCoins()}
        </div>
    )
}

export default CoinList
