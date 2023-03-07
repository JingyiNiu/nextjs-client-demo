import React from 'react';

const SelfIntro = () => {
    return (
        <article>
            <h1 className={`my-4 text-xl`}>Hi there👋</h1>
            <p>My name is Jingyi Niu, a web developer💻 and a learner 📖</p>
            <br />
            <p>
                This is my portfolio web app created using Next.js. For the backend, I&apos;m using
                Node.js to develop some APIs
            </p>
            <br />
            <p>
                The entire project is deployed on AWS EC2, and the database is hosted on AWS RDS.
                Also, I am using AWS S3 to store some images, and Jenkins to achieve CI/CD. Docker
                and Kubernetes may be a part of my plan soon.
            </p>
            <br />
            <p>
                I am currently working to turn it into a blog✒️, which will allow me to log in and
                create, edit, or delete posts. Users will be able to register and reply to some
                posts
            </p>
            <br />
            <p>
                Additionally, I would like the website to have different language options 🌐 and
                themes 🌗 that users can switch between
            </p>
            <br />
            <p>This will be a highly functional project, let&apos;s do it step by step🐾</p>
            <br />
            <p>Good luck to me, and best wishes to all of you✨</p>
        </article>
    );
};

export default SelfIntro;