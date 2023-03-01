import '@/styles/globals.css';
import 'rsuite/dist/rsuite.min.css'; // or 'rsuite/dist/rsuite.min.css'
import '@/styles/custom-style.css';
import type {AppProps} from 'next/app';
import Layout from "@/components/layout/Layout";
import 'swiper/css';
import {ComponentType} from "react";
import {StoreProvider} from "@/store";
import {Profile} from "@/utils/Auth";
import {actions, useStore} from "@/store";

type CustomPropsLayout = AppProps & {
    Component: AppProps['Component'] & {
        Layout?: ComponentType
    },
    profileUser: {
        user: {},
        status:number,
        message:string
    }
}

App.getInitialProps = async ({ Component, ctx }:any) => {
    const profileUser = await Profile(ctx)
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    return { Component, pageProps, profileUser};
}

function App({Component, pageProps, profileUser }: CustomPropsLayout) {
    const LayoutCustom = Component.Layout || Layout
    return <StoreProvider>
                <LayoutCustom data-profile={profileUser && profileUser.user}>
                    <section className="home fullscreen" style={{minHeight: '80vh'}}>
                        <Component {...pageProps} />
                    </section>
                </LayoutCustom>
            </StoreProvider>
}

export default App