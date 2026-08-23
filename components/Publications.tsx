import { basePath, publicationCategories, publications } from "../data/site";
import { SectionHeading } from "./SectionHeading";

export function Publications() {
  return <section className="section publications" id="publications">
    <SectionHeading number="03" kicker="Publications" title="Research outputs" intro="Peer-reviewed and scholarly outputs organised by publication type." />
    <div className="publication-taxonomy" aria-label="Publication categories">
      {publicationCategories.map((category) => <div key={category.id}>
        <b>{publications.filter((paper) => paper.category === category.id).length}</b><span>{category.label}</span>
      </div>)}
    </div>
    <div className="publication-groups">{publicationCategories.map((category) => {
      const papers = publications.filter((paper) => paper.category === category.id);
      if (papers.length === 0) return null;

      return <section className="publication-group" key={category.id} aria-labelledby={`publication-${category.id}`}>
        <div className="publication-group-heading"><h3 id={`publication-${category.id}`}>{category.label}</h3><span>{papers.length.toString().padStart(2, "0")}</span></div>
        <div className="publication-list">{papers.map((paper) => <article className="publication" key={paper.title}>
          <div className="pub-year"><b>{paper.year}</b><span>{paper.venue}</span></div>
          <div className="pub-main"><p className="academic-label">{category.itemLabel}</p><h3>{paper.title}</h3><p className="authors">{paper.authors}</p><p>{paper.note}</p></div>
          <div className="pub-links">{paper.doi && <a href={paper.doi} target="_blank" rel="noreferrer">DOI <span aria-hidden="true">↗</span></a>}{paper.pdf && <a href={`${basePath}${paper.pdf}`} target="_blank">PDF <span aria-hidden="true">↓</span></a>}</div>
        </article>)}</div>
      </section>;
    })}</div>
  </section>;
}
