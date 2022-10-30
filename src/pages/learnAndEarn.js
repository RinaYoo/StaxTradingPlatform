import React, { Component,useState} from "react";
import { getAuth, signOut } from "firebase/auth";
import CourseOne from "./courses/courseOne";
import CourseTwo from "./courses/courseTwo";
import CourseThree from "./courses/courseThree";
import CourseFour from "./courses/courseFour";
import { Button } from "@mui/material";
import "../styles/learn&earn.css";

function LearnAndEarn() {
  const auth = getAuth();
  const [courseID,setCourseID] = useState(0);

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
      {
        courseID === 0 ? 
        <div id="wrapper">
          <div id="boardBG">
            <div>
              <h1>Learn about crypto and get rewards</h1>
              <p>
                Discover how specific cryptocurrencies work — and get a bit of each
                crypto to try out for yourself.
              </p>
            </div>
          </div>
          <div id="boards">
            <div className="board">
              <img
                src="https://published-assets.coinbase.com/processed/8d/bc/8dbc46f7-85bb-4b3c-825e-c0f085a63bca"
                alt=""
              />
              <div className="board-content">
                <img
                  src="https://published-assets.coinbase.com/processed/62/36/62365d11-b992-47f4-beed-588a457f71ed"
                  alt=""
                />
                <h3 className="board-content-title">Forex</h3>
                <p className="board-content-desc">
                  What is forex? Why trade forex? Who trades forex?
                </p>
                <div className="board-content-footer">
                  <Button variant="contained"
                    className="btn btn-primary"
                    style={{ fontFamily: "coinBaseSans" }}
                    onClick = {()=>setCourseID(1)}
                  >
                    Start Course
                  </Button>
                  <span className="reward">Earn $2</span>
                </div>
              </div>
            </div>
            <div className="board">
              <img
                src="https://learn.swyftx.com/wp-content/uploads/2021/08/What-blockchain-technology-1.png"
                alt=""
              />
              <div className="board-content">
                <img
                  src="https://learn.swyftx.com/wp-content/uploads/2021/08/What-blockchain-technology-1.png"
                  alt=""
                />
                <h3 className="board-content-title">What is Blockchain Technology?</h3>
                <p className="board-content-desc">
                  What is Blockchain Technology? How did blockchain start? How does
                  blockchain work?
                </p>
                <div className="board-content-footer">
                  <Button variant="contained"
                    className="btn btn-primary"
                    style={{ fontFamily: "coinBaseSans" }}
                    
                    onClick={()=>setCourseID(2)}
                  >
                    Start Course
                  </Button>
                  <span className="reward">Earn $2</span>
                </div>
              </div>
            </div>
            <div className="board">
              <img
                src="https://learn.swyftx.com/wp-content/uploads/2022/05/Blockchain-security-1.png"
                alt=""
              />
              <div className="board-content">
                <img
                  src="https://learn.swyftx.com/wp-content/uploads/2022/05/Blockchain-security-1.png"
                  alt=""
                />
                <h3 className="board-content-title">What Makes a Blockchain Secure?</h3>
                <p className="board-content-desc">
                  What is a blockchain? Decentralization Consensus
                </p>
                <div className="board-content-footer">
                  <Button variant="contained"
                    className="btn btn-primary"
                    style={{ fontFamily: "coinBaseSans" }}
                    
                    onClick={()=>setCourseID(3)}
                  >
                    Start Course
                  </Button>
                  <span className="reward">Earn $2</span>
                </div>
              </div>
            </div>
            <div className="board">
              <img
                src="https://learn.swyftx.com/wp-content/uploads/2022/03/Blockchain-Trilemma-1.png"
                alt=""
              />
              <div className="board-content">
                <img
                  src="https://learn.swyftx.com/wp-content/uploads/2022/03/Blockchain-Trilemma-1.png"
                  alt=""
                />
                <h3 className="board-content-title">
                  What is the Blockchain Trilemma?
                </h3>
                <p className="board-content-desc">
                  What is a trilemma? What is the blockchain trilemma? The three
                  elements of the blockchain trilemma
                </p>
                <div className="board-content-footer">
                  <Button variant="contained"
                    className="btn btn-primary"
                    style={{ fontFamily: "coinBaseSans" }}
                    onClick={()=>setCourseID(4)}
                  >
                    Start Course
                  </Button>
                  <span className="reward">Earn $2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        courseID === 1?
        <CourseOne></CourseOne>
        :
        courseID === 2?
        <CourseTwo></CourseTwo>
        :
        courseID === 3 ?
        <CourseThree></CourseThree>
        :
        courseID === 4 ?
        <CourseFour></CourseFour>
        :
        ''
      }

    </div>
  );
}

export default LearnAndEarn;
