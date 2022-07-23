import React, { PropsWithChildren, ReactElement } from 'react'
import { HeaderSearch } from './Header';

export default function Layout({ children }: PropsWithChildren<{}>) {
    return (
        <>
            <div className="body-container flex">
                <HeaderSearch />
                <main className='w-full sm:w-[95%] sm:ml-[105px]'>
                    {children}
                </main>
            </div>
        </>
    )
}
export const getLayout = (page: ReactElement) => (
    <Layout>{page}</Layout>
);