const home = {
    selfIntro: {
        title: '简介',
        content:
            '<p>哈喽👋</p><br /><p>我叫静怡，是一个不断学习的程序员💻</p><br /><p>这是我的个人网站，前端是用Next.js写的，后端是Node.js</p><br /><p>这个项目的前端（你现在正在浏览的这个页面）和后台（我编辑文章的部分）部署在了<a href="https://www.netlify.com/" target="_blank" class="inline-link">Netlify</a>上，后端部署在了AWS EC2上，数据库用的是AWS RDS。此外我还用了AWS S3来存储图片，用Jenkins来实现CI/CD。Docker 和 Kubernetes 也在我的学习计划当中🤯。我还在考虑要把一部分API放在AWS Lambda上</p><br /><p>我想把这个网站做成一个Blog✍️，我可以登录然后创建、编辑、删除文章，你们也可以注册一个用户，给文章或者其他人留言。</p><br /><p>之后，我还希望网站<del>可以有多种语言选项🌐</del>，可以选主题🌗，这样大家可以选适合自己模式。</p><br /><p>这会是个有丰富功能的网站，让我一步一步来实现吧……🐾</p><br /><p>祝我好运， 也祝屏幕前的你们开心快乐！✨</p>',
    },
    recentArticles: {
        title: '最近发布的文章',
        content: '文章列表👻',
    },
    myProjects: {
        title: '我的项目',
        content: '敬请期待...🚧',
    },
    contactMe: {
        title: '联系我',
        content: '请在这里留言，我会尽快回复你📧',
        form:{
            name:"姓名",
            email:"电子邮箱",
            message:"留言",
            button:"提交",
            successMessage:"✔️ 提交成功"
        }
    },
};

export default home;
