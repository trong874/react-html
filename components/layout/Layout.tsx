import React, {memo, ReactNode, useEffect} from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import {actions, useStore} from "@/store";
import {Profile} from "@/utils/Auth";

import * as Cookie from 'cookies-next';

type PropsCustom = {
    children:ReactNode,
}

function Layout(props:PropsCustom) {
    const [state,dispatch] = useStore();

    useEffect(() => {

        const profileUser = Profile();

        profileUser.then( (res) => {
            dispatch(actions.setIsLogin(true));
            dispatch(actions.setProfileUser(res.user))
        }).catch(e => {
            dispatch(actions.setIsLogin(false));
            dispatch(actions.setProfileUser({}));

            Cookie.deleteCookie('auth-token')

        })

    },[])

    return <>
        <Header/>
            <div className="max-w-6xl mx-auto px-2">
                {props.children}
            </div>
        <Footer/>
    </>
}
export default memo(Layout)