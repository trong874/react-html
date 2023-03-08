import * as request from '@/utils/request'
import * as Cookie from 'cookies-next';
import {GetServerSideProps} from "next";
import {actions, useStore} from "@/store";
import {useState} from "react";

const Profile = async () => {
    if (!Cookie.hasCookie('auth-token')) {
        return null;
    }
    const token = Cookie.getCookie('auth-token');
    return await request.get('profile',{token}).catch(res => {
        return null
    });
}
const Logout = async () => {

    if (!Cookie.hasCookie('auth-token')) {
        return false;
    }
    const token = Cookie.getCookie('auth-token');
    let res = await request.post('logout',{token}).catch(res => {
        return false
    });
    if (res) {
        Cookie.deleteCookie('auth-token');
        return true
    }
    return false
}
export {
    Profile,
    Logout
}