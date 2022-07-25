import React from 'react';
import { Menu, Navbar, ScrollArea, createStyles, Text, Divider, Button } from '@mantine/core';
import { GrHomeRounded } from 'react-icons/gr';
import { MdOutlineExplore, MdLocalPlay, MdOutlineLibraryMusic, MdSportsBasketball, MdVideoLibrary, MdOutlineHistory, Md360 } from 'react-icons/md';
import { BsPlayBtn } from 'react-icons/bs';
import { SiYoutubegaming } from 'react-icons/si';
import { FaRegNewspaper } from 'react-icons/fa';
import { CgMediaLive } from 'react-icons/cg';
import Link from 'next/link';
import { UserCircle } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
    navbar: {
        paddingTop: '5px',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    },

    header: {
        padding: theme.spacing.md,
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },

    links: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
    },

    navbarLink: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.md,
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        fontSize: '16px',
        fontWeight: 600,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        },
    },

    navbarIcon: {
        fontSize: '20px',
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fill: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },

    sidebarSignIn: {
        paddingLeft: '32px',
        paddingRight: '40px',
    }
}));

const mainMenu = [
    { icon: GrHomeRounded, label: 'Home', link: '/' },
    { icon: MdOutlineExplore, label: 'Explore', link: '/' },
    { icon: MdLocalPlay, label: 'Shorts', link: '/' },
    { icon: BsPlayBtn, label: 'Subscription', link: '/' },
];

const library = [
    { icon: MdVideoLibrary, label: 'Library', link: '/' },
    { icon: MdOutlineHistory, label: 'History', link: '/' },
    { icon: MdLocalPlay, label: 'Shorts', link: '/' },
    { icon: BsPlayBtn, label: 'Subscription', link: '/' },
];

const exploreMenu = [
    { icon: MdOutlineLibraryMusic, label: 'Music', link: '/' },
    { icon: MdSportsBasketball, label: 'Sport', link: '/' },
    { icon: SiYoutubegaming, label: 'Gaming', link: '/' },
    { icon: FaRegNewspaper, label: 'News', link: '/' },
    { icon: CgMediaLive, label: 'Live', link: '/' },
    { icon: Md360, label: '360° Video', link: '/' },
];

function Sidebar() {
    const { classes } = useStyles();

    const menus = mainMenu.map((menu, index) => (
        <Link href={menu.link} key={index}>
            <a className={classes.navbarLink}>
                <menu.icon className={classes.navbarIcon} />
                <Text size="sm">{menu.label}</Text>
            </a>
        </Link>
    ));

    const librarys = library.map((menu, index) => (
        <Link href={menu.link} key={index}>
            <a className={classes.navbarLink}>
                <menu.icon className={classes.navbarIcon} />
                <Text size="sm">{menu.label}</Text>
            </a>
        </Link>
    ));

    const explores = exploreMenu.map((menu, index) => (
        <Link href={menu.link} key={index}>
            <a className={classes.navbarLink}>
                <menu.icon className={classes.navbarIcon} />
                <Text size="sm">{menu.label}</Text>
            </a>
        </Link>
    ));

    return (
        <aside>
            <Navbar width={{ sm: 300 }} className={classes.navbar}>
                <Navbar.Section grow className={classes.links} component={ScrollArea} mx="-xs" px="xs">
                    {menus}
                    <Divider my="sm" />
                    {librarys}
                    <Divider my="sm" />
                    <div className={classes.sidebarSignIn}>
                        <Text color="#fff5f5" size="md" weight={600} mb="15px">Sign in to like videos, comment and subscribe.</Text>
                        <Button leftIcon={<UserCircle/>} size="md" uppercase variant="outline">
                            Sign in
                        </Button>
                    </div>
                    <Divider my="sm" />
                    {explores}
                </Navbar.Section>
            </Navbar>
        </aside>
    );
}

export default Sidebar;
