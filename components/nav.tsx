import { ChangeEvent, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useGoogleLogin } from '@react-oauth/google';
import LogoSvg from './logo';
import axios from 'axios';

const Nav = () => {
    const router = useRouter();

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale });
    };

    const googleLogin = useGoogleLogin({
        onSuccess: async (res) => {
            const userInfo = await axios
                .get('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: { Authorization: `Bearer ${res.access_token}` },
                })
                .then((res) => res.data);
            const { family_name, given_name, email, picture } = userInfo;
            console.log(family_name, given_name, email, picture)
        },
        onError: (error) => {
            console.log('Login failed:', error);
        },
    });

    return (
        <div className={`flex justify-between items-center px-5 py-2 bg-neutral-100`}>
            <Link href="/" className="inline-block align-middle">
                <LogoSvg />
            </Link>
            <div>
                <button
                    onClick={() => googleLogin()}
                    className="mr-2 border py-1 px-2 cursor-pointer hover:bg-neutral-300 bg-neutral-200"
                >
                    login
                </button>

                <select onChange={handleSelectChange} value={router.locale} className="outline-none bg-neutral-100">
                    <option value="en">EN</option>
                    <option value="zh">中</option>
                </select>
            </div>
        </div>
    );
};

export default Nav;
