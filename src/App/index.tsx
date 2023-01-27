import Partners from "./Partners";
import DonateHeader from "./DonateHeader";
import Metrics from "./Metrics";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import WalletContext from "contexts/WalletContext";
import ModalContext from "contexts/ModalContext";
import Donater from "./Donater";
import DonateFooter from "./DonateFooter";
import About from "./About";
import donateImage from "assets/images/banner.png";

export default function App() {
  return (
    <WalletContext>
      <ModalContext>
        <div className="grid min-h-screen bg-gray-l5 dark:bg-blue-d5">
          <Header classes="-mb-[5.439rem] z-10 sticky top-0" />
          <Hero />
          <DonateHeader classes="my-8" />
          <div className="grid lg:grid-cols-[3fr_4fr]  container-padded gap-4 my-4">
            <img
              className="h-60 lg:h-full w-full object-cover rounded"
              src={donateImage}
            />
            <Donater />
          </div>
          <DonateFooter classes="mt-4" />
          <Metrics classes="lg:my-16" />
          <Partners />
          <About classes="mb-6 mt-10" />
          <Footer />
        </div>
      </ModalContext>
    </WalletContext>
  );
}
