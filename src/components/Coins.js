import React from "react";
import CoinItems from "./CoinItems";


// My Styles
import "../styles/coins.css";

const Coins = (props) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>Rank #</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h Change</p>
          <p>Volume</p>
          <p>Mkt Cap</p>
        </div>

        {props.coins.map((coins) => {
          return <CoinItems coins={coins} />;
        })}
      </div>
    </div>
  );
};

export default Coins;
