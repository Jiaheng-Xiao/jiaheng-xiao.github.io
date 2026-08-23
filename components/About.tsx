import { basePath, site } from "../data/site";

export function About() {
  const photoStyle = site.profileImage
    ? { backgroundImage: `url(${basePath}${site.profileImage})` }
    : undefined;

  return <section className="section about" id="about">
    <p className="section-kicker"><span>01</span> Profile</p>
    <div className="about-layout">
      <div className="about-summary">
        <p className="academic-label">Biography</p>
        <h2>Jiaheng Xiao</h2>
        <div className="about-bio">
          <p>I am a PhD Candidate at <a href={site.affiliation.url} target="_blank" rel="noreferrer">{site.affiliation.label}<span aria-hidden="true"> ↗</span></a>. I am lucky to receive mentorship from {site.mentors.map((mentor, index) => <span className="mentor-link" key={mentor.name}>{index > 0 && " & "}<a href={mentor.url} target="_blank" rel="noreferrer">{mentor.title} {mentor.name}<span aria-hidden="true"> ↗</span></a></span>)}. {site.bio[0]}</p>
          {site.bio.slice(1).map((p) => <p key={p}>{p}</p>)}
        </div>
        <dl className="facts">
          <div><dt>Position</dt><dd>{site.role}</dd></div>
          <div><dt>Research</dt><dd>Agentic City · Intelligent Mobility · Human Behaviour</dd></div>
          <div><dt>Location</dt><dd>{site.location}</dd></div>
        </dl>
      </div>
      <div className={`profile-photo${site.profileImage ? " has-photo" : ""}`} style={photoStyle} role="img" aria-label={site.profileImage ? "Portrait of Jiaheng Xiao" : "Personal photo placeholder"}>
        {!site.profileImage && <div><b>JX</b><span>Portrait</span><small>Add your photograph in data/site.ts</small></div>}
      </div>
    </div>
  </section>;
}
