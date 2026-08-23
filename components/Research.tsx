import { researchPillars } from "../data/site";
import { SectionHeading } from "./SectionHeading";

export function Research() {
  return <section className="section research" id="research">
    <SectionHeading number="02" kicker="Research agenda" title="Agentic City" intro="A doctoral programme investigating AI, mobility, and society through cities composed of interacting generative agents." />
    <div className="research-grid">{researchPillars.map((item) => <article className="research-card" key={item.index}>
      <div className="card-meta"><span>{item.index}</span><span>{item.label}</span></div>
      <h3>{item.title}</h3><p>{item.text}</p>
      <div className="tags" aria-label="Research methods">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </article>)}</div>
  </section>;
}
