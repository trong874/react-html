import {actions, useStore} from "@/store";
import * as React from 'react';
import {useEffect} from "react";
import {Notification, toaster} from 'rsuite';


export default function Login() {
    const [state, dispatch] = useStore();
    const {isLogin} = state;

    useEffect(() => {
        if(!isLogin) {
            dispatch(actions.setToggleModalLogin(true))

            const message = (
                <Notification type={'info'} header={'Thông báo'} closable>
                    <p>Cần đăng nhập thể truy cập trang này</p>
                </Notification>
            );
            toaster.push(message)
        }
    },[]);

    return (
        <>
        </>
    );
}