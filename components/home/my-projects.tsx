import React from 'react'
import { TransProps } from '../../interfaces/HomeText';
import CustomTitle from '../custom/custom-title';

interface Props {
    t: TransProps;
    projects: [];
}

const MyProjects = ({ t, projects }: Props) => {
    return (
        <div className="my-8">
            <CustomTitle>{t.myProjects.title}</CustomTitle>
            <p>{t.myProjects.content}</p>
        </div>
    );
}

export default MyProjects