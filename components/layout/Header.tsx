import React, {memo, useState} from "react";
import Link from "next/link";
import ModalLogin, {} from "@/components/Modal/ModalLogin";
import {Message, Popover, toaster, Whisper} from "rsuite";
import Image from "next/image";
import ModalAtmMomo from "@/components/Modal/ModalAtmMomo";
import {actions, useStore} from "@/store";
import {format_money, numb} from "@/utils/helper";
import {Logout} from "@/utils/Auth";
import {router} from "next/client";
import {useRouter} from "next/router";

const Header = () => {
    const [state, dispatch] = useStore();
    const router = useRouter();
    const handleLogout = async () => {
        const logout = await Logout();
        if (logout) {
            dispatch(actions.setIsLogin(false));
            await router.push('/');
        } else {
            throw new Error('Đã có lỗi xảy ra trong quá trình đăng xuất')
        }
    }
    const menuProfile = (<Popover style={{width: 290, padding: 5}}>
        <div className="border-b border-gray-100 grid grid-cols-12 gap-2 p-2 text-sm">
            <div className="col-span-2 flex items-center justify-content">
                <img src={"/unknown-avatar.jpg"} alt=""/>
            </div>
            <div className="col-span-10">
                <p>
                    <b>ID:</b> {state.profileUser ? state.profileUser.id : ''}
                </p>
                <p>
                    <b>Số dư:</b> <span className="text-red-600 font-bold">{state.profileUser ? numb(state.profileUser.balance,{suffix: ' đ'}) : ''}</span>
                </p>
                <p>
                    <b>Xu khoá:</b> <span className="text-red-600 font-bold">0xu</span>
                </p>
            </div>
        </div>
        <div className="text-sm">
            <div className="mt-2 text-red-500 font-bold text-sm block px-3">
                TÀI KHOẢN
            </div>
            <div className="px-2">
                <Link href={'/myaccount/profile'}
                      className={'font-semibold hover:text-gray-800 hover:bg-gray-100 block py-1 px-3'}>
                    <i className="relative bx bx-chevron-right" style={{top: 1}}/> Thông tin chung
                </Link>
            </div>
            <div className="text-red-500 font-bold text-sm my-1 block px-3">
                <i className="relative bx bxs-dollar-circle" style={{top: 1}}/> NẠP TIỀN
            </div>
            <div className="px-2">
                <Link href={'/myaccount/recharge'}
                      className={'font-semibold hover:text-gray-800 hover:bg-gray-100 block py-1 px-3'}>
                    <i className="relative bx bx-chevron-right" style={{top: 1}}/> Nạp thẻ cào (tự động)
                </Link>
            </div>
            <div className="px-2">
                <div className={'font-semibold hover:text-gray-800 hover:bg-gray-100 block py-1 px-3 cursor-pointer'}
                     onClick={() => dispatch(actions.setToggleModalRecharge(true))}>
                    <i className="relative bx bx-chevron-right" style={{top: 1}}/> Nạp ATM/MOMO (tự động)
                </div>
            </div>
            <div className="text-red-500 font-bold text-sm my-1 block px-3">
                LỊCH SỬ
            </div>
            <div className="px-2">
                <Link href={'/myaccount/history/game'}
                      className={'font-semibold hover:text-gray-800 hover:bg-gray-100 block py-1 px-3'}>
                    <i className="relative bx bx-chevron-right" style={{top: 1}}/> Lịch sử chơi game
                </Link>
            </div>
            <div className="px-2">
                <Link href={'/myaccount/history/nick'}
                      className={'font-semibold hover:text-gray-800 hover:bg-gray-100 block py-1 px-3'}>
                    <i className="relative bx bx-chevron-right" style={{top: 1}}/> Lịch sử mua nick
                </Link>
            </div>
            <div className="px-2">
                <Link href={'/myaccount/history/item'}
                      className={'font-semibold hover:text-gray-800 hover:bg-gray-100 block py-1 px-3'}>
                    <i className="relative bx bx-chevron-right" style={{top: 1}}/> Lịch sử mua vật phẩm
                </Link>
            </div>
            <div className="text-red-500 font-bold text-sm my-1 block px-3">
                KHÁC
            </div>
            <div className="px-2">
                <Link href={'/myaccount/voucher'}
                      className={'font-semibold hover:text-gray-800 hover:bg-gray-100 block py-1 px-3'}>
                    <i className="relative bx bx-chevron-right" style={{top: 1}}/> Voucher
                    <span className="relative text-xs px-2 inline-block rounded bg-red-600 text-white font-medium ml-1"
                          style={{top: -1}}>
                        Mới
                    </span>
                </Link>
            </div>
            <div className="px-2">
                <Link href={'/myaccount/withdraw'}
                      className={'font-semibold hover:text-gray-800 hover:bg-gray-100 block py-1 px-3'}>
                    <i className="relative bx bx-chevron-right" style={{top: 1}}/> Rút vật phẩm (Robux)
                </Link>
            </div>
            <div className="p-2">
                <div
                    className="py-1 rounded text-center bg-red-500 hover:bg-red-600 text-white font-semibold w-full cursor-pointer"
                    onClick={handleLogout}
                >
                    Đăng xuất
                </div>
            </div>
        </div>
    </Popover>)
    return <>
        <div className="sticky top-0 bg-white border-b border-gray-100 shadow-sm mb-2" style={{zIndex: 100}}>
            <div className="max-w-6xl mx-auto flex justify-between items-center px-2 py-2 md:py-2">
                <div className="menu-left flex items-center">
                    <Link href={'/'} className="relative">
                        <Image src="https://cdn.upanh.info/storage/upload/images/Logo%20shop/LOGO-SHOPNGOCRONG-NET.png"
                               height={50}
                               width={200}
                               alt="" className="w-auto h-10 md:h-12 relative"/>
                    </Link>
                    <Link href={'/myaccount/recharge'}
                          className="hidden md:flex ml-10 font-bold text-red-600 hover:text-red-500 px-3 text-sm items-center cursor-pointer">
                        <span className="inline-flex items-center justify-center h-6 w-7 rounded bg-red-100 mr-2">
                            <i className="text-lg bx bx-dollar"/>
                        </span>
                        NẠP THẺ
                    </Link>
                    <button type={'button'}
                            className="hidden md:flex ml-10 font-bold text-red-600 hover:text-red-500 px-3 text-sm items-center cursor-pointer"
                            onClick={() => state.isLogin
                                ? dispatch(actions.setToggleModalRecharge(true))
                                : dispatch(actions.setToggleModalLogin(true))
                            }>
                        <span className="inline-flex items-center justify-center h-6 w-7 rounded bg-red-100 mr-2">
                            <i className="text-lg bx bx-dollar"/>
                        </span>
                        NẠP ATM/MOMO
                    </button>
                </div>

                <div className="menu-right flex flex-wrap items-center justify-right">
                    {
                        state.isLogin
                            ? <Whisper placement="bottom"
                                       preventOverflow
                                       trigger="click"
                                       controlId="control-id-click"
                                       speaker={menuProfile}>

                                <div
                                    className="bg-red-500 hover:bg-red-600 transition duration-200 text-white text-sm flex items-center pr-8 pl-2 md:pl-3 rounded-lg font-semibold h-8 md:h-10 relative cursor-pointer toggle-menu-profile">
                                    <img src="https://hiharobux.com/unknown-avatar.jpg" alt=""
                                         className="hidden md:block w-6 rounded-lg border"/>
                                    <span className="hidden md:block relative ml-1" style={{top: -1}}>|</span>
                                    <span className="ml-1 font-bold">
                                        {format_money(state.profileUser.balance)}
                                    </span>
                                    <i className="top-1.5 md:top-2.5 text-lg absolute bx bx-caret-down-circle"
                                       style={{right: 8}}/>
                                </div>
                            </Whisper>
                            : <button
                                className="bg-red-500 hover:bg-red-600 transition duration-200 text-white text-sm px-4 rounded-lg font-semibold h-8 md:h-10 relative"
                                onClick={() => dispatch(actions.setToggleModalLogin(true))}
                            >
                                    <span className="hidden md:inline-block">
                                        <i className="absolute text-lg bx bxs-user" style={{top: 10}}/>
                                    </span>
                                <span className="md:ml-6">
                                        ĐĂNG NHẬP
                                    </span>
                            </button>
                    }
                </div>
            </div>
        </div>

        <ModalLogin/>
        <ModalAtmMomo/>
    </>
}

export default Header
