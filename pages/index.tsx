import { Group } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Youtube Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Group>
        <Sidebar />
        <div>Hello</div>
      </Group>
    </>
  )
}

export default Home
