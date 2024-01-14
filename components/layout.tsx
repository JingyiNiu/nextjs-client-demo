import Nav from "./nav";
import Footer from "./footer";
import BackToTop from "./back-to-top";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={`flex flex-col min-h-screen`}>
      <Nav />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
