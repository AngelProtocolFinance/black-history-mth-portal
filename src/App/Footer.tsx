import Icon from "components/Icon";
import { angelSocials } from "constants/constants";

const Footer = () => {
  return (
    <footer className="bg-blue dark:bg-blue-d4 p-16 text-white">
      <div className="container-padded">
        <div className="flex gap-4 items-center mb-4">
          <a
            className="hover:text-orange-l3"
            target="_blank"
            href={angelSocials.twitter}
          >
            <Icon type="twitter" size={25} />
          </a>
          <a
            className="hover:text-orange-l3"
            target="_blank"
            href={angelSocials.telegram}
          >
            <Icon type="telegram" size={25} />
          </a>
          <a
            className="hover:text-orange-l3"
            target="_blank"
            href={angelSocials.youtube}
          >
            <Icon type="youtube" size={32} />
          </a>
          <a
            className="hover:text-orange-l3"
            target="_blank"
            href={angelSocials.medium}
          >
            <Icon type="medium" size={25} />
          </a>
          <a
            className="hover:text-orange-l3"
            target="_blank"
            href={angelSocials.discord}
          >
            <Icon type="discord" size={30} />
          </a>
        </div>

        <a
          className="block mb-4 hover:text-orange-l3"
          href="https://angelprotocol.io/docs/litepaper-introduction/"
          target="_blank"
          rel="noreferrer"
        >
          LITEPAPER
        </a>
        <p className="text-xs text-white dark:text-gray">
          COPYRIGHT 2022 ANGEL PROTOCOL. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
