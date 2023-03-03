import * as React from 'react';
import * as request from '@/utils/request';
import {format_money, numb} from "@/utils/helper";
import {useEffect, useState} from "react";
import {Input, Loader, SelectPicker} from "rsuite";
import PaginationCustom from "@/components/PaginationCustom";
import Link from "next/link";
import Image from "next/image";
import {GetServerSideProps} from "next";
import Head from "next/head";
import {useRouter} from "next/router";

type Props = {
    services: any,
    page:number,
};

const per_page = 8;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const {page = 1} = query;
    const services = await request.get(`/service?page=${page}`,{limit:per_page});
    return {
        props: {
            services: services.data,
            page: Number(page),
        }
    }
}
const Card = ({service}: {service:any}) => {
    return <>
        <div className="col-span-6 sm:col-span-6 md:col-span-3 bg-white shadow-sm rounded-b-sm border md:border-0 md:rounded-b relative">
            <Link href={`/dich-vu/${service.slug}`}>
                <div className="relative" style={{paddingBottom:'55%'}}>
                    <Image src={service.image || '/placeholder-image.png'}
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
                        {service.title}
                    </h4>
                    <div className="my-1 text-xs text-gray-600 sub-interface-info">
                        <p>
                            Đã bán: <b className="text-red-500">
                            {format_money(service.total_order || 0 )}
                        </b>
                        </p>
                    </div>

                </div>
                <div className="absolute right-0 bottom-0 left-0">
                    <div className="w-full text-center cursor-pointer border rounded-b-sm border-red-500 hover:border-red-600 bg-red-500 transition duration-200 hover:bg-red-600 text-white uppercase font-semibold py-1 px-3">
                        <i className="text-2xl bx bxs-cart-add" />
                    </div>
                </div>
            </Link>
        </div>
    </>
}

export default function ListService({services,page}: Props) {
    const dataSelect = ['10000', '20000', '50000', '100000', '200000', '500000'].map(
        (item) => ({label: numb(item, {suffix: ' đ'}), value: item})
    );

    const router = useRouter();

    const [currentPage,setCurrentPage] = useState(page || 1)

    const [dataForm, setDataForm] = useState({
        id: '',
        from: '',
        to: '',
    })
    const [dataServices,setDataServices] = useState(services.data);

    const [isLoading,setIsLoading] = useState(false);

    const handlerCallbackPage = async (page:number) => {
        setIsLoading(true)
        const urlSearchParams = new URLSearchParams(window.location.search);
        urlSearchParams.set('page',String(page));
        const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
        window.history.pushState({}, '', newUrl);

        const res = await request.get('/service',
            {
                limit:per_page,
                page:page
            }).finally(() => {
                window.scroll({
                    top:90
                })
            setIsLoading(false)
        }).catch((e) => {
            setIsLoading(false)
            alert('Đã có lỗi xảy ra!')
        });
        setCurrentPage(page);
        const data_service = res.data;
        setDataServices(data_service.data)
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
        <Head>
            <title>Trang dịch vụ</title>
        </Head>
        <span className="text-sm relative">
            DANH MỤC:
        </span>
        <h2 className="mb-2 text-red-500 text-lg font-bold uppercase">
            DỊCH VỤ
        </h2>
        <div className="mb-1">
            <b className="text-xs">
                BỘ LỌC TÌM KIẾM
            </b>
        </div>
        <div className="grid grid-cols-12 gap-3">
            { isLoading && <Loader backdrop center size="md" content="Đang tải dữ liệu" vertical style={{zIndex:30}} />}
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

            {dataServices.map((item:any,index:number) => {
                return <Card key={index} service={item}/>
            })}
        </div>
        <div className="py-8">
            <PaginationCustom current_page={currentPage}
                              total={Number(services.total)}
                              limit={Number(services.per_page)}
                              callback={handlerCallbackPage}
            />
        </div>
    </>
}