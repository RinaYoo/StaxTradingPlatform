import React ,{useState,useEffect} from "react";
import EarnModal from "../../components/Dialog";
function CourseFour(props){
    const [choice,setChoice] = useState(-1);
    const answer = 4;
    const [open,setOpen] = useState(false);
    useEffect(()=>{
        if(choice===answer){
          setOpen(true);
        }
    },[choice])
    return (
        <div id="course4" >
            <div className="course">
                <h1 className="title">What is the Blockchain Trilemma?</h1>
                <img
                src="https://learn.swyftx.com/wp-content/uploads/2022/03/Blockchain-Trilemma-1.png"
                alt="What are NFTs? "
                />
                <p>
                The blockchain trilemma is a widely accepted theory that blockchains can
                only provide two out of three benefits at any one time in relation to
                decentralization, scalability, and security. This article will explain
                what the blockchain trilemma is and explore the current attempts to
                address it within the blockchain industry.
                </p>
                <h2>What is a trilemma?</h2>
                <p>
                Before we dive into what the blockchain trilemma is, it’s important to
                first understand what a “trilemma” is. In this context, a trilemma is
                having three elements that are highly desirable, but only being able to
                prioritise two out of the three.
                </p>
                <p>
                A great example is the project management triangle (time, quality, and
                cost), which is widely used, even outside of project management. For
                instance, if you were to hire a graphic designer to create a logo for your
                company, you could have a high-quality logo done quickly, but it would
                cost a lot. Or you could have a logo created quickly and cheaply, but it
                wouldn’t be high-quality.
                </p>
                <h2>What is the blockchain trilemma?</h2>
                <p>
                The term “blockchain trilemma” was coined by Ethereum co-founder, Vitalik
                Buterin, to describe three core issues that developers face when creating
                blockchains. The three elements of the blockchain trilemma are
                decentralization, security, and scalability (Figure 1). As with the
                previous example, only two can be prioritised. To use Bitcoin as an
                example, decentralization and security were prioritised in its
                development, which means that scalability was sacrificed.
                </p>
                <p>
                <img
                    src="https://learn.swyftx.com/wp-content/uploads/2022/03/Figure1-1.png"
                    alt=""
                />
                </p>
                <p>
                <em>Figure 1 – Crypto projects and the blockchain trilemma</em>
                </p>
                <p>
                There are a number of very technical reasons as to why it’s difficult to
                achieve balance between security, decentralization, and scalability. For
                the purpose of this piece, let’s just say that the three elements are
                intrinsically linked, and therefore if you alter one element you alter the
                others.
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
                <h2>The three elements of the blockchain trilemma</h2>
                <h3>Decentralization</h3>
                <p>
                Decentralization is one of the foundations of cryptocurrency and
                blockchain technology. A decentralized blockchain is one that operates
                across a wide network of computers or nodes. This system means that there
                is no central entity, such as a bank, that can control the decentralized
                network. In essence, blockchains distribute control equally between
                participants.
                </p>
                <p>
                There is generally a positive relationship between decentralization and
                network security because there is no longer one point of failure, rather
                the security of the network is distributed amongst many powerful
                computers. Unfortunately, achieving a high level of decentralization
                usually has a negative impact on the speed of a network and the number of
                transactions it can process.
                </p>
                <p>
                Cryptocurrencies like XRP and EOS prioritise speed and security, however
                this comes at the cost of decentralization. Both of these networks have
                been criticised for their lack of decentralization.
                </p>
                <h3>Security</h3>
                <p>
                Security is essential to the effective operation of cryptocurrencies and
                blockchain networks. It ensures that every piece of information on the
                network is accurate and incorruptible.
                </p>
                <p>
                Without a high level of security, a blockchain would be a bit like
                Wikipedia. It would provide access to information around the world in a
                quick and easy to use format, but with content that anyone can alter or
                delete. For this reason, people don’t keep valuable or sensitive
                information on Wikipedia, and by the same token, users are unlikely to use
                a blockchain that has poor security.
                </p>
                <p>
                In order to improve the speed and throughput of a blockchain network, it
                can be effective to reduce the number of nodes on the network, either
                geographically or in number. However, a more centralized network has far
                less security because there are fewer computers working to secure the
                network. This makes centralized blockchains more susceptible to attack.
                </p>
                <p>
                Blockchains like Nano (XNO) and IOTA are quick and have decentralized
                networks, but this comes at the cost of less security. That’s not to say
                that these networks are easy to crack by any means, but that they are a
                lot less secure than a network like Bitcoin or Ethereum.
                </p>
                <h3>Scalability</h3>
                <p>
                Scalability is the capacity a blockchain has to support high transactional
                throughput and sustain future growth of the network. This means that as
                more people start using the network the performance of the network won’t
                suffer. For example, the Visa payment network can operate efficiently
                whether 100 people are using the network or 100,000. A scalable blockchain
                would be able to do the same.
                </p>
                <p>
                Many blockchains are founded on decentralization and security. Achieving
                scalability without sacrificing security or decentralization is one of the
                major challenges for established and emerging blockchain platforms.
                </p>
                <p>
                Bitcoin and Ethereum both prioritise decentralization and security,
                however this comes at the cost of scalability. Currently the Bitcoin
                blockchain network is able to process around seven transactions per second
                (TPS) and Ethereum can process a maximum of 15 TPS. Compared to Visa,
                which processes roughly 1,700 TPS, this is clearly an area for concern,
                especially if mass blockchain adoption is to be achieved.
                </p>
                <h2>Solving the blockchain Trilemma</h2>
                <p>
                The issue of the blockchain trilemma has existed for a long time, ever
                since blockchain technology in fact. Therefore, solving this problem is
                unlikely to happen overnight. At present, there are a number of different
                solutions that have been developed or are in development. These are a
                combination of Layer 1 and Layer 2 solutions.
                </p>
                <p></p>
                <blockquote
                className="snippet-blockquote key-takeaway"
                style={{ borderLeftColor: "#fc946d" }}
                >
                <h4 className="snippet-heading" style={{ color: "#fc946d" }}>
                    Tip
                </h4>
                <div className="snippet-text">
                    <p>
                    Layer 1 solutions make improvements to networks like Bitcoin and
                    Ethereum directly. Layer 2 solutions add an extra layer on top of the
                    original network that adds functionality, such as efficient
                    transaction processing, without affecting the underlying blockchain.
                    </p>
                </div>
                </blockquote>
                <p />
                <h3>Ethereum 2.0 (aka Consensus Layer)</h3>
                <p>
                The Ethereum 2.0 upgrade (also known as Consensus Layer) is a huge
                overhaul of the Ethereum platform. This upgrade is a Layer 1 solution to
                Ethereum’s scalability issues, which will increase Ethereum’s throughput
                from 15 TPS to a theoretical maximum of 100,000 TPS.
                </p>
                <p>
                There are two key elements to how the upgrade will achieve this massive
                increase. First, the Ethereum network will move away from Proof of Work
                (PoW) and towards Proof of Stake (PoS). PoS is much faster, and it uses
                drastically less energy as well, which means it costs less for each node
                to maintain the network.
                </p>
                <p>
                Second, Ethereum will use a concept known as sharding, which will split
                the Ethereum blockchain into 64 parallel chains that will work together to
                process transactions. The result of these two factors will be a faster,
                cheaper, and infinitely more scalable Ethereum network. The downside is
                that the whole upgrade is not due to be finished until 2023.
                </p>
                <h3>The Bitcoin lightning network</h3>
                <p>
                The Bitcoin lightning network is a Layer 2 solution for the Bitcoin
                network to improve scalability. It is designed to allow users to send
                near-instant transactions between one another. It does this by taking
                certain high-frequency transactions off the main blockchain and
                broadcasting them in chunks at a later point back to the main chain, thus
                easing network congestion. The lightning network went live in 2018, and
                has since had a decent impact on the Bitcoin scalability.
                </p>
                <p>
                The lightning network, however, can only accept certain high-frequency
                transactions, which means that the bulk of transactions still remain on
                the congested Bitcoin network. Additionally, some experts criticise the
                lightning network for being less decentralized and much less secure. The
                lightning network is a good start to solving Bitcoin’s scalability issues,
                but it is not enough to solve the problem entirely.
                </p>
                <p></p>
                <blockquote
                className="snippet-blockquote key-takeaway"
                style={{ borderLeftColor: "#0072ed" }}
                >
                <h4 className="snippet-heading" style={{ color: "#0072ed" }}>
                    Did You Know?
                </h4>
                <div className="snippet-text">
                    <p>
                    There are currently over 35,000 nodes operating on the Bitcoin
                    lightning network and there has been almost 3,500 BTC sent through
                    these nodes.
                    </p>
                </div>
                </blockquote>
                <p />
                <h3>Polygon PoS</h3>
                <p>
                Polygon (MATIC) is a “decentralized Ethereum scaling platform” that offers
                a number of different scaling solutions for the Ethereum network. The most
                impressive is Polygon PoS, which is a Layer 2 solution aimed to address
                Ethereum’s scalability issue by implementing side-chains for processing
                transactions more efficiently.
                </p>
                <p>
                Polygon PoS claims to be able to process up to 65,000 TPS, which is a
                considerable step up from Ethereum’s 15 TPS. Furthermore, transaction fees
                on Polygon PoS are reportedly around 10,000 times lower than through the
                Ethereum network.
                </p>
                <p></p>
                <blockquote
                className="snippet-blockquote key-takeaway"
                style={{ borderLeftColor: "#0072ed" }}
                >
                <h4 className="snippet-heading" style={{ color: "#0072ed" }}>
                    Did You Know?
                </h4>
                <div className="snippet-text">
                    <p>
                    So far, Polygon PoS has recorded over 1.3 billion transactions between
                    130 million unique wallets and 2.7 million monthly active users. These
                    figures suggest that this scaling solution is an effective one and
                    that it is being adopted widely.
                    </p>
                </div>
                </blockquote>
                <p />
                <p>
                There are a few downsides to this solution though. First, people need to
                learn and use another platform that is not Ethereum. Second, the security
                of side-chains such as Polygon are far less that of Layer 1 networks such
                as Ethereum or Bitcoin. Third, it is seen by many as a temporary solution
                until Ethereum 2.0 (Consensus Layer) is completed.
                </p>
                <h2>Summary</h2>
                <p>
                The blockchain trilemma is a major issue for blockchain developers all
                over the world. It outlines three key blockchain elements –
                decentralization, security, and scalability – and states that one of these
                must be sacrificed in order to successfully implement the other two. There
                have currently been a number of attempts to solve the blockchain trilemma,
                but no universal solution has been found yet.
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
                        <p>What makes blockchain technology secure?</p>
                    </div>
                    <div className="quiz-answers">
                        <label>
                        <input
                            type="radio"
                            name="question_answer_4"
                            defaultValue={0}
                            className="quiz-radio"
                            onClick={()=>setChoice(0)}
                            disabled = {choice === answer}
                        />
                        Consensus algorithms
                        </label>
                        <label>
                        <input
                            type="radio"
                            name="question_answer_4"
                            defaultValue={1}
                            className="quiz-radio"
                            onClick={()=>setChoice(1)}
                            disabled = {choice === answer}
                        />
                        Decentralization
                        </label>
                        <label>
                        <input
                            type="radio"
                            name="question_answer_4"
                            defaultValue={2}
                            className="quiz-radio"
                            onClick={()=>setChoice(2)}
                            disabled = {choice === answer}
                        />{" "}
                        Immutability
                        </label>
                        <label>
                        <input
                            type="radio"
                            name="question_answer_4"
                            defaultValue={3}
                            className="quiz-radio"
                            onClick={()=>setChoice(3)}
                            disabled = {choice === answer}
                        />{" "}
                        Cryptography
                        </label>
                        <label>
                        <input
                            type="radio"
                            name="question_answer_4"
                            defaultValue={4}
                            className="quiz-radio"
                            onClick={()=>setChoice(4)}
                            disabled = {choice === answer}
                        />{" "}
                        All of the above
                        </label>
                    </div>
                    {
                        choice!==-1 && choice !== answer?
                        <div className="quiz-descriptions">
                            <div className="wrong">Oops! Try again.</div>
                            <p>
                            Blockchain technology utilises a number of mechanisms such as
                            consensus, decentralization, immutability, and cryptography that
                            all work together to ensure the highest level of security.
                            </p>
                        </div>
                        :
                        ""
                    }
                    
                    </div>
                </div>
                </div>
            </div>
      <EarnModal open = {open} setOpen = {setOpen}></EarnModal>

            </div>

    )
}

export default CourseFour;