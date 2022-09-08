import Copyright from "src/comps/footer/copyright";
import Footer from "src/comps/footer/footer";
import BottomMenu from "src/comps/header/BottomMenu";
import Mainmenu from "src/comps/header/MainMenu";
import Head from "next/head";
import FootNav from "src/comps/common/FootNav";

export default function BasicLayout({ children }) {
  return (
    <div className="h-screen relative md:h-full">
      <Head>
        <title>Welcome | Auto Export</title>
        <meta property="og:title" content="Welcome | Auto Export" key="title" />
        <link rel="icon" href="/logo/favicon.ico" />

        {/* google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&amp;display=swap"
          rel="stylesheet"
        />

        {/* slick Css */}
      </Head>
      <header className="sticky top-0 z-20">
        <Mainmenu />
        <BottomMenu />
      </header>
      {children}
      <FootNav className="block md:hidden" />
      <footer className="bg-footerBg text-white hidden md:block">
        <Footer />
        <Copyright />
      </footer>
    </div>
  );
}
