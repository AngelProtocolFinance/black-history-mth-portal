import ExtLink from "components/ExtLink";

export default function DonateHeader({ classes = "" }) {
  return (
    <section className={`container-padded grid grid-cols-1 ${classes}`}>
      <div className="text-center grid place-items-center rounded-md border p-4 dark:bg-blue-d6 border-prim lg:my-8">
        <h1 className="text-3xl sm:text-4xl sm:leading-relaxed mt-10 font-extrabold uppercase text-center">
          Together WE CAN CREATE A MORE JUST AND EQUITABLE FUTURE
        </h1>
        <div className="sm:text-lg font-heading text-center mt-4 pb-10">
          <p className="leading-relaxed pb-10">
            Racial bias in philanthropic giving has resulted in an underfunding
            of Black communities by $2 billion. Despite this, Black led
            nonprofits and businesses outperform when equipped with the
            resources needed.
          </p>
          <a
            className="rounded-md btn-orange uppercase px-4 py-2 mb-16 mt-6 font-bold text-md"
            href="#donate_now"
          >
            Donate Now
          </a>
        </div>
      </div>
      <div className="leading-relaxed max-w-7xl mt-10">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Reflecting on the past, building for the future
        </h2>
        <p className="my-8">
          Racial inequities in America are the result of structural racism
          embedded in our historical, political, cultural, social, and economic
          systems and institutions
          <ExtLink
            className="text-blue dark:text-blue-l2 text-xs relative -top-2"
            href="https://www.bridgespan.org/insights/library/philanthropy/guiding-a-giving-response-to-anti-black-injustice"
          >
            1
          </ExtLink>
          . The effects compound and produce vastly adverse outcomes for Black
          people and other communities of color in the United States in every
          facet of life including; health, wealth, career, education, housing,
          infrastructure, criminal justice, and civic participation
          <ExtLink
            className="text-blue dark:text-blue-l2 text-xs relative -top-2"
            href="https://www.urban.org/urban-wire/how-we-should-talk-about-racial-disparities"
          >
            2
          </ExtLink>
          .
        </p>
        <p className="my-8">
          Funding Black-led nonprofits is critical to bridging this immense gap
          as Black led nonprofits statistically put more resources into
          advancing racial justice than their white-led counterparts
          <ExtLink
            className="text-blue dark:text-blue-l2 text-xs relative -top-2"
            href="https://nff.org/2022-survey-focus-racial-equity#:~:text=49%25%20percent%20of%20Black%2Dled,%25%20for%20BIPOC%2Dled%20nonprofits."
          >
            3
          </ExtLink>
          . But, racial bias is also deeply ingrained in philanthropic giving.
          Black-led organizations have 45 percent less revenue and 91 percent
          less unrestricted net assets than white-led organizations.
          Unrestricted funds are critical to nonprofit impact as it allows
          agency in how programming is designed and funds are allocated.
        </p>
        <p className="my-8">
          Despite this, Black led nonprofits have demonstrated resolve,
          resiliency, and greater efficacy dollar per dollar in their
          programming. Endowing a social change nonprofit is one of
          philanthropy’s purest expressions of power shifting4. It transfers
          some of the vast wealth of the few to the hands of the many. By
          putting wealth back under the control of frontline nonprofits and the
          communities they serve, we can give the best equipped organizations
          the financial certainty they need to deliver on their mission.
        </p>
        <p className="mt-8">
          <strong>
            Donate: $2,800, $280, $28. A dollar, 10x, or 100x, a dollar a day
            for the month of February.
          </strong>
        </p>
      </div>
    </section>
  );
}
