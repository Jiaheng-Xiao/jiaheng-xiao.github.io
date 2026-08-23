export function SectionHeading({ number, kicker, title, intro }: { number: string; kicker: string; title: string; intro?: string }) {
  return <div className="section-heading"><p className="section-kicker"><span>{number}</span>{kicker}</p><div><h2>{title}</h2>{intro && <p>{intro}</p>}</div></div>;
}
