import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo.png'
import { BiVideoPlus, BiBell } from 'react-icons/bi'
import { RiVideoLine } from 'react-icons/ri'
import { CgLivePhoto } from 'react-icons/cg'
import { Avatar, createStyles, Header, Autocomplete, Group, Burger, Menu, Tooltip, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Search } from 'tabler-icons-react';
import { MdNightlightRound } from 'react-icons/md'
import { HiLightBulb } from 'react-icons/hi'
import { IconMenu2 } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
    header: {
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        // borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    },

    inner: {
        height: 56,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    search: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
        flex: '0 0 auto',
        width: '100%',
        maxWidth: '600px',
    },

    social: {
        width: 260,

        [theme.fn.smallerThan('sm')]: {
            width: 'auto',
            marginLeft: 'auto',
        },
    },
}));


export function HeaderSearch() {
    const { classes } = useStyles();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <Header height={56} className={classes.header}>
            <div className={classes.inner}>
                <Group>
                    <IconMenu2 size={18} />
                    <Image src={logo} alt="logo" width={120} height={26} />
                </Group>

                <Autocomplete
                    className={classes.search}
                    placeholder="Search"
                    icon={<Search size={16} />}
                    data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
                />

                <Group spacing={20} className={classes.social} position="right" noWrap>
                    <Tooltip label="Dark/Light" position="bottom">
                        <ActionIcon
                            variant="outline"
                            color={dark ? 'yellow' : 'blue'}
                            onClick={() => toggleColorScheme()}
                            title="Toggle color scheme"
                        >
                            {dark ? <MdNightlightRound size={18} /> : <HiLightBulb size={18} />}
                        </ActionIcon>
                    </Tooltip>
                    <Menu width={200} shadow="md" position="bottom-end">
                        <Menu.Target>
                            <ActionIcon size='xl' radius='xl'>
                                <BiVideoPlus size={20} />
                            </ActionIcon>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Item icon={<RiVideoLine size={14} />}>Upload Video</Menu.Item>
                            <Menu.Item icon={<CgLivePhoto size={14} />}>Go Live</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                    <Menu width={200} shadow="md" position="bottom-end">
                        <Menu.Target>
                            <ActionIcon size='xl' radius='xl'>
                                <BiBell size={20} />
                            </ActionIcon>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Item icon={<RiVideoLine size={14} />}>Settings</Menu.Item>
                            <Menu.Item icon={<CgLivePhoto size={14} />}>Messages</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                    <Menu width={200} shadow="md" position="bottom-end">
                        <Menu.Target>
                            <Avatar src={null} alt="no image here" size='md' radius='xl' />
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Item icon={<RiVideoLine size={14} />}>Settings</Menu.Item>
                            <Menu.Item icon={<CgLivePhoto size={14} />}>Messages</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
            </div>
        </Header>
    );
}