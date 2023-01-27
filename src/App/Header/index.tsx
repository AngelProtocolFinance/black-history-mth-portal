import angelLogo from "assets/icons/AP-Beta-logo.svg";
import Wallet from "./Wallet";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import ExtLink from "components/ExtLink";

export default function Header({ classes = "" }) {
  const isScrolledRef = useRef<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const _isScrolled = window.scrollY > 0;
      if (_isScrolled !== isScrolledRef.current) {
        setIsScrolled(_isScrolled);
        isScrolledRef.current = _isScrolled;
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${classes} py-3 transition ${
        isScrolled ? "bg-blue dark:bg-blue-d4 shadow-lg" : ""
      }`}
    >
      <div className="flex items-center container-padded">
        <ExtLink className="mr-auto" href="https://www.angelprotocol.io/">
          <img src={angelLogo} className="w-32 object-contain" />
        </ExtLink>
        <Wallet />
        <ThemeToggle />
      </div>
    </div>
  );
}
