import Link from "next/link";
import Image from "next/image";
import React, {useEffect} from "react";
import Marquee from "react-fast-marquee/dist";
import {SelectPicker} from "rsuite";
import {numb} from "@/utils/helper";
import {useRouter} from "next/router";

const Game = () => {
    const dataSelect = [1, 3, 5, 7, 10].map(
        (item) => ({label: `${item} lần - giá ${item *12}k` , value: item})
    );

    const router = useRouter();

    console.log(router.query)

    useEffect(() => {
        console.log(router.query)
    },[])

    return <>
        <div className="grid grid-cols-12 gap-4 w-full mb-8 rounded p-0 md:p-2">
            <div className="col-span-12 md:col-span-8">
                <div className="py-6 bg-white rounded">
                    <h2 className="game__title uppercase font-bold text-2xl md:text-3xl px-2 md:px-5 text-center md:text-left mb-2">
                        VÒNG QUAY NỔ HŨ
                    </h2>
                    <div className="grid grid-cols-12 gap-2">
                        <div
                            className="col-span-5 md:col-span-4 py-2 md:py-0 pl-3 md:pl-5 roboto text-sm font-semibold">
                            <span className="game__user-online relative inline-block border-2 border-green-400 bg-green-100 rounded text-green-600 px-2 shadow">
                                Đang chơi: 354 <i className="relative bx bxs-user" style={{top:1}}/>
                            </span>
                        </div>
                        <div
                            className="col-span-7 md:col-span-8 pr-3 md:px-5 roboto text-sm font-semibold flex items-center justify-end">
                            <div>
                                <button
                                    className="relative inline-block border-2 border-red-400 bg-red-100 rounded text-red-600 px-3 mr-1 uppercase font-semibold shadow">
                                    Thể lệ
                                </button>
                                <button
                                    className="relative inline-block border-2 border-red-400 bg-red-100 rounded text-red-600 px-3 uppercase font-semibold shadow">
                                    Lịch sử
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="receiver p-3 md:px-5">
                            <Marquee speed={50} gradientWidth={100}>
                                <span className="game__list-winner-1 mr-2 text-sm font-bold"> Danh sách trúng thưởng:</span>
                                <span className="inline-block text-sm font-medium text-gray-700">
                                    <b className="game__list-winner-2 text-red-600"><i className="relative bx bxs-user" style={{top:1}}/> a*****99</b>
                                    - Chúc mừng đã trúng 300 Robux (4 giờ trước)
                                    <span className="mx-3"> - </span>
                                </span>
                                <span className="inline-block text-sm font-medium text-gray-700">
                                    <b className="game__list-winner-2 text-red-600"><i className="relative bx bxs-user" style={{top:1}}/> a*****99</b>
                                    - Chúc mừng đã trúng 300 Robux (4 giờ trước)
                                    <span className="mx-3"> - </span>
                                </span>
                                <span className="inline-block text-sm font-medium text-gray-700">
                                    <b className="game__list-winner-2 text-red-600"><i className="relative bx bxs-user" style={{top:1}}/> a*****99</b>
                                    - Chúc mừng đã trúng 300 Robux (4 giờ trước)
                                    <span className="mx-3"> - </span>
                                </span>
                            </Marquee>
                        </div>
                    </div>
                    <div className="mt-10 mb-6">
                        <div className="flex justify-center">
                            <SelectPicker data={dataSelect} searchable={false}
                                          className={'w-56 c-control'}
                                          placeholder="Chọn giá tiền đến"
                            />
                        </div>
                    </div>

                    <div className="my-2 flex justify-center items-center">
                        <button type="button"
                                className="rounded text-white transition duration-200 hover:border-blue-700 hover:bg-blue-700 border-2 bg-blue-600 border-blue-600 focus:outline-none py-1 px-4 font-bold mr-2">
                            Chơi thử
                        </button>
                        <button type="button"
                                className="transition duration-200 hover:bg-red-700 hover:border-red-700 bg-red-600 py-1 text-white border-2 border-red-600 block font-bold focus:outline-none w-36 rounded">
                            <span className="relative" style={{top: 1}}>
                                <i className="relative bx bxs-right-arrow" style={{top:2}}/> Quay Ngay</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-4 px-2">
                <div className="mb-5">
                    <div
                        className="bg-red-500 text-white font-semibold py-2 h-12 rounded uppercase w-full relative text-center flex px-3 justify-between items-center">
                        <span className="ml-1"> Nạp tiền </span>
                        <div>
                            <Link
                                href={'/myaccount/recharge'}
                                className="font-semibold px-2 py-1 rounded bg-white text-gray-600 hover:text-gray-600 text-sm inline-flex items-center mr-1">
                                <i className="relative text-base bx bxs-dollar-circle mr-1" style={{top:0,left: -1}}/>
                                Thẻ cào
                            </Link>
                            <button
                                className="font-semibold px-2 py-1 rounded bg-white text-gray-600 text-sm inline-flex items-center">
                                <i className="relative text-base bx bxs-bank mr-1" style={{top:0,left: -1}}/>
                                Bank/Momo
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mb-2">
                    <h2 className="text-xl font-bold">CÓ THỂ BẠN QUAN TÂM</h2>
                    <div className="grid grid-cols-12 gap-y-4">
                        <div className="col-span-12 bg-white shadow-sm rounded-b-sm border md:border-0 md:rounded-b">
                            <Link href={''}>
                                <div className="col-span-5">
                                    <div className="relative" style={{paddingBottom:'56.2%'}}>
                                        <Image src={'https://cdns.diongame.com/static/image-5383d1d4-9c31-4dc5-b88d-6a3f9d2da890.gif'}
                                               alt=""
                                               className="w-full rounded-t-sm md:rounded-t object-cover" fill sizes="auto"/>
                                    </div>
                                </div>
                                <div className="col-span-12 px-2 py-3 h-28 relative">
                                    <h4 className="sub-interface-title uppercase text-sm font-semibold text-gray-800 mb-0">
                                        MÁY CHẾ TÁC MP5
                                    </h4>
                                    <div className="my-1 text-xs text-gray-600 sub-interface-info">
                                        <p><span>Đã chơi: <b className="text-red-500">2.2k</b></span></p>
                                    </div>
                                    <div className="absolute bottom-2 right-2 left-2 mt-2">
                                        <button className="new text-xs border px-1.5">
                                            <span> 19.000đ </span>
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-span-12 bg-white shadow-sm rounded-b-sm border md:border-0 md:rounded-b">
                            <Link href={''}>
                                <div className="col-span-5">
                                    <div className="relative" style={{paddingBottom:'56.2%'}}>
                                        <Image src={'https://cdns.diongame.com/static/image-5383d1d4-9c31-4dc5-b88d-6a3f9d2da890.gif'}
                                               alt=""
                                               className="w-full rounded-t-sm md:rounded-t object-cover" fill sizes="auto"/>
                                    </div>
                                </div>
                                <div className="col-span-12 px-2 py-3 h-28 relative">
                                    <h4 className="sub-interface-title uppercase text-sm font-semibold text-gray-800 mb-0">
                                        MÁY CHẾ TÁC MP5
                                    </h4>
                                    <div className="my-1 text-xs text-gray-600 sub-interface-info">
                                        <p><span>Đã chơi: <b className="text-red-500">2.2k</b></span></p>
                                    </div>
                                    <div className="absolute bottom-2 right-2 left-2 mt-2">
                                        <button className="new text-xs border px-1.5">
                                            <span> 19.000đ </span>
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Game