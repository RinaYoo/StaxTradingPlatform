import React from 'react'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'

// My Styles
import '../styles/coins.css';

const CoinItems = (props) => {
  return (
    <div className='coin-row'>
      <p>{props.coins.market_cap_rank}</p>
      <div className='img-symbol'>
        <img src={props.coins.image} alt='' />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>${props.coins.current_price.toLocaleString()}</p>


      {props.coins.price_change_percentage_24h < 0 ? (
        <span className='red'>
          <FiArrowDown />
          {props.coins.price_change_percentage_24h.toFixed(2)}%
        </span>
      ) : (
        <span className='green'>
          <FiArrowUpRight />
          {props.coins.price_change_percentage_24h.toFixed(2)}%
        </span>
      )}

      <p>${props.coins.total_volume.toLocaleString()}</p>
      <p>${props.coins.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItems
