interface NavbarLink {
    title: string;
    link: string;
    iconClassName?: string;
}

const navbarLinks: NavbarLink[] = [
    {
        title: 'Search',
        link: '/search',
        iconClassName: 'my-auto nf nf-fa-magnifying_glass',
    },
    {
        title: 'List',
        link: '/list',
        iconClassName: 'my-auto nf nf-md-format_list_bulleted',
    },
];

export default navbarLinks;
