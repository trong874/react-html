import React from "react";
import SectionFirst from "@/components/widget/SectionFirst";
import Marquee from "react-fast-marquee/dist";
import SectionHome from "@/components/widget/SectionHome";
import Head from "next/head";
import SEO from "@/components/common/Seo";
import {actions, useStore} from "@/store";
import {useRouter} from "next/router";

const data1 = Array.from({length: 8}).map((item: any, index: number) => {
    return {
        title: `Item ${index}`,
        image: `https://cdns.diongame.com/static/image-3b242b5c-46af-489a-9b3e-381fd9ce988e.gif`,
        played: 34500,
        tag: `Rẻ nhất thị trường`,
    }
})
const data2 = Array.from({length: 8}).map((item: any, index: number) => {
    return {
        title: `Vòng quay nổ hũ ${index}`,
        image: `https://cdn.upanh.info/storage/upload/images/DICH-VU-BAN-HONG-NGOC.gif`,
        price_old: 23000,
        played: 34500,
        tag: 20000,
    }
})


export default function Home() {
    return (
        <>
            <SEO
                data={{
                    title: 'Trang chủ | Shopngocrong.net',
                    description: 'Chúng tôi chuyên cung cấp dịch vụ game ngọc rồng giá rẻ nhất',
                    url: '',
                    thumbnailUrl: '/imager_thumbnail.jpg',
                }}
            />

            <SectionFirst/>

            <div className="mb-4 text-red-500 font-bold px-2 bg-white md:rounded py-2 relative">
          <span className="absolute flex items-center justify-center text-xl w-10 bg-white md:rounded"
                style={{top: 0, left: 0, bottom: 0, zIndex: 5}}>
              <i className="bx bxs-bell-ring"/>
          </span>
                <div className="flex w-full items-center notification-home">
                    <Marquee speed={75} gradientWidth={100}>
                        I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>
            </div>

            <SectionHome title={'TRÒ CHƠI KHUYẾN MÃI NHÂN DỊP KHAI TRƯƠNG'} data={data1}/>

            <SectionHome title={'DANH MỤC TÀI KHOẢN SIÊU NGON'} data={data2}/>
        </>
    )
}
