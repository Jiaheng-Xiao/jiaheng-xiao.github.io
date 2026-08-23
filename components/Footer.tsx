import { basePath, site } from "../data/site";

export function Footer() {
  return <footer>
    <div className="footer-main"><p>Academic enquiries &amp; collaboration</p><a href={`mailto:${site.email}`}>{site.email} <span aria-hidden="true">↗</span></a></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><div>
      <a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>
      <a href={`${basePath}/files/Jiaheng_Xiao_CV.pdf`} target="_blank">CV ↓</a>
      <a href="#top">Back to top ↑</a>
    </div></div>
  </footer>;
}
