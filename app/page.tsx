import { About } from "../components/About";
import { Background } from "../components/Background";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Publications } from "../components/Publications";
import { Research } from "../components/Research";

export default function Home() {
  return <><Header /><main><Hero /><About /><Research /><Publications /><Background /></main><Footer /></>;
}
