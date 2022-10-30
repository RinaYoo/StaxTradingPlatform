import React,{useEffect, useLayoutEffect, useState,useContext} from "react";
import EarnModal from "../../components/Dialog";
import { doc, getDoc,updateDoc } from "firebase/firestore"; 
import {db} from '../../firebase'
import { AuthContext } from "../../context/AuthContext";
import { getAuth } from "firebase/auth";


function CourseOne(props){
    const quizDocID =   "AjUwy3RjIzJgU3QTpjaC";
    const [choice,setChoice] = useState(-1);
    const [open,setOpen] = useState(false);
    const [solved,setSolved] = useState(false);

    const [answer,setAnswer] = useState(-2);
    const [choices,setChoices] = useState([]);
    const [learnedCourses,setLearnedCourses] = useState([]);
    const [quiz,setQuiz] = useState({});
    const docRef = doc(db, "quiz",quizDocID);
    const auth = getAuth();
    const currentUser = useContext(AuthContext)
    const [user,setUser] = useState({});
    const userDocRef = doc(db,"users",currentUser.currentUser.uid);

    useEffect(()=>{
        
        getDoc(docRef).then((snapshot)=>{
            if (snapshot.exists()) {
              let quizDoc = snapshot.data();
              setAnswer(quizDoc.answer);
              setChoices(quizDoc.choices);
              setQuiz(quizDoc);
              getDoc(userDocRef).then((resp)=>{
                let doc = resp.data();
                console.log(doc)
                setLearnedCourses(doc.courses);
                setUser(doc);
                for(let course of doc.courses){
                    if(course===quizDocID){
                        alert("You have been learned this course");
                        setSolved(true);
                        setChoice(quizDoc.answer);
                        break;
                    }
                }
              })
              
            } else {
              console.log("No such document!");
            }
          })
        
    },[]);
    useLayoutEffect(()=>{
        
        if(choice===answer && !solved){
            setOpen(true);
            learnedCourses.push(quizDocID);
            updateDoc(userDocRef,{
                courses:learnedCourses,
                reward:quiz.reward + user.reward  
            });
        }
    },[choice]);


    return (
        <div id="course1" >
        <div className="course">
            <h1 className="title">What is forex?</h1>
            <h2>Chapter 1: What is forex?</h2>
            <p>
            Of all the financial markets, forex is the biggest. Roughly $4 trillion is
            traded globally every working day. And in many ways it’s the easiest to
            get your head around.
            </p>
            <p>
            ‘Forex’ or ‘FX’ stands for ‘foreign exchange’. You sell the currency you
            are holding, let’s say Pounds Sterling, and buy another one, let’s say US
            Dollars.
            </p>
            <p>
            And, just like when you buy your currency when you go abroad on holiday,
            the bank, post office or foreign exchange booth at the airport will quote
            two prices: one to sell you the US Dollars, and another to buy them from
            you and pay you Sterling.
            </p>
            <p>
            The bulk of forex trading involves just three currencies – US Dollars,
            Euro and Japanese Yen. (For example, selling US Dollars to buy Euros,
            selling Euros to buy Yen and so on.) But of course forex trading can take
            place between any two of the many currencies used around the world.
            </p>
            <h2>Chapter 2: Why trade forex?</h2>
            <p>
            That depends. For some, it’s about getting hold of real money – as people
            may need to obtain a currency to buy goods or services. This could include
            manufactured goods or securities, such as stocks or bonds denominated in a
            foreign currency.
            </p>
            <p>
            There’s also the investment opportunity. You could choose to buy a foreign
            currency because you may earn more interest on your money than in the
            currency you are holding.
            </p>
            <p>
            And then there’s speculation. This is about selling your “base currency”
            and buying another in the hope that – when you sell it again – you’ll end
            up with more of the currency than you started with.
            </p>
            <h2>Chapter 3: Who trades forex?</h2>
            <p>
            The biggest buyers and sellers of forex are banks. Even though they may
            trade for their own book, they are mostly carrying out deals for customers
            (who may be looking to access money, invest or speculate).
            </p>
            <p>
            Although hundreds of banks and brokers trade forex, the market is
            dominated by the ‘big five’: Citigroup, Deutsche Bank, Barclays, JP Morgan
            and UBS. Together they accounted for over half the global market turnover
            in 2015.
            </p>
            <h2>Chapter 4: Jargon busting</h2>
            <p>
            Forex is an over-the-counter (OTC) market. This means that trading doesn’t
            happen on a stock exchange, but instead between counterparties directly or
            via a matching platform.
            </p>
            <p>
            On trading screens and websites, you’ll see currencies are shown by short
            codes: for example, US Dollars is USD, Euro is EUR, Japanese Yen is JPY.
            ISO, the international standards organisation, lists 268 different
            currencies.
            </p>
            <p>
            The majority of forex trading is known as ‘spot’. This means prices are
            quoted, deals are done and the proceeds paid to the appropriate bank
            account more or less immediately.
            </p>
            <p>
            However there are also forward foreign exchange contracts. This means the
            bank or broker will agree a rate with you today, for the currency that you
            wish to buy or sell at an agreed future date.
            </p>
            <h2>Chapter 5: How to trade in forex?</h2>
            <p>
            A bank or a broker will typically give you access to their online dealing
            platform. You can then link it to your bank account and start trading.
            There are also many specialist forex trading platforms that are designed
            for private individuals to trade.
            </p>
            <h2>Chapter 6: The good and the bad</h2>
            <p>
            One big advantage in trading forex (say, compared to shares) is that you
            will always have an asset. So if you sell USD and buy EUR, at the very
            least you will hold EUR.
            </p>
            <p>
            What’s more, while you’re holding the currency you bought, you could earn
            interest on it from the bank that’s holding it for you. And if your
            position pays off you may also make a profit when you sell those euros
            back to dollars.
            </p>
            <p>
            The bad news is that exchange rates could go against you, and you lose
            money when you trade back into your base currency. You may also make no
            interest on the currency you own if interest rates are rock bottom.
            </p>
        </div>
        
        <div className="quiz-container-wrapper">
                    <div
                    className="quiz-question-container"
                    data-qa="question_answer_1"
                    data-qtype="S"
                    >
                    <div className = {`quiz-question ${choice===-1 ?'': choice === answer ? 'correct-result':'wrong-result'}`}>
                        <h2>Question</h2>
                        <p>{quiz.title}</p>
                    </div>
                    <div className="quiz-answers">
                        {
                            choices.map((item,index)=>
                            <label>
                                <input
                                    key = {index}
                                    type="radio"
                                    
                                    className="quiz-radio"
                                    onClick={()=>setChoice(index)}
                                    checked = {choice === index}
                                    disabled = {choice === answer || solved}
                                />
                                {" "+item}
                            </label>)
                        }
                    </div>
                    {
                        choice!==-1 && choice !== answer ?
                        <div className="quiz-descriptions">
                            <div className="wrong">Oops! Try again.</div>
                            <p>
                                Not correct answer, please try again
                            </p>
                        </div>
                        :
                        ''
                    }
                    
                    </div>
                </div>
        <EarnModal open = {open && !solved} setOpen = {setOpen}></EarnModal>
        </div>
        

    )
}

export default CourseOne;