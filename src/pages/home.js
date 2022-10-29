import React, { Component, useState, useEffect } from "react";
import Coins from "../components/Coins";
import axios from "axios";
import { FaCoins } from "react-icons/fa";
import { getAuth, signOut } from "firebase/auth";

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

  const auth = getAuth();

  const handleLogout = (e) => {
    signOut(auth)
      .then(() => {
        //Sign-Out Successful
        console.log("successful");
      })
      .catch((error) => {
        console.log("failed");
      });
  };

  return (
    <div>
      <nav>
        <a href="/home"> Stax | Trading Platform </a>
        <div className="nav-item">
          <a href="/learnAndEarn">Learn&Earn</a>
          <a href="/Profile">Profile</a>
          <a href="/" onClick={handleLogout}>
            Logout
          </a>
        </div>
      </nav>
      <section className="home">
        <div className="home-title">
          <FaCoins className="icon" />
          <h1>
            Coin<span className="purple">Search</span>
          </h1>
        </div>
        <a href="/">
          <Coins coins={coins} />
        </a>
      </section>
    </div>
  );
}

export default Home;
