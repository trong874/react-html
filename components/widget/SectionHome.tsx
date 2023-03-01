import React from "react";
import Link from "next/link";
import {format_money,numb} from '@/utils/helper'
import Image from "next/image";
interface SectionHome{
    title: string;
    data: any;
}
const SectionHeader = ({title}:{title:string}) => {
    return <>
        <div
            className="header-sub-interface md:top-20 bg-white p-2 md:p-3 block text-base md:text-xl border-b md:rounded-t">
            <div className="uppercase font-bold text-red-600">
                {title}
            </div>
        </div>
    </>
}
const SectionContent = ({data}:any) => {
    type Card = {
        title:string,
        image:string,
        played: number,
        price_old: number | undefined,
        tag:any,
    }

    const option_format = {
        suffix:' đ',
    };
    return <>
        <div className="bg-gray-100 py-2 px-2 md:px-0">
            <div className="grid grid-cols-12 gap-2 md:gap-4">
                {data.map((item:Card,key:number) => {
                    return <div className="col-span-6 sm:col-span-6 md:col-span-3 bg-white shadow-sm rounded-b-sm border md:border-0 md:rounded-b relative" key={key}>
                        <Link href={'/tai-khoan/acc-roblox-tu-chon'}>
                            <div className="relative" style={{paddingBottom:'55%'}}>
                                <Image src={item.image} alt="" className="w-full rounded-t-sm md:rounded-t object-cover" fill sizes="auto"/>
                            </div>
                            <div className="col-span-12 px-2 py-3 h-36 md:h-28 relative">
                                <h4 className="sub-interface-title uppercase text-xs font-semibold text-gray-800 mb-0">
                                    {item.title}
                                </h4>
                                <div className="my-1 text-xs text-gray-600 sub-interface-info">
                                    <p>
                                        Đã bán: <b className="text-red-500">
                                            {format_money(item.played)}
                                        </b>
                                    </p>
                                </div>
                                <div className="absolute bottom-2 right-2 left-2 mt-2">
                                    {item.price_old && <button className="tw-old text-xss px-1.5">{numb(item.price_old, option_format)}</button>}
                                    <div className="tw-new text-xs border px-1.5">
                                        <span> {isNaN(item.tag) ? item.tag : numb(item.tag,option_format)} </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                })}
            </div>
        </div>
    </>
}
export default function SectionHome({title,data}:SectionHome) {
    return <>
        <SectionHeader title={title}/>
        <SectionContent data={data}/>
    </>
}