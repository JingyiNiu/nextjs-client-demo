import Link from "next/link";
import LogoSvg from "./logo";
import styles from '../styles/Home.module.scss';

const Nav = () => {
    return (
        <div className={styles.nav}>
            <Link href="/">
                <LogoSvg />
            </Link>
        </div>
    );
};

export default Nav;
