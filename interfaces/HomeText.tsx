interface Content {
    title: string;
    content: string;
}

export interface TransProps {
    t: {
        selfIntro: Content;
        recentArticles: Content;
        myProjects: Content;
        contactMe: {
            title: string;
            content: string;
            form: { name: string; email: string; message: string; button: string };
        };
    };
}
