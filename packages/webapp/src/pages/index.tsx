import { useWeb3Modal } from "@web3modal/react";
import { type NextPage } from "next";
import Head from "next/head";
import { useAccount } from "wagmi";
import { CreateGameModal } from "../components/modals/createGameModal";
import { JoinGameModal } from "../components/modals/joinGameModal";
import { MintGameModal } from "../components/modals/mintDeckModal";
import { useIsMounted } from "../hooks/useIsMounted";

const Home: NextPage = () => {
  const isMounted = useIsMounted();
  const { address } = useAccount();
  const { open } = useWeb3Modal();

  return (
    <>
      <Head>
        <title>0xFable</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="font-serif text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="font-mono font-light text-red-400">0x</span>FABLE
          </h1>

          {address && isMounted && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
              <CreateGameModal />
              {/* <JoinGameModal /> */}
              <MintGameModal />
            </div>
          )}

          {!address && isMounted && (
            <div className="">
              <button
                className="btn-lg btn border-2 border-yellow-500 normal-case hover:scale-105 hover:border-yellow-400"
                onClick={() => {
                  open();
                }}
              >
                Connect Wallet
              </button>
            </div>
          )}

          {address && isMounted && (
            <div className="">
              <button
                className="btn-glass btn normal-case"
                onClick={() => open()}
              >
                Hello Adventurer, {address}
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
