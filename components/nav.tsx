import Link from 'next/link';
import LogoSvg from './logo';

const Nav = () => {
    return (
        <div className={`px-5 py-2 bg-neutral-100`}>
            <Link href="/" className='inline-block align-middle'>
                <LogoSvg />
            </Link>
        </div>
    );
};

export default Nav;
