import React, {ReactNode, useEffect} from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import {actions, useStore} from "@/store";

type PropsCustom = {
    children:ReactNode,
    "data-profile":{}
}
export default function Layout(props:PropsCustom) {
    const [state,dispatch] = useStore();

    useEffect(() => {
        if (props['data-profile']) {
            dispatch(actions.setIsLogin(true));
            dispatch(actions.setProfileUser(props['data-profile']));
        } else {
            dispatch(actions.setIsLogin(false));
            dispatch(actions.setProfileUser({}));
        }
    },[props['data-profile']])

    return (<>
        <Header/>
            <div className="max-w-6xl mx-auto px-2">
                {props.children}
            </div>
        <Footer/>
    </>)
}