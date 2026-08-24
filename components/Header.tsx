"use client";

import type { MouseEvent } from "react";
import { site } from "../data/site";

const nav = [
  { label: "Profile", href: "#top" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Background", href: "#background" },
];

function goToSection(event: MouseEvent<HTMLAnchorElement>, href: string) {
  event.preventDefault();

  const target = document.querySelector<HTMLElement>(href);
  if (!target) return;

  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);

  if (href === "#top") {
    window.scrollTo({ top: 0, behavior: "auto" });
  } else {
    target.scrollIntoView({ block: "start", behavior: "auto" });
  }
}

export function Header() {
  return <header className="site-header">
    <a className="wordmark" href="#top" onClick={(event) => goToSection(event, "#top")} aria-label="Jiaheng Xiao, back to top"><span>JX</span><span className="wordmark-name">{site.name}</span></a>
    <nav aria-label="Main navigation">{nav.map((item) => <a key={item.label} href={item.href} onClick={(event) => goToSection(event, item.href)}>{item.label}</a>)}</nav>
    <a className="header-contact" href={`mailto:${site.email}`}>Email <span aria-hidden="true">↗</span></a>
  </header>;
}
