import { basePath, site } from "../data/site";

export function Hero() {
  return <section className="hero" id="top">
    <div className="hero-copy">
      <span className="hero-network" style={{ backgroundImage: `url(${basePath}/og-academic.png)` }} aria-hidden="true" />
      <p className="eyebrow"><span className="status-dot" />PhD Researcher · UNNC</p>
      <h1><span>Agentic</span><br />City</h1>
      <p className="hero-deck">Computing urban intelligence through interacting, adaptive agents.</p>
      <p className="hero-intro">{site.intro}</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#research">Research overview <span aria-hidden="true">↘</span></a>
        <a className="button button-secondary" href={`${basePath}/files/Jiaheng_Xiao_CV.pdf`} target="_blank">Curriculum vitae <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <aside className="research-brief" aria-label="Current research programme">
      <div className="brief-head"><span>Research programme</span><span>2026 — present</span></div>
      <div className="brief-body">
        <p className="brief-index">AC / 01</p>
        <h2>Cities as evolving multi-agent systems</h2>
        <p>Agentic City studies how generative agents can perceive, reason, remember, and act within shared urban environments—and how their local decisions shape city-scale dynamics.</p>
      </div>
      <dl className="brief-metadata">
        <div><dt>Focus</dt><dd>Urban mobility &amp; human behaviour</dd></div>
        <div><dt>Scale</dt><dd>Individual cognition → collective dynamics</dd></div>
        <div><dt>Methods</dt><dd>LLM agents · simulation · calibration</dd></div>
      </dl>
      <div className="brief-status"><span className="status-dot" />Active doctoral research</div>
    </aside>
  </section>;
}
