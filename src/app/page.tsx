import Header from "@/app/component/header/header";
import Portfolio from "./component/portfolio/portfolio";
import About from "./component/about/about";
import Footer from "./component/footer/footer";

export default function Home() {
  return (
    <div className="bg-[#212429] overflow-x-hidden min-h-screen">
      <Header />
      <main>
        <Portfolio />
        <About />
        <Footer/>
      </main>
    </div>
  );
}
