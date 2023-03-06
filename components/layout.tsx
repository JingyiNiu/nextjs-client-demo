import Nav from './nav';
import Footer from './footer';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={`flex flex-col min-h-screen`}>
            <Nav />
            <main className={`flex-1 p-4 max-w-screen-lg w-full mx-auto`}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
