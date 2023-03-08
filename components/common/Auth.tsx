// @flow
import * as React from 'react';
import {actions, useStore} from "@/store";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import * as Cookie from 'cookies-next';

import * as request from "@/utils/request";


export interface PropsChildren {
    children:any,
}
export function Auth({children}:PropsChildren) {
    const [state, dispatch] = useStore();
    const router = useRouter();

    const [authCheck,setAuthCheck] = useState(false);

    const attemptAuth = async () => {
        if (!Cookie.hasCookie('auth-token')) {
            return false;
        }
        const token = Cookie.getCookie('auth-token');

        return await request.get('profile',{token}).catch(e => {
            return {
                status: 0,
            }
        });
    }

    useEffect(() => {
        attemptAuth().then(data => {

            setAuthCheck(data.status === 1)

            if (!(data.status === 1)) {

                router.push('/login');
                dispatch( actions.setPreUrl(router.pathname) );
                dispatch( actions.setIsLogin(false) );
                dispatch( actions.setProfileUser({}) );

                Cookie.deleteCookie('auth-token')
            }
        }).finally(() => {

        });
    },[]);

    if (!authCheck) return <></>

    return (
        <>
            {children}
        </>
    );
}