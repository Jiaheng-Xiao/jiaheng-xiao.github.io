import { site } from "../data/site";

const nav = [
  { label: "Profile", href: "#top" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Background", href: "#background" },
];

export function Header() {
  return <header className="site-header">
    <a className="wordmark" href="#top" aria-label="Jiaheng Xiao, back to top"><span>JX</span><span className="wordmark-name">{site.name}</span></a>
    <nav aria-label="Main navigation">{nav.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</nav>
    <a className="header-contact" href={`mailto:${site.email}`}>Email <span aria-hidden="true">↗</span></a>
  </header>;
}
