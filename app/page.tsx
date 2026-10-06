import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 min-h-screen">
      <Image
        src="/page.png"
        alt=""
        width={1344}
        height={3000}
        priority
        className="col-start-1 row-start-1 h-auto w-full"
      />
      <div className="col-start-1 row-start-1 relative flex flex-col justify-between">
        <header className="flex justify-between items-center px-[3%] pt-[3%]">
          <a href="https://hackclub.com/">
            <Image
            className="w-[50%] h-auto hover:scale-105 transition-transform duration-300"
            src="/hackclub.svg"
            alt="Hack Club Logo"
            width={484}
            height={194}
            />
          </a>
          <div className="flex items-center gap-[2%]">
            <a href="https://forms.hackclub.com/paper-clip-submit">
              <Image
              className="w-[15vw] h-auto hover:scale-105 transition-transform duration-300"
              src="/submit.svg"
              alt="submit"
              width={229}
              height={118}
              />
            </a>
            <a href="https://hackclub.enterprise.slack.com/archives/C0C6M7QJ6LW">
              <Image
              className="w-[10vw] h-auto hover:scale-105 transition-transform duration-300"
              src="/join.svg"
              alt="join"
              width={142}
              height={96}
              />     
            </a>
          </div>
        </header>
        <Image
          src="/hand.svg"
          alt="waving"
          width={76}
          height={85}
          className="hand-wave absolute right-[24.55%] top-[78.17%] w-[7.44%] h-auto"
        />
        <footer className="flex items-end justify-between gap-[2%] px-[6%] m-[4.5%] text-[2.2vw]">
          <a className="flex-1 text-black underline" href="https://hackclub.com/privacy-and-terms">privacy & terms</a>
          <a className="flex-1 text-black underline" href="https://forms.hackclub.com/bounty">fullfillment bounty</a>
          <p className="flex-1 text-black">some doodles made by Lola & Kaylee!</p>
        </footer>
      </div>
    </div>
  );
}
