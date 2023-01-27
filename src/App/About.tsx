import ExtLink from "components/ExtLink";

const About = ({ classes = "" }) => {
  return (
    <article className={`container-padded ${classes}`}>
      <div className="max-w-5xl">
        <h3 className="font-extrabold text-3xl sm:text-4xl mb-4 mt-6">
          Who We Are
        </h3>
        <p className="leading-relaxed">
          Angel Protocol enables charities to benefit from Web3 technology,
          community, and philanthropy. 100% of donations go to charity,
          transparently onchain, to their own non-custodial multisig wallets.
          Donations help build an endowment invested in a balanced portfolio of
          DeFi yield that keeps growing and giving, forever.
        </p>
        <p className="leading-relaxed my-4">
          Angel Protocol charges no set-up or donation processing fees, so
          charities have a free way to accept cryptocurrency donations and
          experience the benefits & generosity Web3 can provide.
        </p>
        <p className="leading-relaxed">
          Our Angel Impact Funds empower changemakers like social entrepreneurs
          to fundraise, coordinate, and invest capital through treasury
          management, collaborative governance, and capital deployment. We offer
          multiple governance options, voting systems, and operational tools,
          allowing capital to be programmed in new and innovative ways.
        </p>
        <p className="leading-relaxed my-4">
          Thanks to community efforts from contributors such as yourself, we
          were able to raise $1.5M for climate change with our{" "}
          <ExtLink href="https://restore-earth.angelprotocol.io">
            Restore Earth campaign
          </ExtLink>
          . Additionally, we were able to raise $500K for{" "}
          <ExtLink href="https://www.youtube.com/watch?v=h3wLfQLb8_4">
            Typhoon Rai disaster relief efforts
          </ExtLink>{" "}
          in the Philippines and $200K for{" "}
          <ExtLink href="https://ukraine.angelprotocol.io/">Ukraine</ExtLink>.
          With your support, we can raise even more advance equity and social
          justice.
        </p>
        <p className="leading-relaxed">
          By donating now, you become part of a global, community-owned charity
          dedicated to democratizing opportunity for changemakers worldwide.
          Thank you.
        </p>
      </div>
    </article>
  );
};

export default About;
