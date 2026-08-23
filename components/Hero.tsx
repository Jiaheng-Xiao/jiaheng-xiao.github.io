import { basePath, site } from "../data/site";

export function Hero() {
  return <section className="hero" id="top">
    <div className="hero-copy">
      <span className="hero-network" style={{ backgroundImage: `url(${basePath}/og-academic.png)` }} aria-hidden="true" />
      <p className="eyebrow"><span className="status-dot" />Personal academic homepage</p>
      <h1>Jiaheng<br /><span>Xiao</span></h1>
      <p className="hero-deck">PhD candidate exploring artificial intelligence for next-generation transportation systems.</p>
      <p className="hero-intro">{site.intro.map((line) => <span key={line}>{line}</span>)}</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#research">Research overview <span aria-hidden="true">↘</span></a>
        <a className="button button-secondary" href={`${basePath}/files/Jiaheng_Xiao_CV.pdf`} target="_blank">Curriculum vitae <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <aside className="research-brief" aria-label="Academic profile summary">
      <div className="brief-head"><span>Academic profile</span><span>Ningbo, China</span></div>
      <div className="brief-body">
        <p className="brief-index">PROFILE / 01</p>
        <h2>PhD Candidate at UNNC</h2>
        <p>My work connects intelligent mobility, human behaviour, and generative AI to study how transportation systems can become safer and more adaptive.</p>
      </div>
      <dl className="brief-metadata">
        <div><dt>Affiliation</dt><dd><a href={site.affiliation.url} target="_blank" rel="noreferrer">{site.affiliation.label} ↗</a></dd></div>
        <div><dt>Supervision</dt><dd>{site.mentors.map((mentor) => `${mentor.title} ${mentor.name}`).join(" · ")}</dd></div>
        <div><dt>Interests</dt><dd>AI for ITS · Intelligent Mobility · Human Behaviour</dd></div>
      </dl>
      <div className="brief-status"><span className="status-dot" />Doctoral study · 2026—present</div>
    </aside>
  </section>;
}
