import { education, experience } from "../data/site";
import { SectionHeading } from "./SectionHeading";

export function Background() {
  return <section className="section background" id="background">
    <SectionHeading number="04" kicker="Academic record" title="Experience & education" />
    <div className="background-columns">
      <div><h3 className="column-label">Research experience</h3>{experience.map((item) => <article className="timeline-item" key={item.title}>
        <span>{item.period}</span><div><h4>{item.title}</h4><b>{item.place}</b><p>{item.text}</p></div>
      </article>)}</div>
      <div><h3 className="column-label">Education</h3>{education.map((item) => <article className="timeline-item education-item" key={item.degree}>
        <span>{item.year}</span><div><h4>{item.degree}</h4><p>{item.school}</p>{item.supervisor && <p className="supervisor"><span>Supervisor</span>{item.supervisor}</p>}</div>
      </article>)}</div>
    </div>
  </section>;
}
