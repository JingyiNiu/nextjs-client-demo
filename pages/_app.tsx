import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from '../utils/utils';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <Component {...pageProps} />
        </GoogleOAuthProvider>
    );
}

export default MyApp;
