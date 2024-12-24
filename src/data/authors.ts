interface AuthorLink {
    title: string;
    url: string;
}

interface Author {
    name: string;
    discord: string;
    mc: string;
    github: AuthorLink;
    website?: AuthorLink;
}

const natalie: Author = {
    name: 'Natalie',
    discord: 'nyatalieeee',
    mc: 'Natalesbian',
    github: {
        title: 'Nyatalieeee',
        url: 'https://github.com/Nyatalieeee',
    },
    website: {
        title: 'nyatalie.pages.dev',
        url: 'https://nyatalie.pages.dev/',
    },
};

const amelia: Author = {
    name: 'Amelia',
    discord: 'nyameliaaaa',
    mc: 'Nyameliaaaa',
    github: {
        title: 'Nyameliaaaa',
        url: 'https://github.com/Nyameliaaaa',
    },
};

export { natalie, amelia };
export type { AuthorLink, Author };
