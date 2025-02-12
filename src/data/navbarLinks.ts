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
        title: 'Random',
        link: '/random',
        iconClassName: 'nf-fa-dice_d20',
    },
    {
        title: 'Pack',
        link: '/pack',
        iconClassName: 'nf-md-folder_download',
    },
];

export default navbarLinks;
