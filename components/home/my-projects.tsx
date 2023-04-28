import React from 'react';
import { TransProps } from '../../interfaces/HomeText';
import CustomTitle from '../custom/custom-title';
import CustomSlides from '../custom/custom-slides';

interface Props {
    t: TransProps;
    projects: [];
}

const MyProjects = ({ t, projects }: Props) => {

    const slidesData = [
        {
            imageUrl: 'https://images.unsplash.com/photo-1679949465910-53921e791a21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1681994813047-c94a82c4ca99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1682250132080-85aea80d2c3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
        },
    ];

    return (
        <div className="my-8">
            <CustomTitle>{t.myProjects.title}</CustomTitle>
            <p className='my-2'>{t.myProjects.content}</p>
            <CustomSlides slides={slidesData} width={500} height={250}/>
        </div>
    );
};

export default MyProjects;
