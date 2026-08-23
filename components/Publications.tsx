import { basePath, publications } from "../data/site";
import { SectionHeading } from "./SectionHeading";

export function Publications() {
  return <section className="section publications" id="publications">
    <SectionHeading number="03" kicker="Selected work" title="Publications" intro="Peer-reviewed research on intention, uncertainty, and decision-making in dynamic mobility environments." />
    <div className="publication-list">{publications.map((paper) => <article className="publication" key={paper.title}>
      <div className="pub-year"><b>{paper.year}</b><span>{paper.venue}</span></div>
      <div className="pub-main"><p className="academic-label">Journal article</p><h3>{paper.title}</h3><p className="authors">{paper.authors}</p><p>{paper.note}</p></div>
      <div className="pub-links">{paper.doi && <a href={paper.doi} target="_blank" rel="noreferrer">DOI <span aria-hidden="true">↗</span></a>}{paper.pdf && <a href={`${basePath}${paper.pdf}`} target="_blank">PDF <span aria-hidden="true">↓</span></a>}</div>
    </article>)}</div>
  </section>;
}
