interface Content {
    title: string;
    content: string;
    button?: string;
}

export interface TransProps {
    selfIntro: Content;
    recentArticles: Content;
    myProjects: Content;
    contactMe: {
        title: string;
        content: string;
        form: {
            name: string;
            email: string;
            message: string;
            button: string;
            successMessage: string;
        };
    };
}
