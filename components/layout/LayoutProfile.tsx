import React, {memo, ReactNode, useEffect, useState} from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import {Tooltip, Whisper} from "rsuite";
import {handleCopy, numb} from "@/utils/helper";
import {useStore, actions} from "@/store";
import {useRouter} from "next/router";
import {Auth} from "@/components/common";

type PropsCustom = {
    children: ReactNode,
}

function MenuProfileLayout(props: PropsCustom) {

    const [state, dispatch] = useStore();
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        setIsLogin(state.isLogin)
    },[])
    const router = useRouter();
    return (
        <Auth>
            <Layout>
                <div className="max-w-6xl mx-auto my-8 grid grid-cols-10 gap-2 px-2 relative">
                    <div className="col-span-2 hidden md:block">
                        <div className="w-full md:bg-transparent p-2 md:p-0 sticky top-20">
                            <div className="grid grid-cols-12 gap-2 pr-2 pb-2">
                                <div className="col-span-3 flex items-center justify-content">
                                    <img src={'/unknown-avatar.jpg'} alt="" className="w-full rounded-full border"/>
                                </div>
                                <div className="col-span-9">
                                    <div className="flex items-center">
                                        <b className="mr-1">
                                            ID:
                                        </b> {state.profileUser ? state.profileUser.id : ''}

                                        <Whisper preventOverflow
                                                 trigger="click"
                                                 placement={'bottom'}
                                                 speaker={<Tooltip>Đã copy</Tooltip>}>
                                        <span
                                            className="w-4 h-4 flex items-center justify-center ml-2 text-gray-600 cursor-pointer"
                                            onClick={() => handleCopy(state.profileUser ? state.profileUser.id : '')}>
                                            <i className="bx bxs-copy"/>
                                        </span>
                                        </Whisper>

                                    </div>
                                    <p className="text-sm">
                                        <b>Số dư: </b> <span
                                        className="text-red-600 font-bold">{state.profileUser ? numb(state.profileUser.balance, {suffix: ' đ'}) : ''}</span>
                                    </p>
                                    <p className="text-sm">
                                        <b>Xu: </b> <span className="text-red-600 font-bold">0xu</span>
                                    </p>
                                </div>
                            </div>
                            <div className="mb-4 w-3/4 border-b border-gray-200"/>
                            <div className="mb-3">
                                <div className="relative font-semibold text-gray-800">
                                <span
                                    className="h-7 w-7 rounded-full inline-flex justify-center items-center absolute bg-gray-200"
                                    style={{top: -2}}>
                                    <i className="text-lg bx bxs-user"/>
                                </span>
                                    <span className="ml-10 block">Tài khoản</span>
                                </div>
                                <div className="ml-11 mt-1 text-sm font-semibold text-gray-700">
                                    <Link href={'/myaccount/profile'}
                                          className={`block py-1 ${router.pathname == '/myaccount/profile' ? 'nav-active' : ''}`}>Thông
                                        tin chung</Link>
                                    <Link href={'/myaccount/password'}
                                          className={`block py-1 ${router.pathname == '/myaccount/password' ? 'nav-active' : ''}`}>Đổi
                                        mật khẩu</Link>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="relative font-semibold text-gray-800">
                                <span
                                    className="h-7 w-7 rounded-full inline-flex justify-center items-center absolute bg-gray-200"
                                    style={{top: -2}}>
                                    <i className="text-lg bx bxs-bell"/>
                                </span>
                                    <span className="ml-10 block">Tài khoản</span>
                                </div>
                                <div className="ml-11 mt-1 text-sm font-semibold text-gray-700">
                                    <Link href={'/myaccount/notification'}
                                          className={`block py-1 ${router.pathname == '/myaccount/notification' ? 'nav-active' : ''}`}>Tất
                                        cả thông báo</Link>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="relative font-semibold text-gray-800">
                                <span
                                    className="h-7 w-7 rounded-full inline-flex justify-center items-center absolute bg-gray-200"
                                    style={{top: -2}}>
                                    <i className="text-lg bx bxs-game"/>
                                </span>
                                    <span className="ml-10 block">Trò chơi</span>
                                </div>
                                <div className="ml-11 mt-1 text-sm font-semibold text-gray-700">
                                    <Link href={'/myaccount/withdraw'}
                                          className={`block py-1 ${router.pathname == '/myaccount/withdraw' ? 'nav-active' : ''}`}>Rút
                                        vật phẩm</Link>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="relative font-semibold text-gray-800">
                                <span
                                    className="h-7 w-7 rounded-full inline-flex justify-center items-center absolute bg-gray-200"
                                    style={{top: -2}}>
                                    <i className="text-lg bx bxs-wallet-alt"/>
                                </span>
                                    <span className="ml-10 block">Giao dịch</span>
                                </div>
                                <div className="ml-11 mt-1 text-sm font-semibold text-gray-700">

                                    <Link href={'/myaccount/recharge'}
                                          className={`block py-1 ${router.pathname == '/myaccount/recharge' ? 'nav-active' : ''}`}>Nạp
                                        thẻ cào tự động</Link>

                                    <button type={"button"} className="block py-1"
                                            onClick={() => dispatch(actions.setToggleModalRecharge(true))}>
                                        Nạp qua ATM/MOMO
                                    </button>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="relative font-semibold text-gray-800">
                                <span
                                    className="h-7 w-7 rounded-full inline-flex justify-center items-center absolute bg-gray-200"
                                    style={{top: -2}}>
                                    <i className="text-lg bx bxs-purchase-tag-alt"/>
                                </span>
                                    <span className="ml-10 block">Voucher</span>
                                </div>
                                <div className="ml-11 mt-1 text-sm font-semibold text-gray-700">
                                    <Link href={'/myaccount/voucher'}
                                          className={`block py-1 ${router.pathname == '/myaccount/voucher' ? 'nav-active' : ''}`}>Danh
                                        sách Voucher</Link>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="relative font-semibold text-gray-800">
                                <span
                                    className="h-7 w-7 rounded-full inline-flex justify-center items-center absolute bg-gray-200"
                                    style={{top: -2}}>
                                    <i className="text-lg bx bxs-notepad"/>
                                </span>
                                    <span className="ml-10 block">Lịch sử</span>
                                </div>
                                <div className="ml-11 mt-1 text-sm font-semibold text-gray-700">
                                    <Link href={'/myaccount/history/game'}
                                          className={`block py-1 ${router.pathname == '/myaccount/history/game' ? 'nav-active' : ''}`}>Chơi
                                        game</Link>
                                    <Link href={'/myaccount/history/recharge'}
                                          className={`block py-1 ${router.pathname == '/myaccount/history/recharge' ? 'nav-active' : ''}`}>Nạp
                                        thẻ</Link>
                                    <Link href={'/myaccount/history/transaction'}
                                          className={`block py-1 ${router.pathname == '/myaccount/history/transaction' ? 'nav-active' : ''}`}>Giao
                                        dịch</Link>
                                    <Link href={'/myaccount/history/nick'}
                                          className={`block py-1 ${router.pathname == '/myaccount/history/nick' ? 'nav-active' : ''}`}>Mua
                                        tài khoản</Link>
                                    <Link href={'/myaccount/history/item'}
                                          className={`block py-1 ${router.pathname == '/myaccount/history/item' ? 'nav-active' : ''}`}>Mua
                                        hòm v.phẩm</Link>
                                    <Link href={'/myaccount/history/service-item'}
                                          className={`block py-1 ${router.pathname == '/myaccount/history/service-item' ? 'nav-active' : ''}`}>Mua
                                        vật phẩm</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8">
                        {props.children}
                    </div>
                </div>
            </Layout>
        </Auth>

    )
}

export default MenuProfileLayout