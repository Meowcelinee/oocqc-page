type AuthorLink = { name: string; url: string };

interface Author {
    name: string;
    discord: string;
    mc: string;
    github: AuthorLink;
    website?: AuthorLink;
}

const marceline: Author = {
    name: 'Marceline',
    discord: 'meowcelinee.',
    mc: 'Meowcelinee',
    github: {
        name: 'Meowcelinee',
        url: 'https://github.com/Meowcelinee',
    },
    website: {
        name: 'meowceline.pages.dev',
        url: 'https://meowceline.pages.dev/',
    },
};

const amelia: Author = {
    name: 'Amelia',
    discord: 'nyameliaaaa',
    mc: 'Nyameliaaaa',
    github: {
        name: 'Nyameliaaaa',
        url: 'https://github.com/Nyameliaaaa',
    },
};

export { marceline, amelia };
export type { AuthorLink, Author };
