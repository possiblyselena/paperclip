import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-screen">
      <Image
        src="/page.png"
        alt=""
        width={1344}
        height={3000}
        priority
        className="col-start-1 row-start-1 h-auto w-full"
      />
      <div className="col-start-1 row-start-1 flex flex-col justify-between">
        <header className="flex justify-between items-center">
          <a href="https://hackclub.com/">
            <Image
            className="hover:transform hover:scale-105 transition-transform duration-300"
            src="/hackclub.svg"
            alt="Hack Club Logo"
            width={600}
            height={100}
            />
          </a>
          <div className="flex space-x-4 mb-20">
            <a href="https://forms.hackclub.com/paper-clip-submit">
              <Image
              className="hover:transform hover:scale-105 transition-transform duration-300"
              src="/submit.svg"
              alt="submit"
              width={450}
              height={100}
              />
            </a>
            <a href="https://hackclub.enterprise.slack.com/archives/C0C6M7QJ6LW">
              <Image
              className="hover:transform hover:scale-105 transition-transform duration-300"
              src="/join.svg"
              alt="join"
              width={275}
              height={100}
              />     
            </a>
          </div>
        </header>
        <div className="flex flex-col">
          <Image
            src="/hand.svg"
            alt="waving"
            width={200}
            height={100}
            className="hand-wave self-end m-160"
          />
          <footer className="flex items-end justify-between gap-4 px-20 m-15 text-3xl">
            <a className="flex-1 text-black underline" href="https://hackclub.com/privacy-and-terms">privacy & terms</a>
            <a className="flex-1 text-black underline" href="https://forms.hackclub.com/bounty">fullfillment bounty</a>
            <p className="flex-1 text-black">some doodles made by Lola & Kaylee!</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
