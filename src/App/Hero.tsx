import { app } from "constants/config";
import heroBanner from "assets/images/banner.png";

export default function Hero() {
  return (
    <header className="bg-grey dark:bg-grey">
      <img
        src={heroBanner}
        className="object-contain object-top w-full opacity-60 md:opacity-80"
      />
    </header>
  );
}
