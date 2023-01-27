import ExtLink from "components/ExtLink";

// Partner images imported
import partner1 from "assets/images/partners/BWN.png";
import partner2 from "assets/images/partners/Bloc.png";
import partner3 from "assets/images/partners/HipHopForChange.jpg";
import partner4 from "assets/images/partners/TeachersLikeMe.jpg";

const Partners = ({ classes = "" }) => {
  return (
    <section className={`container-padded ${classes}`}>
      <article className="max-w-5xl">
        <h3 className="font-extrabold text-3xl sm:text-4xl mb-4 mt-6">
          Black History Month Partners
        </h3>
      </article>
      <div
        className={`font-heading container-padded grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 auto-cols-max items-center p-8`}
      >
        <PartnerCard
          id={87}
          logo={partner1}
          name="Black Woman Network"
          blurb="A nonprofit dedicated to promoting collaborative entrepreneurial thinking, holistic wellness, expanding equitable funding access and increasing knowledge of high-growth industries including STEM in Black Women Entrepreneurs & Professionals."
        />
        <PartnerCard
          id={130}
          logo={partner3}
          name="Hip Hop For Change"
          blurb="Breaks down barriers between youth and justice issues that affect their lives and communities using Hip hop as a vehicle. We educate, employ, and empower historically marginalized communities and inspire the next generation of leaders advocating for change through this work!"
        />
        <PartnerCard
          id={111}
          logo={partner2}
          name="Brothers Liberating Our Communities"
          blurb="A professional network of Black Male Educational leaders working to uplift our communities through racial equity centered education work."
        />
        <PartnerCard
          id={79}
          logo={partner4}
          name="Teachers Like Me"
          blurb="An organization dedicated to recruiting, developing, and retaining quality Black teachers in public education."
        />
      </div>
    </section>
  );
};

function PartnerCard(props: { id: number; name: string; logo: string; blurb: string; }) {
  return (
    <div className="text-center grid place-items-center rounded-md border p-4 dark:bg-blue-d6 border-prim h-[430px] md:h-[400px]">
      <>
        <img src={props.logo} style={{ maxHeight: "200px"}} className={"inset-x-0 bottom-0"}/>
        <div className={"pt-4"}>
          <ExtLink
            className={"text-2xl"}
            href={`https://app.angelprotocol.io/profile/${props.id}`}
          >{props.name}
          </ExtLink>
          <p className={"text-sm lg:text-md"}>{props.blurb}</p>
        </div>
      </>
    </div>
  );
}

export default Partners;
