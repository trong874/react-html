// @flow
import Link from "next/link";
import {format_money, numb, convertToSlug} from "@/utils/helper";
import {Input, Placeholder, SelectPicker} from "rsuite";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import * as request from '@/utils/request';

type Props = {};
type DataCard = {
    data: {
        image: string,
        slug: string,
        title: string,
        total_order: string | number | null
    },
    className?: string
}

const Card = ({data, className}: DataCard) => {
    return <>
        <div
            className={`col-span-6 sm:col-span-6 md:col-span-3 bg-white shadow-sm rounded-b-sm border md:border-0 md:rounded-b relative ${className}`}>
            <Link href={`/mua-acc/${data.slug}`}>
                <div className="relative" style={{paddingBottom: '55%'}}>
                    <Image src={`${data.image || '/placeholder-image.png'}`}
                           alt=""
                           className="w-full rounded-t-sm md:rounded-t object-cover"
                           fill
                           onError={(e) => {
                               (e.target as HTMLImageElement).src = '/placeholder-image.png'
                           }}
                           sizes="auto"/>
                </div>
                <div className="col-span-12 px-2 py-3 h-36 md:h-28 relative">
                    <h4 className="sub-interface-title uppercase text-xs font-semibold text-gray-800 mb-0">
                        {data.title}
                    </h4>
                    <div className="my-1 text-xs text-gray-600 sub-interface-info">
                        <p>
                            Đã bán: <b className="text-red-500">
                            {data.total_order || 0}
                        </b>
                        </p>
                    </div>

                </div>
                <div className="absolute right-0 bottom-0 left-0">
                    <div
                        className="w-full text-center cursor-pointer border rounded-b-sm border-red-500 hover:border-red-600 bg-red-500 transition duration-200 hover:bg-red-600 text-white uppercase font-semibold py-1 px-3">
                        <i className="text-2xl bx bxs-cart-add"/>
                    </div>
                </div>
            </Link>
        </div>
    </>
}

export default function Index(props: Props) {
    const [categoryAccount, setCategoryAccount] = useState([]);
    const [firstLoad, setFirstLoad] = useState(true);

    const [keywordFilter, setKeywordFilter] = useState('');

    useEffect(() => {

    }, [keywordFilter])

    useEffect(() => {
        firstLoad && request.get('/acc',{
            data: 'category_list',
            module:'acc_category',
        }).then(res => {
           if (res.status === 1) {
               setCategoryAccount(res.data);
           }
        }).finally(() => {
            setFirstLoad(false);
        });
    }, [])
    return <>
        <span className="text-sm relative">
            DANH MỤC:
        </span>
        <div className="grid grid-cols-12 gap-3 mb-3">
            <div className="col-span-12">
                <h2 className="mb-2 text-red-500 text-lg font-bold uppercase">
                    Danh sách mục Shop Account
                </h2>
            </div>
            <div className="col-span-12 md:col-span-3">
                <Input className={'c-control'}
                       placeholder="Chọn game muốn mua account"
                       onChange={(value) => {
                           const text = convertToSlug(value)
                           setKeywordFilter(text)
                       }}
                />
            </div>
        </div>
        {
            firstLoad &&
            <>
                <div className="grid grid-cols-12 gap-3">
                {
                    Array.from({length:8}).map((item,index) => {
                        return <div
                            key={index}
                            className={'col-span-6 sm:col-span-6 md:col-span-3 bg-white shadow-sm rounded-b-sm border md:border-0 md:rounded-b relative'}>
                            <div className={'loader-card'}/>
                        </div>
                    })
                }
                </div>
            </>
        }
        <div className="grid grid-cols-12 gap-3">

            {categoryAccount && categoryAccount.map((item: any, index: number) => {

                return <Card key={index}
                             data={item}
                             className={
                                 `${
                                     convertToSlug(item.title).indexOf(keywordFilter) === -1 ? 'hidden' : ''
                                 }`
                             }/>
            })}
        </div>
    </>
}