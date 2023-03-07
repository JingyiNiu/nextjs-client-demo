import { ChangeEvent, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LogoSvg from './logo';

const Nav = () => {
    const router = useRouter();

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale });
    };

    return (
        <div className={`flex justify-between px-5 py-2 bg-neutral-100`}>
            <Link href="/" className="inline-block align-middle">
                <LogoSvg />
            </Link>
            <>
                <select
                    onChange={handleSelectChange}
                    value={router.locale}
                    className="outline-none bg-neutral-100"
                >
                    <option value="en">EN</option>
                    <option value="zh">中</option>
                </select>
            </>
        </div>
    );
};

export default Nav;
