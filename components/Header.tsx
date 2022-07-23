import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo.png'
import { BiVideoPlus, BiBell } from 'react-icons/bi'
import { RiVideoLine } from 'react-icons/ri'
import { CgLivePhoto } from 'react-icons/cg'
import { Avatar, createStyles, Header, Autocomplete, Group, Burger, Menu, Tooltip, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { Search } from 'tabler-icons-react';
import { MdNightlightRound } from 'react-icons/md'
import { HiLightBulb } from 'react-icons/hi'

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
    const [opened, toggleOpened] = useBooleanToggle(false);
    const { classes } = useStyles();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <Header height={56} className={classes.header}>
            <div className={classes.inner}>
                <Group>
                    <Burger opened={opened} onClick={() => toggleOpened()} size="sm" />
                    <Image src={logo} alt="logo" width={120} height={26} />
                </Group>

                <Autocomplete
                    className={classes.search}
                    placeholder="Search"
                    icon={<Search size={16} />}
                    data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
                />

                <Group spacing={20} className={classes.social} position="right" noWrap>
                    <Tooltip label="Dark/Light" position="bottom" placement="end">
                        <ActionIcon
                            variant="outline"
                            color={dark ? 'yellow' : 'blue'}
                            onClick={() => toggleColorScheme()}
                            title="Toggle color scheme"
                        >
                            {dark ? <MdNightlightRound size={18} /> : <HiLightBulb size={18} />}
                        </ActionIcon>
                    </Tooltip>
                    <Menu control={
                        <Tooltip label="Create" position="bottom" placement="end">
                            <ActionIcon size='xl' radius='xl'>
                                <BiVideoPlus size={20} />
                            </ActionIcon>
                        </Tooltip>
                    }>
                        <Menu.Item icon={<RiVideoLine size={14} />}>Settings</Menu.Item>
                        <Menu.Item icon={<CgLivePhoto size={14} />}>Messages</Menu.Item>
                    </Menu>
                    <Menu control={
                        <Tooltip label="Notifications" position="bottom" placement="end">
                            <ActionIcon size='xl' radius='xl'>
                                <BiBell size={20} />
                            </ActionIcon>
                        </Tooltip>
                    }>
                        <Menu.Item icon={<RiVideoLine size={14} />}>Settings</Menu.Item>
                        <Menu.Item icon={<CgLivePhoto size={14} />}>Messages</Menu.Item>
                    </Menu>
                    <Menu control={
                        <Avatar src={null} alt="no image here" size='md' radius='xl' />
                    }>
                        <Menu.Item icon={<RiVideoLine size={14} />}>Settings</Menu.Item>
                        <Menu.Item icon={<CgLivePhoto size={14} />}>Messages</Menu.Item>
                    </Menu>
                </Group>
            </div>
        </Header>
    );
}