import { TbBrandGithub, TbBrandInstagram, TbBrandTwitter, TbBrandLinkedin, TbBrandFacebook  } from "react-icons/tb";

export const site = {
    name: 'Muhammad Supri',
    navigasi : [
        {
            menu: 'Home',
            url: '/',
        },
        {
            menu: 'About',
            url: '/about',
        },
        {
            menu: 'Blogs',
            url: '/blogs'
        },
        {
            menu: 'Portfolio',
            url: '/portfolio',
        },
        {
            menu: 'Contact',
            url: '/contact'
        }
    ],
    social: [
        {
            name: 'Instagram',
            url: 'https://instagram.com/muhsupriazis',
            icon: <TbBrandInstagram/>,
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/muhsupriazis',
            icon: <TbBrandTwitter/>,
        },
        {
            name: 'Facebook',
            url: 'https://facebook.com/muhsupriazis',
            icon: <TbBrandFacebook/>
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedi/muhsupriazis',
            icon: <TbBrandLinkedin/>
        },
        {
            name: 'Github',
            url: 'https://github.com/muhsupriazis',
            icon: <TbBrandGithub/>
        }
    ]
}