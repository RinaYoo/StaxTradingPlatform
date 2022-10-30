import React, { useEffect, useState ,useContext,useLayoutEffect} from "react";
import EarnModal from "../../components/Dialog";
import { doc, getDoc,updateDoc } from "firebase/firestore"; 
import {db} from '../../firebase'
import { AuthContext } from "../../context/AuthContext";
import { getAuth } from "firebase/auth";

function CourseThree(props){
  const quizDocID =   "ZGOlyDn99deLLu7Awj62";
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
        <div id="course3" >
            <div className="course">
                <h1 className="title">What Makes a Blockchain Secure?</h1>
                <img
                src="https://learn.swyftx.com/wp-content/uploads/2022/05/Blockchain-security-1.png"
                alt="What are NFTs? "
                />
                <p>
                As we approach the height of the digital age, internet users are more
                prone to cyber-attacks and malicious activity than ever before. Having
                reliable security is essential to all computer and network systems.
                </p>
                <p>
                Blockchain is the backbone of cryptocurrency, and this technology is being
                adopted in a wide range of industries such as finance, healthcare, supply
                chains, and more. A major factor behind the popularity of blockchain is
                its inherent data security mechanisms including cryptography,
                decentralization, and consensus. This article will explain the mechanisms
                behind blockchain security, and the risks associated when incorrectly
                implemented.
                </p>
                <h2>What is a blockchain?</h2>
                <p>
                A blockchain is a digital ledger of transactions that uses a distributed
                network of peer-to-peer computer systems. Each block contains transaction
                data, a timestamp, and the cryptographic hash of the previous block. This
                infrastructure allows blocks to be linked together in a chain, which makes
                altering data extremely difficult as the data in all subsequent blocks
                will also need to be altered.
                </p>
                <h2>Decentralization</h2>
                <p>
                Decentralization plays an important role in blockchain technology. Having
                a decentralized system means that there is no central entity in control,
                making hacking or corruption difficult. Traditionally, data is stored in a
                centralized database. In this system, anyone who gains access to that
                database will have complete control over the data. In a decentralized
                system, all participants have a copy of the ledger. If one ledger is
                corrupted, it can be identified by comparing it with other copies and the
                corrupted ledger will be rejected. However, prioritising decentralization
                can sometimes come at the cost of security or scalability, which is known
                as the blockchain trilemma.
                </p>
                <h2>Consensus</h2>
                <p>
                In a centralized system, only one entity is responsible for updating the
                database. Decentralized systems like blockchain use consensus mechanisms
                to determine how the next block of transactions are verified and added.
                Consensus mechanisms are a set of rules for network participants to follow
                to ensure authentic transactions. There are many different types of
                consensus mechanisms around, each influencing the amount of energy used,
                transaction speed and cost, and how to participate on the network.
                </p>
                <p></p>
                <blockquote
                className="snippet-blockquote key-takeaway"
                style={{ borderLeftColor: "#fc946d" }}
                >
                <h4 className="snippet-heading" style={{ color: "#fc946d" }}>
                    Interesting Fact
                </h4>
                <div className="snippet-text">
                    <p>
                    If an attacker controls 51% of the network, they can undermine the
                    network. This is also known as a 51% attack. Consensus mechanisms are
                    in place to make this attack less feasible and often less rewarding.
                    </p>
                </div>
                </blockquote>
                <p />
                <h3>Proof of Work (PoW)</h3>
                <p>
                Proof of Work is a common consensus mechanism used by the most popular
                cryptocurrency, Bitcoin. Miners are participants in the network that are
                verifying transactions and solving computational puzzles, who compete
                against each other. The first miner to solve the puzzle will add a block
                of transactions onto the Bitcoin blockchain and will receive a
                predetermined amount of digital currency native to the blockchain protocol
                they’re mining on.
                </p>
                <p>
                In addition to block rewards, miners are also rewarded in transaction fees
                by verifying transactions in the block, which network users will pay.
                </p>
                <p>
                A huge benefit of the PoW mechanism is that an attacker on the network
                would need to acquire 51% of the total mining power, making it nearly
                impossible to achieve. The more miners competing on the network, the
                greater the overall mining power, resulting in a more secure blockchain.
                </p>
                <p>
                Since only one miner can solve the puzzle, all the computing power and
                energy consumed from other miners will be wasted. This is one of the
                reasons why PoW blockchains like the Bitcoin network (BTC) are extremely
                energy-intensive, leaving a large environmental footprint.
                </p>
                <h3>Proof of Stake (PoS)</h3>
                <p>
                Popular cryptocurrencies such as Solana and Cardano use a different
                consensus mechanism called Proof of Stake. Instead of having every miner
                use energy to solve block problems, validators are selected by algorithms
                to validate transactions and mint/forge the next block to receive staking
                rewards. To be selected, a validator must stake a certain amount of
                cryptocurrency for a period – the more cryptocurrency you stake, the more
                likely you will be selected to validate the next block.
                </p>
                <p>
                Proof of Stake also aims to solve the 51% problem. An attacker would need
                to acquire 51% of the total staked cryptocurrency and the blockchain
                network’s mining power, however, anyone attempting malicious activity
                would lose all their staked cryptocurrency.
                </p>
                <p>
                A downside to PoS is that the model benefits whoever stakes the most
                cryptocurrency, leaning more towards centralization and favouring those
                with larger volumes of cryptocurrency.
                </p>
                <img
                src="https://learn.swyftx.com/wp-content/uploads/2022/06/Pow-v-pos-1.png"
                style={{ maxWidth: 720, maxHeight: "initial" }}
                alt=""
                />
                <p>
                <em>Figure 1 – Proof of Work vs Proof of Stake </em>
                </p>
                <h2>Immutability</h2>
                <p>
                Blockchain technology is well known for its immutability. Once a
                transaction has been verified, it is near impossible for an entity to
                manipulate the data on the network. This enables a high degree of data
                integrity, which leads to increased trust and reliability.
                </p>
                <p>
                A downside to immutability is that it does not account for human error. If
                a transaction was made to the incorrect address, there is no way to
                reverse that transaction. Making a transaction on the blockchain can be
                intimidating, especially when you’re new to the space. Our article on
                withdrawing and depositing cryptocurrencies has all the information you
                need to help you choose the right network and begin making transactions.
                </p>
                <h3>Cryptography </h3>
                <p>
                Cryptography is a key element to blockchain technology and is utilised in
                securing transactions, ledgers, smart contracts and wallets on the
                blockchain. Blockchain makes use of two types of cryptographic algorithms:
                hash functions and asymmetric cryptography.
                </p>
                <h3>Hash functions</h3>
                <p>
                Hash functions are algorithms that receive input data of any length and
                output a unique value at a fixed length. If the input data was changed,
                the resulting output will be drastically different. The length of the
                output is dependent on the algorithm used. SHA-256 (Secure Hashing
                Algorithm) is a hash function used by Bitcoin that consistently has an
                output length of 256 bits.
                </p>
                <p>
                Scrypt is another hashing algorithm used by Litecoin and is proven to use
                less resources and generate blocks quicker. Some have argued that Scrypt’s
                simpler algorithm makes it more susceptible to security issues, however,
                there has yet to be a security breach or instance of reverse engineering.
                </p>
                <p>
                In a blockchain network, each block that’s added to the blockchain stores
                the hash value of the previous block. If data were to be manipulated, the
                hash values on subsequent blocks would change as well, creating a domino
                effect. Other users on the network would easily be able to identify the
                blockchain that has been tampered with and reject it.
                </p>
                <p></p>
                <blockquote
                className="snippet-blockquote key-takeaway"
                style={{ borderLeftColor: "#fc946d" }}
                >
                <h4 className="snippet-heading" style={{ color: "#fc946d" }}>
                    Interesting Fact
                </h4>
                <div className="snippet-text">
                    <p>
                    Cryptocurrency DigiByte (DGB) uses five different hashing algorithms,
                    this helps prevent miners from grouping together and becoming
                    centralized.
                    </p>
                </div>
                </blockquote>
                <p />
                <h3>Asymmetric cryptography</h3>
                <p>
                Asymmetric cryptography makes use of a public key and a private key. A
                public key can be a wallet address and is available to everyone, whereas a
                private key is kept secure and never lost. Information sent to an address
                will be encrypted with its public key, and only the private key can
                decrypt the information. However, you won’t be able to derive the private
                key from the public key.
                </p>
                <p>
                In a secure blockchain network, public keys are wallet addresses that any
                user can send cryptocurrencies to, but only the user with the private key
                is able to withdraw and transfer money from it.
                </p>
                <p>
                Digital signatures are built on asymmetric cryptography and are essential
                in blockchain. Digital signatures are impossible to forge, as they are
                encrypted using a user’s private key. When a transaction is requested, it
                is hashed using a hash function and encrypted with the sender’s private
                key, creating a digital signature.
                </p>
                <p>
                The signature is attached to the transaction and sent off to a miner for
                verification. The miner verifies that the signature is authentic by
                passing the transaction through the same hash function and decrypting the
                signature with the sender’s public key. If the hash values of both the
                transaction and the signature are the same, the transaction is authentic.
                </p>
                <h3>The Repercussions of Poor Blockchain Security</h3>
                <p>
                Blockchain’s infrastructure is seen as secure, but poor implementation of
                this technology can cause major security vulnerabilities. Most of these
                vulnerabilities are caused by human error in the underlying code of the
                blockchain and if left unchecked could lead to double spending, private
                key leakage, frozen assets and more. Below are two real world examples of
                blockchain security issues and breaches.
                </p>
                <p>
                A decentralized autonomous organization (DAO) is a decentralized
                governance system that runs on the blockchain network, and the code is
                publicly available. In 2016, the Ethereum DAO was attacked, resulting in
                3.6 million ETH being stolen. The attacker found a loophole in the DAO’s
                code, which allowed them to reuse the same DAO tokens repeatedly.
                </p>
                <p>
                Proof of Work consensus mechanisms have their vulnerabilities too. If more
                than 50% of the mining power is controlled by a single entity, they have
                the power to manipulate transactions and double spend coins. In 2019,
                Ethereum Classic (ETC); a hard fork of Ethereum (ETH), suffered from a 51%
                attack with an estimated loss of US$1.1M after the attacker carried out
                double-spending transactions on several exchanges. A major cryptocurrency
                like Bitcoin has extremely high mining power, making it less susceptible
                to 51% attacks.
                </p>
                <h2>Blockchain security in other industries</h2>
                <p>
                Blockchain technologies are proven to be very secure and difficult to
                manipulate, and is now being applied to various industries other than
                cryptocurrency.
                </p>
                <h3>Current Applications</h3>
                <p>
                Enormous amounts of cash flow through centralized banks, which makes them
                attractive targets to cybercriminals. JP Morgan is considered the largest
                financial institution in the U.S. and currently uses a blockchain-based
                platform called Quorum to process private transactions.
                </p>
                <p>
                In the healthcare industry, patients are trusting companies with private
                and sensitive information. Having a weak cybersecurity system will expose
                this data to cybercriminals, which can be used to extort hospitals and
                patients for money. Hospitals are now starting to partner with tech
                companies to secure their data using blockchain technology. Hashed Health
                is a healthcare innovation firm, working to build secure digital
                blockchain networks for healthcare companies and hospitals.
                </p>
                <p></p>
                <blockquote
                className="snippet-blockquote key-takeaway"
                style={{ borderLeftColor: "#0072ed" }}
                >
                <h4 className="snippet-heading" style={{ color: "#0072ed" }}>
                    Interesting Fact
                </h4>
                <div className="snippet-text">
                    <p>
                    Cryptocurrency DigiByte (DGB) uses five different hashing algorithms,
                    this helps prevent miners from grouping together and becoming
                    centralized.
                    </p>
                </div>
                </blockquote>
                <p />
                <h3>Future Possibilities</h3>
                <p>
                Blockchain is making a large impact. Various industries are already
                implementing its technology to secure their data. In a world driven by big
                data, having a secure network is more important than ever.
                </p>
                <p>
                Blockchain systems will continually evolve and expand to more industries
                to provide data integrity and security. Blockchain could very well be the
                new form of data storage. As this technology grows, we could see every
                small business operating on their own private blockchain network.
                </p>
                <h2>Summary</h2>
                <p>
                Blockchain has come a long way since its conceptualisation as Bitcoin in
                2008. Because of its inherently secure framework, various industries are
                adopting this technology. Being decentralized gives control to the users
                and removes a central point of attack. Cryptography and digital signatures
                keep transactions on the network authentic and secure, and the use of hash
                functions makes blockchain technology immutable, providing high data
                integrity and increased trust in the network.
                </p>
                <p>
                Repercussions of poorly implemented blockchain can be detrimental.
                Attackers can expose loopholes and exploit bugs in the code, resulting in
                data manipulation, double spending and private key theft. As long the
                underlying code of a blockchain undergoes thorough tests and audits, it
                will be safe to use in any industry.
                </p>
                <div>
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
                            The blockchain trilemma is a widely accepted theory that
                            blockchains can only provide two out of three benefits at any one
                            time in relation to decentralization, scalability, and security.
                            </p>
                        </div>
                        :
                        ''
                    }
                    
                    </div>
                </div>
                </div>
            </div>
      <EarnModal open = {open && !solved} setOpen = {setOpen}></EarnModal>

            </div>

    )
}

export default CourseThree;