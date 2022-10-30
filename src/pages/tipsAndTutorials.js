import React, { useState} from "react";
import { getAuth, signOut } from "firebase/auth";
import TipOne from "./tips/tipOne";
import TipTwo from "./tips/tipTwo";
import "../styles/learn&earn.css";
import TipThree from "./tips/tipThree";
import TipFour from "./tips/tipFour";

function TipsAndTutorials() {
  const auth = getAuth();
  const [tipID,setTipID] = useState(0);

  const handleLogout = (e) => {
    signOut(auth)
      .then(() => {
        //Sign-Out Successful
        console.log("successful");
        alert("You are logged out!");
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
          <a href="/learnAndEarn">Learning & Rewards</a>
          <a href="/tipsAndTutorials">Tips & Tutorials</a>
          <a href="/Profile">Profile</a>
          <a href="/" onClick={handleLogout}>
            Logout
          </a>
        </div>
      </nav>
    
      <div id="main">
        {
            tipID === 0?
            <div id="list">
                <div id="title">
                    <h1>Tips and tutorials</h1>
                    <p>Get practical, step-by-step answers to all things crypto</p>
                </div>
                <div id="mycard-grid">
                    <div className="mycard" onClick={()=>setTipID(1)}>
                    <div className="picture">
                        <img
                        src="https://images.ctfassets.net/q5ulk4bp65r7/3nIT36ObLVXq6CIlnXLmXv/d1d5bde731457c87808aca7cc69a984d/what-are-nfts.png?w=768&fm=png"
                        alt=""
                        />
                    </div>
                    <div className="mycard-content">
                        <h2>How do you buy an NFT? </h2>
                        <p>
                        Quick-start guide to nabbing the digital collectible of your dreams
                        </p>
                    </div>
                    </div>
                    <div className="mycard" onClick={()=>setTipID(2)}>
                    <div className="picture">
                        <img
                        src="https://images.ctfassets.net/q5ulk4bp65r7/5wgZmGhDLxwejh5MDDxRAn/aa73d7119d45e95ab417b9ae5e5e8f56/Video_02.png?w=768&fm=png"
                        alt=""
                        />
                    </div>
                    <div className="mycard-content">
                        <h2>How to set up a crypto wallet </h2>
                        <p>
                        Learn about different kinds of crypto wallets and how to set them up.
                        </p>
                    </div>
                    </div>
                    <div className="mycard"  onClick={()=>setTipID(3)}>
                    <div className="picture">
                        <img
                        src="https://images.ctfassets.net/q5ulk4bp65r7/63o0Mbwyiqcqq8CLZKToLs/4d007f0923a20999c6c4765d6fdc35bf/Donating-Crypto.png?w=768&fm=png"
                        alt=""
                        />
                    </div>
                    <div className="mycard-content">
                        <h2>How to donate crypto</h2>
                        <p>
                        Bitcoin, ETH, and other cryptocurrencies can make your giving go
                        farther. Plus: 15 nonprofit orgs that accept crypto
                        </p>
                    </div>
                    </div>
                    <div className="mycard" onClick={()=>setTipID(4)}>
                    <div className="picture">
                        <img
                        src="https://images.ctfassets.net/q5ulk4bp65r7/17lOB5yasBrHeYboCtkgh6/2cc330655a4443711570e8e222b412c2/Earning-Rewards.png?w=768&fm=png"
                        alt=""
                        />
                    </div>
                    <div className="mycard-content">
                        <h2>How to earn crypto rewards</h2>
                        <p>
                        From staking to lending, five of the best ways to grow your crypto
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            :
            tipID === 1 ?
            <TipOne></TipOne>
            :
            tipID === 2?
            <TipTwo></TipTwo>
            :
            tipID === 3?
            <TipThree></TipThree>
            :
            tipID === 4?
            <TipFour></TipFour>
            :
            ''
        }
        

      </div>
    </div>
  );
}

export default TipsAndTutorials;
