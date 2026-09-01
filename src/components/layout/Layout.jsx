import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import FloatingActions from "./FloatingActions.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import ScrollProgress from "./ScrollProgress.jsx";
import CartDrawer from "../exames/CartDrawer.jsx";
import { useLenis } from "../../hooks/useLenis.js";

export default function Layout() {
  useLenis();

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <ScrollProgress />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[200] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2.5 focus:text-ink focus:shadow-md2"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <CartDrawer />
    </div>
  );
}
