import Nav from './nav';
import styles from '../styles/Home.module.scss';
import Footer from './footer';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={styles.app}>
            <Nav />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
