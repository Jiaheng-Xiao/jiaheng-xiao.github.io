import { site } from "../data/site";

const nav = ["About", "Research", "Publications", "Background"];

export function Header() {
  return <header className="site-header">
    <a className="wordmark" href="#top" aria-label="Jiaheng Xiao, back to top"><span>JX</span><span className="wordmark-name">{site.name}</span></a>
    <nav aria-label="Main navigation">{nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav>
    <a className="header-contact" href={`mailto:${site.email}`}>Email <span aria-hidden="true">↗</span></a>
  </header>;
}
