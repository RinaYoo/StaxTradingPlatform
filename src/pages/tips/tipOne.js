import React from "react";
function TipOne(props){

    return (
        <div id="tip1" className="tip" >
            <h1 className="title">How do you buy an NFT?</h1>
            <p className="subTitle">
                Quick-start guide to nabbing the digital collectible of your dreams
            </p>
            <img
                src="https://images.ctfassets.net/q5ulk4bp65r7/3nIT36ObLVXq6CIlnXLmXv/d1d5bde731457c87808aca7cc69a984d/what-are-nfts.png?w=768&fm=png"
                alt="What are NFTs? "
            />
            <p>
                {" "}
                From CryptoPunks to pet rocks, NFTs have been the biggest crypto story of
                2021. Buying your first digital collectible isn’t hard — it just requires a
                little guidance.
            </p>
            <p>
                <b>Here’s how buying an NFT works:</b>
            </p>
            <ul>
                <li>
                <p>
                    You’ll need an Ethereum-compatible crypto wallet and some ETH to get
                    started. Buy some ETH from an exchange like Coinbase and send it to your
                    dapp wallet in the main Coinbase app, or Coinbase Wallet (which is
                    separate from the main Coinbase app; you can download it via Apple’s App
                    Store or Google Play).
                </p>
                </li>
                <li>
                <p>
                    Follow the simple instructions to set up your wallet – which is a place
                    you can keep some of your crypto, a place to send or receive it, and
                    your portal to the growing universe of crypto apps. (You can also
                    download this Chrome extension to connect Coinbase Wallet to a web
                    browser if you’d rather browse NFTs on a computer).
                </p>
                </li>
                <li>
                <p>
                    There are lots of NFT markets, from Rarible to OpenSea. For this
                    tutorial we’ll focus on Coinbase NFT, which is a Web3 social marketplace
                    for NFTs and works a lot like a decentralized eBay. To connect your
                    wallet to Coinbase NFT, go to nft.coinbase.com, then click on “Sign In”
                    — you’ll be prompted (and given instructions) to connect your wallet.
                </p>
                </li>
                <li>
                <p>
                    Get browsing! Prices range from essentially free to hundreds of
                    thousands of dollars or more for a rare item. Some items are sold via
                    auction, while others can be snagged immediately via a “Buy now” button.
                </p>
                </li>
                <li>
                <p>
                    Even if the NFT is free or cheap, you’ll still have to pay fees to make
                    the transaction happen. All of the digital collectibles on Coinbase NFT
                    use the Ethereum blockchain, and the network charges a “gas” fee for
                    transactions like NFT sales. Gas prices rise and fall depending on how
                    busy the network is.{" "}
                </p>
                </li>
                <li>
                <p>
                    Choose an NFT you like and make sure you have extra ETH to cover fees.
                    Once you buy it, you can access the NFT via your crypto wallet until you
                    decide to sell it.
                </p>
                </li>
                <li>
                <p>
                    For an in-depth guide on how to buy an NFT on Coinbase NFT using
                    Coinbase Wallet, check out this article.
                </p>
                </li>
            </ul>
            </div>
    )
}
export default TipOne;