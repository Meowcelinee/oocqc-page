interface NavbarLink {
    title: string;
    link: string;
    iconClassName?: string;
}

const navbarLinks: NavbarLink[] = [
    {
        title: 'Search',
        link: '/search',
        iconClassName: 'nf-fa-magnifying_glass',
    },
    {
        title: 'List',
        link: '/list',
        iconClassName: 'nf-md-format_list_bulleted',
    },
    {
        title: 'Download',
        link: '/download',
        iconClassName: 'nf-oct-download',
    },
];

export default navbarLinks;
