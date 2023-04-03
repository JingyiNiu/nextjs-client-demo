import parse from 'html-react-parser';
import CustomTitle from "../custom/custom-title";

import React from 'react'

const SelfIntro = ({ locale_home_intro }: any) => {
    return (
        <>
            {locale_home_intro ? (
                <article>
                    <CustomTitle>{locale_home_intro && locale_home_intro.title}</CustomTitle>
                    {parse(locale_home_intro ? locale_home_intro.content : '')}
                </article>
            ) : (
                <>
                    <CustomTitle>Introduction</CustomTitle>
                    <div className="my-2 text-primary-800">There is something wrong, please try again later</div>
                </>
            )}
        </>
    );
}

export default SelfIntro
