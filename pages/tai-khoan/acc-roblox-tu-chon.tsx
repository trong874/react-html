import {Input, SelectPicker} from "rsuite";
import {numb} from "@/utils/helper";
import Image from 'next/image'
import React, {useEffect, useState} from "react";
import Link from "next/link";
import PaginationCustom from "@/components/PaginationCustom";


const Card = () => {
    return <>
        <div
            className="col-span-12 md:col-span-3 bg-white relative border border-transparent hover:border-red-500 transition duration-200 rounded">
            <Link href={'/tai-khoan/chi-tiet/12312'}>
                <span
                    className="tw-new-id absolute inline-flex items-center px-2 h-6 bg-red-600 text-white font-semibold rounded text-sm" style={{top:8,left:8}}>
                MS 295420
                </span>
                <img src="https://cdn.upanh.info/storage/upload/images/DICH-VU-BAN-HONG-NGOC.gif" alt=""
                     className="h-56 md:h-40 w-full object-fill object-center rounded-t-sm"/>

                <div className="border-b border-gray-100 py-2 text-sm px-2 truncate">
                    <i className="text-red-500 bx bxs-hot"/> Trái Leopard, Dragon, Gravity, Dual Katana, Scythe,
                    Godhuman, 21tr beli
                </div>
                <div className="my-2 py-1 px-2 relative mb-20">
                    <div className="grid grid-cols-12 gap-y-1 leading-6 text-gray-700 text-xs">
                        <div className="col-span-12 text-base md:text-sm">
                            <i className="block md:hidden relative bx bx-caret-right" style={{top: 1}}/>
                            Level: <b className="text-gray-800">2545</b>
                        </div>
                        <div className="col-span-12 text-base md:text-sm">
                            <i className="block md:hidden relative bx bx-caret-right" style={{top: 1}}/>
                            Thông tin: <b className="text-gray-800">Nick bloxfruit lev...</b>
                        </div>
                    </div>
                </div>
                <div className="absolute right-0 bottom-0 left-0">
                    <div className="border-t rounded-b-sm border-gray-100 px-2 py-1">
                        <span className="w-full text-center text-red-600 inline-block font-extrabold px-2">
                            610.000 đ
                        </span>
                    </div>
                    <div className="w-full text-center cursor-pointer border rounded-b-sm border-red-500 hover:border-red-600 bg-red-500 transition duration-200 hover:bg-red-600 text-white uppercase font-semibold py-1 px-3">
                        <i className="text-2xl bx bxs-cart-add" />
                    </div>
                </div>
            </Link>
        </div>
    </>
}

function AccountRoblox() {
    const dataSelect = ['10000', '20000', '50000', '100000', '200000', '500000'].map(
        (item) => ({label: numb(item, {suffix: ' đ'}), value: item})
    );

    const [dataForm, setDataForm] = useState({
        id: '',
        from: '',
        to: '',
    })

    const handlerCallbackPage = (page:number) => {
        console.log('callback',page)
        // call api ở đây
    }
    useEffect(() => {
    }, [dataForm])
    const handleSetDataForm = (name: string, value: string | null) => {
        const data = {
            ...dataForm,
            [name]: value
        }
        setDataForm(data);
    }
    return <>
        <span className="text-sm relative">
            DANH MỤC:
        </span>
        <h2 className="mb-2 text-red-500 text-lg font-bold uppercase">
            ACC ROBLOX TỰ CHỌN
        </h2>
        <div className="mb-1">
            <b className="text-xs">
                BỘ LỌC TÌM KIẾM
            </b>
        </div>
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-3">
                <Input className={'c-control'}
                       placeholder="ID - Ví dụ 123"
                />
            </div>
            <div className="col-span-12 md:col-span-3">
                <SelectPicker data={dataSelect} searchable={false}
                              className={'w-full c-control'}
                              onChange={(value: string | null) => {
                                  handleSetDataForm('from', value)
                              }}
                              placeholder="Chọn giá tiền từ"
                />
            </div>
            <div className="col-span-12 md:col-span-3">
                <SelectPicker data={dataSelect} searchable={false}
                              className={'w-full c-control'}
                              onChange={(value: string | null) => {
                                  handleSetDataForm('to', value)
                              }}
                              placeholder="Chọn giá tiền đến"
                />
            </div>
            <div className="col-span-12 md:col-span-3"/>
            <div className="col-span-12 md:col-span-3">
                <div className="w-full relative">
                    <button
                        className="focus:outline-none px-2 h-10 rounded border-2 border-red-500 bg-red-500 text-white w-full text-sm font-semibold hover:bg-red-600 hover:border-red-600 transition duration-200">
                        <i className="relative text-xl bx bxs-filter-alt mr-1" style={{top: 2}}/> Lọc
                    </button>
                </div>
            </div>
            <div className="col-span-12 md:col-span-3">
                <div className="w-full relative">
                    <button
                        className="focus:outline-none px-2 h-10 rounded border-2 border-gray-700 bg-gray-700 text-white w-full text-sm font-semibold hover:bg-gray-800 hover:border-gray-800 transition duration-200">
                        Xoá Lọc
                    </button>
                </div>
            </div>
            <div className="col-span-12 md:col-span-3"/>
            <div className="col-span-12 md:col-span-3"/>

            {Array.from({length:12}).map((item,index) => {
                return <Card key={index}/>
            })}
        </div>
        <div className="py-8">
            <PaginationCustom total={100} limit={20} callback={handlerCallbackPage}/>
        </div>
    </>
}

export default AccountRoblox