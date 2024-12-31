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
        title: 'Pack',
        link: '/pack',
        iconClassName: 'nf-md-folder_multiple_outline',
    },
];

export default navbarLinks;
