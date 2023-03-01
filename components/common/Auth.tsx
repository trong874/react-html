// @flow
import * as React from 'react';
import {actions, useStore} from "@/store";
import {useEffect} from "react";
import {useRouter} from "next/router";


export interface PropsChildren {
    children:any,
}

export function Auth({children}:PropsChildren) {
    const [state, dispatch] = useStore();
    const {isLogin} = state;
    const router = useRouter();

    useEffect(() => {
        if (!isLogin) {
            router.push('/login');
            dispatch(actions.setPreUrl(router.pathname));
        }
    },[]);

    if (!isLogin) return <></>

    return (
        <>
            {children}
        </>
    );
}