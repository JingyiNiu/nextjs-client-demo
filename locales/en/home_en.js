const home = {
    selfIntro: {
        title: 'Self Introduction',
        content:
            '<p>Hi there👋</p><br /><p>My name is Jingyi Niu, a web developer💻 and a learner👩‍🎓</p><br /><p>This is my portfolio web app created using Next.js for frontend and Node.js for backend.</p><br /><p>The front-end (this web app you are viewing noe🎉) and dashboard ( where I edit articles🛠️) are deployed on <a href="https://www.netlify.com/" target="_blank" class="inline-link">Netlify</a>, backend API is deployed on AWS EC2, and database💾 is hosted on AWS RDS.</p><br /><p>I am using AWS S3 to store some images, and Jenkins to achieve CI/CD. Docker and Kubernetes may be a part of my plan soon🤯. I&apos;m also thinking to put some APIs on AWS Lambda. </p><br /><p>I am currently working to turn it into a blog✍️, which will allow me to log in and create, edit, or delete article. Users will be able to register and reply to some articles.</p><br /><p>Additionally, I would like the website to have <del>different language options 🌐</del> and themes 🌗 that users can switch between.</p><br /><p>This will be a highly functional project, let&apos;s do it step by step...🐾</p><br /><p>Good luck to me, and best wishes to all of you!✨</p>',
    },
    recentArticles: {
        title: 'Recent Articles',
        content: 'Here are some of dummy hard coded articles just for demo👻',
    },
    myProjects: {
        title: 'My Projects',
        content: 'Stay tuned...🚧',
    },
    contactMe: {
        title: 'Contact Me',
        content: 'Send a message and I will get back to you ASAP📧',
        form:{
            name:"Name",
            email:"Email",
            message:"Message",
            button:"Send",
            successMessage:"✔️ Succeed"
        }
    },
};

export default home;
