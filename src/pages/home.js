import React, { Component, useState, useEffect } from "react";
import Coins from "../components/Coins";
import axios from "axios";
import { FaCoins } from "react-icons/fa";
import {Switch, Route} from 'react-router-dom';

function Home() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <section>
        <div className="home-title">
          <FaCoins className="icon" />
          <h1>
            Coin<span className="purple">Search</span>
          </h1>
        </div>
        <Switch>
        <Route exact path="/" component={<Coins coins={coins} />} />
        </Switch>
        <a href="/"><Coins coins={coins} /></a>
      </section>
    </div>
  );
}

export default Home;
