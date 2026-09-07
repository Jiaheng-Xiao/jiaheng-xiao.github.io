import { basePath, site } from "../data/site";

export function Hero() {
  const photoStyle = site.profileImage
    ? { backgroundImage: `url(${basePath}${site.profileImage})` }
    : undefined;

  return <section className="hero" id="top">
    <div className="hero-copy">
      <span className="hero-network" style={{ backgroundImage: `url(${basePath}/og-academic.png)` }} aria-hidden="true" />
      <p className="eyebrow"><span className="status-dot" />Personal academic homepage</p>
      <h1>Jiaheng<br /><span>Xiao</span></h1>

      <p className="hero-intro">{site.intro.map((line) => <span key={line}>{line}</span>)}</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#research">Research overview <span aria-hidden="true">↘</span></a>
        <a className="button button-secondary" href={`${basePath}/files/Jiaheng_Xiao_CV.pdf`} target="_blank">Curriculum vitae <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <aside className="research-brief academic-profile" aria-label="Academic profile summary">
      <div className="brief-head"><span>Academic profile</span><span></span></div>
      <div className="brief-body profile-brief-body">
        <div className={`profile-photo hero-profile-photo${site.profileImage ? " has-photo" : ""}`} style={photoStyle} role="img" aria-label={site.profileImage ? "Portrait of Jiaheng Xiao" : "Personal photo placeholder"}>
          {!site.profileImage && <div><b>JX</b><span>Portrait</span><small>Add your photograph in data/site.ts</small></div>}
        </div>
      </div>
      <dl className="brief-metadata profile-facts">
        <div><dt>Intro</dt><dd className="profile-position">I am a PhD Student at <a href={site.affiliation.url} target="_blank" rel="noreferrer">{site.affiliation.label} ↗</a>. I am lucky to receive mentorship from {site.mentors.map((mentor, index) => <span key={mentor.name}>{index > 0 && " & "}<a href={mentor.url} target="_blank" rel="noreferrer">{mentor.title} {mentor.name} ↗</a></span>)}. {site.bio[0]}</dd></div>
        <div><dt>Research</dt><dd>Agentic City · Intelligent Mobility · Human Behaviour</dd></div>
        <div><dt>Location</dt><dd>{site.location}</dd></div>
      </dl>
    </aside>
  </section>;
}
