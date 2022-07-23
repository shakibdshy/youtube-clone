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

function Sidebar() {
    const { classes } = useStyles();

    return (
        <aside>
            <Navbar width={{ sm: 300 }} className={classes.navbar}>
                <Navbar.Section grow className={classes.links} component={ScrollArea} mx="-xs" px="xs">
                    <Link href="/">
                        <a className={classes.navbarLink}>
                            <GrHomeRounded className={classes.navbarIcon} />
                            <Text size="sm">Home</Text>
                        </a>
                    </Link>
                    <Link href="/">
                        <a className={classes.navbarLink}>
                            <MdOutlineExplore className={classes.navbarIcon} />
                            <Text size="sm">Explore</Text>
                        </a>
                    </Link>
                    <Link href="/">
                        <a className={classes.navbarLink}>
                            <MdLocalPlay className={classes.navbarIcon} />
                            <Text size="sm">Shorts</Text>
                        </a>
                    </Link>
                    <Link href="/">
                        <a className={classes.navbarLink}>
                            <BsPlayBtn className={classes.navbarIcon} />
                            <Text size="sm">Subscription</Text>
                        </a>
                    </Link>
                    <Divider my="sm" />
                    <Link href="/">
                        <a className={classes.navbarLink}>
                            <MdVideoLibrary className={classes.navbarIcon} />
                            <Text size="sm">Library</Text>
                        </a>
                    </Link>
                    <Link href="/">
                        <a className={classes.navbarLink}>
                            <MdOutlineHistory className={classes.navbarIcon} />
                            <Text size="sm">History</Text>
                        </a>
                    </Link>
                    <Divider my="sm" />
                    <div className={classes.sidebarSignIn}>
                        <Text color='gray' size="md" weight={600} mb="15px">Sign in to like videos, comment and subscribe.</Text>
                        <Button leftIcon={<UserCircle/>} size="md" uppercase variant="outline">
                            Sign in
                        </Button>
                    </div>
                    <Divider my="sm" />
                    <Link href="/">
                        <a className={classes.navbarLink}>
                            <MdOutlineLibraryMusic className={classes.navbarIcon} />
                            <Text size="sm">Music</Text>
                        </a>
                    </Link>
                    <Link href="/">
                        <a className={classes.navbarLink}>
                            <MdSportsBasketball className={classes.navbarIcon} />
                            <Text size="sm">Sport</Text>
                        </a>
                    </Link>
                    <Link href="/">
                        <a className={classes.navbarLink}>
                            <SiYoutubegaming className={classes.navbarIcon} />
                            <Text size="sm">Gaming</Text>
                        </a>
                    </Link>
                    <Link href="/">
                        <a className={classes.navbarLink}>
                            <FaRegNewspaper className={classes.navbarIcon} />
                            <Text size="sm">News</Text>
                        </a>
                    </Link>
                    <Link href="/">
                        <a className={classes.navbarLink}>
                            <CgMediaLive className={classes.navbarIcon} />
                            <Text size="sm">Live</Text>
                        </a>
                    </Link>
                    <Link href="/">
                        <a className={classes.navbarLink}>
                            <Md360 className={classes.navbarIcon} />
                            <Text size="sm">360° Video</Text>
                        </a>
                    </Link>
                </Navbar.Section>
            </Navbar>
        </aside>
    );
}

export default Sidebar;
