export default function DonateFooter({ classes = "" }) {
  return (
    <section className={`sm:container-unpadded container-padded ${classes}`}>
      <p className="leading-relaxed">
        Donations are not subject to capital gains taxes and result in immediate
        tax receipts. This portal splits donations across the partner
        organizations in a 25/25/25/25 ratio. If you prefer to donate just to a
        single charity or allocate your donation with a different
        immediate/endowment percentage, simply donate to one of the individual
        charities below
      </p>
    </section>
  );
}
