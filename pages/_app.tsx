import '@/styles/globals.css';
import 'rsuite/dist/rsuite.min.css'; // or 'rsuite/dist/rsuite.min.css'
import '@/styles/custom-style.css';
import type {AppProps} from 'next/app';
import Layout from "@/components/layout/Layout";
import 'swiper/css';
import {ComponentType} from "react";
import {StoreProvider} from "@/store";

type CustomPropsLayout = AppProps & {
    Component: AppProps['Component'] & {
        Layout?: ComponentType
    },
}

function App({Component, pageProps }: CustomPropsLayout) {
    const LayoutCustom = Component.Layout || Layout
    return <StoreProvider>
                <LayoutCustom>
                    <section className="home fullscreen" style={{minHeight: '80vh'}}>
                        <Component {...pageProps} />
                    </section>
                </LayoutCustom>
            </StoreProvider>
}

export default App