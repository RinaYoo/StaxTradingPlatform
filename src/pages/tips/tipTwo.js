import React from "react";

function TipTwo(props){
    return (
        <div id="tip2" className="tip" style={{ display: "none" }}>
            <h1 className="title">How to set up a crypto wallet</h1>
            <p className="subTitle" />
            <iframe
                src="https://www.youtube.com/embed/byNNauAJrKI?autoplay=1"
                frameBorder={0}
                allowFullScreen=""
                title="How to set up a crypto wallet"
                loading="auto"
                className="VideoYoutube__Iframe-sc-1bm07uh-0 hICKzr"
            />
            <p>
                A crypto wallet is a place where you can securely keep your crypto. There
                are many different types of crypto wallets, but the most popular ones are
                hosted wallets, non-custodial wallets, and hardware wallets.{" "}
            </p>
            <p>
                Which one is right for you depends on what you want to do with your crypto
                and what kind of safety net you want to have.
            </p>
            <p></p>
            <h2>Hosted wallets:</h2>
            <p />
            <p>
                The most popular and easy-to-set-up crypto wallet is a hosted wallet. When
                you buy crypto using an app like Coinbase, your crypto is automatically held
                in a hosted wallet. It’s called hosted because a third party keeps your
                crypto for you, similar to how a bank keeps your money in a checking or
                savings account. You may have heard of people “losing their keys” or “losing
                their USB wallet” but with a hosted wallet you don’t have to worry about any
                of that.
            </p>
            <p>
                The main benefit of keeping your crypto in a hosted wallet is if you forget
                your password, you won’t lose your crypto. A drawback to a hosted wallet is
                you can’t access everything crypto has to offer. However, that may change as
                hosted wallets start to support more features.
            </p>
            <p>How to set up a hosted wallet:</p>
            <ol>
                <li>
                <p>
                    <b>Choose a platform you trust.</b> Your main considerations should be
                    security, ease of use, and compliance with government and financial
                    regulations.
                </p>
                </li>
                <li>
                <p>
                    <b>Create your account. </b>Enter your personal info and choose a secure
                    password. It’s also recommended to use 2-step verification (also called
                    2FA) for an extra layer of security.
                </p>
                </li>
            </ol>
            <p>
                <b>Buy or transfer crypto.</b>Most crypto platforms and exchanges allow you
                to buy crypto using a bank account or credit card. If you already own
                crypto, you can also transfer it to your new hosted wallet for safe keeping.{" "}
            </p>
            <p></p>
            <h1>Self-custody wallets</h1>
            <p />
            <p>
                A self-custody wallet, like Coinbase Wallet, puts you in complete control of
                your crypto. Non-custodial wallets don’t rely on a third party — or a
                “custodian” — to keep your crypto safe. While they provide the software
                necessary to store your crypto, the responsibility of remembering and
                safeguarding your password falls entirely on you. If you lose or forget your
                password — often referred to as a “private key” or “seed phrase” — there’s
                no way to access your crypto. And if someone else discovers your private
                key, they’ll get full access to your assets.
            </p>
            <p>
                Why have a non-custodial wallet? In addition to being in full control of the
                security of your crypto, you can also access more advanced crypto activities
                like yield farming, staking, lending, borrowing, and more. But if all you
                want to do is buy, sell, send, and receive crypto, a hosted wallet is the
                easiest solution.
            </p>
            <p>How to set up a non-custodial wallet:</p>
            <ol>
                <li>
                <p>
                    <b>Download a wallet app. </b>
                    Popular options include Coinbase Wallet.
                </p>
                </li>
                <li>
                &lt;&gt;<b>Create your account.</b>
                Unlike a hosted wallet, you don’t need to share any personal info to
                create a non-custodial wallet. Not even an email address.
                <p />
                </li>
                <li>
                <p>
                    <b>Be sure to write down your private key. </b>
                    It’s presented as a random 12-word phrase. Keep it in a secure location.
                    If you lose or forget this 12-word phrase you won’t be able to access
                    your crypto.
                </p>
                </li>
                <li>
                <p>
                    {" "}
                    <b>Transfer crypto to your wallet.</b>
                    It’s not always possible to buy crypto using traditional currencies
                    (like US dollars or Euros) with a non-custodial wallet, so you’ll need
                    to transfer crypto into your non-custodial wallet from elsewhere.{" "}
                </p>
                </li>
            </ol>
            <p>
                If you’re a Coinbase customer, you have your choice of a hosted wallet or a
                self-custody wallet. The Coinbase app, where you buy and sell crypto, is a
                hosted wallet. You can also download the standalone Coinbase Wallet app to
                take advantage of the benefits of a non-custodial wallet. Some of our
                customers have both, making it easy to buy crypto with traditional currency
                as well as participate in advanced crypto activities. Setting up either
                wallet is free.
            </p>
            <p />
            <h1>Hardware wallets</h1>
            <p />
            <p>
                A hardware wallet is a physical device, about the size of a thumb drive,
                that stores the private keys to your crypto offline. Most people don’t use
                hardware wallets because of their increased complexity and cost, but they do
                have some benefits — for example, they can keep your crypto secure even if
                your computer is hacked. However, this advanced security makes them
                inconvenient to use compared to a software wallet and they can cost upwards
                of $100 to buy.
            </p>
            <p>How to set up a hardware wallet:</p>
            <ol>
                <li>
                <p>
                    <b>Buy the hardware. </b>
                    The two most well-known brands are Ledger and Trezor.{" "}
                </p>
                </li>
                <li>
                <p>
                    <b>Install the software.</b>
                    Each brand has their own software that’s needed to set up your wallet.
                    Download the software from the official company website and follow the
                    instructions to create your wallet.
                </p>
                </li>
                <li>
                <p>
                    <b>Transfer crypto to your wallet. </b>
                    Similar to a non-custodial wallet, a hardware wallet typically doesn’t
                    allow you to buy crypto using traditional currencies (like US dollars or
                    Euros), so you’ll need to transfer crypto to your wallet.
                </p>
                </li>
            </ol>
            <p>
                Just as there are many ways to store cash (in a bank account, in a safe,
                under the bed), there are many ways to store crypto. You can keep things
                simple with a hosted wallet, have full control of your crypto with a
                non-custodial wallet, take extra precautions with a hardware wallet, or even
                have multiple types of wallets — with crypto the choice is yours.
            </p>
            </div>


    )
}
export default TipTwo;