import { ChangeEvent, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useGoogleLogin } from '@react-oauth/google';
import LogoSvg from './logo';
import axios from 'axios';
import { GoogleUserInfo } from '../interfaces/GoogleUserInfo';

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
            saveUserToDB({ family_name, given_name, email, picture });
        },
        onError: (error) => {
            console.log('Login failed:', error);
        },
    });

    const saveUserToDB = ({ family_name, given_name, email, picture }: GoogleUserInfo) => {
        console.log("saveUserToDB", family_name, given_name, email, picture)
    };

    return (
        <div className={`flex justify-between items-center px-5 py-2 bg-neutral-100`}>
            <Link href="/" className="inline-block align-middle">
                <LogoSvg />
            </Link>
            <div>
                <button onClick={() => googleLogin()} className="text-sm mr-4 rounded-md pt-0.5 pb-1 px-2 cursor-pointer hover:bg-primary-500">
                    Sign in
                </button>

                <select
                    onChange={handleSelectChange}
                    value={router.locale}
                    className="outline-none py-0.5 px-1 rounded-md bg-neutral-100 hover:bg-neutral-200"
                >
                    <option value="en">EN</option>
                    <option value="zh">中</option>
                </select>
            </div>
        </div>
    );
};

export default Nav;
