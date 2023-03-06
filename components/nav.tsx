import Link from 'next/link';
import LogoSvg from './logo';

const Nav = () => {
    return (
        <div className={`px-5 py-2 bg-gray-100`}>
            <Link href="/">
                <LogoSvg />
            </Link>
        </div>
    );
};

export default Nav;
