import {Swiper, SwiperSlide} from "swiper/react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import Image from "next/image";

const BannerSwiper = () => {
    const slides = Array.from({ length: 10 }).map(
        (el, index) => `Slide ${index + 1}`
    );
    return <>
        <Swiper
            slidesPerView={1}
            className={'rounded-md swiper-home h-full'}
            pagination={{
                type: "fraction",
            }}
            modules={[Pagination]}
        >
            {slides.map((slideContent, index) => (
                <SwiperSlide key={index}>
                    <div className="relative h-48" style={{paddingBottom:'43%'}}>
                        <Image src="https://cdn.upanh.info/storage/upload/images/BANNER-SHOPNGOCRONG-NET.gif"
                               className="object-center object-cover rounded-md"
                               fill
                               priority
                               sizes="auto"
                               alt=""/>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </>
}


const TopRecharge = () => {
    return <>
        <div className="bg-white w-full rounded-md overflow-hidden h-full">
            <Tabs>
                <TabList style={{backgroundColor:'rgba(229,229,229,1)'}} className={'react-tabs__tab-list rounded-t-md'}>
                    <Tab>
                        <div className="py-2 text-center px-2 font-bold text-lg relative">
                              <span className="absolute font-extrabold text-base tab-title" style={{top:0,left:'20%'}}>
                                  TOP NẠP T.2
                              </span>
                            <div className="text-xs flex justify-center relative" style={{top:16}}>
                                <button className="mr-1 font-bold px-2 h-4 bg-amber-500 rounded flex items-center text-white relative">
                                    <small>
                                        THẺ CÀO
                                    </small>
                                </button>
                            </div>
                        </div>
                    </Tab>
                    <Tab>
                        <h2 className="py-2 px-3 w-48 text-center font-extrabold text-lg relative tab-title">
                            <i className="bx bxs-gift text-red-500 absolute text-2xl" style={
                                {transform: 'rotate(-12deg)',
                                    top: 9.5,
                                    left: 13}
                            }/>
                            <span className="ml-3 uppercase">
                              Sự Kiện Mới
                          </span>
                        </h2>
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className="overflow-y-auto" style={{maxHeight:'10.9rem'}}>
                        <div className="px-3">
                            <div className="flex items-center justify-between px-2 py-0" style={{height:'2.2rem'}}>
                                <div className="flex items-center">
                                    <i className="bx text-3xl text-red-600 bxs-crown"/>
                                    <span className="relative ml-1 text-gray-800 w-full font-bold truncate text-sm">
                                    ID 1633630
                                </span>
                                </div>
                                <div className="font-bold text-lg">
                                    <div className="bg-red-600 w-32 py-1 text-white rounded text-center inline-block text-sm">
                                        2,200,000
                                        <span className="text-xs">
                                    <small> đ</small>
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-2 py-0" style={{height:'2.2rem'}}>
                                <div className="flex items-center">
                                    <i className="bx text-3xl text-teal-500 bxs-polygon"/>
                                    <span className="relative ml-1 text-gray-800 w-full font-bold truncate text-sm">
                                    ID 1633630
                                </span>
                                </div>
                                <div className="font-bold text-lg">
                                    <div className="bg-red-600 w-32 py-1 text-white rounded text-center inline-block text-sm">
                                        2,200,000
                                        <span className="text-xs">
                                    <small> đ</small>
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-2 py-0" style={{height:'2.2rem'}}>
                                <div className="flex items-center">
                                    <i className="bx text-3xl text-teal-500 bxs-polygon"/>
                                    <span className="relative ml-1 text-gray-800 w-full font-bold truncate text-sm">
                                    ID 1633630
                                </span>
                                </div>
                                <div className="font-bold text-lg">
                                    <div className="bg-red-600 w-32 py-1 text-white rounded text-center inline-block text-sm">
                                        2,200,000
                                        <span className="text-xs">
                                    <small> đ</small>
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-2 py-0" style={{height:'2.2rem'}}>
                                <div className="flex items-center">
                                    <i className="bx text-3xl text-teal-500 bxs-polygon"/>
                                    <span className="relative ml-1 text-gray-800 w-full font-bold truncate text-sm">
                                    ID 1633630
                                </span>
                                </div>
                                <div className="font-bold text-lg">
                                    <div className="bg-red-600 w-32 py-1 text-white rounded text-center inline-block text-sm">
                                        2,200,000
                                        <span className="text-xs">
                                    <small> đ</small>
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-2 py-0" style={{height:'2.2rem'}}>
                                <div className="flex items-center">
                                    <i className="bx text-3xl text-teal-500 bxs-polygon"/>
                                    <span className="relative ml-1 text-gray-800 w-full font-bold truncate text-sm">
                                    ID 1633630
                                </span>
                                </div>
                                <div className="font-bold text-lg">
                                    <div className="bg-red-600 w-32 py-1 text-white rounded text-center inline-block text-sm">
                                        2,200,000
                                        <span className="text-xs">
                                    <small> đ</small>
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-2 py-0" style={{height:'2.2rem'}}>
                                <div className="flex items-center">
                                    <i className="bx text-3xl text-teal-500 bxs-polygon"/>
                                    <span className="relative ml-1 text-gray-800 w-full font-bold truncate text-sm">
                                    ID 1633630
                                </span>
                                </div>
                                <div className="font-bold text-lg">
                                    <div className="bg-red-600 w-32 py-1 text-white rounded text-center inline-block text-sm">
                                        2,200,000
                                        <span className="text-xs">
                                    <small> đ</small>
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-2 py-0" style={{height:'2.2rem'}}>
                                <div className="flex items-center">
                                    <i className="bx text-3xl text-teal-500 bxs-polygon"/>
                                    <span className="relative ml-1 text-gray-800 w-full font-bold truncate text-sm">
                                    ID 1633630
                                </span>
                                </div>
                                <div className="font-bold text-lg">
                                    <div className="bg-red-600 w-32 py-1 text-white rounded text-center inline-block text-sm">
                                        2,200,000
                                        <span className="text-xs">
                                    <small> đ</small>
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-2 py-0" style={{height:'2.2rem'}}>
                                <div className="flex items-center">
                                    <i className="bx text-3xl text-teal-500 bxs-polygon"/>
                                    <span className="relative ml-1 text-gray-800 w-full font-bold truncate text-sm">
                                    ID 1633630
                                </span>
                                </div>
                                <div className="font-bold text-lg">
                                    <div className="bg-red-600 w-32 py-1 text-white rounded text-center inline-block text-sm">
                                        2,200,000
                                        <span className="text-xs">
                                    <small> đ</small>
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto w-2/3 border-t border-l-none border-r-none border-b-none border-gray-300 my-2"/>
                    <div className="px-3">
                        <div className="text-base font-sm border-yellow-500 rounded bg-yellow-100 px-2 py-1" style={{marginBottom:'.4rem'}}>
                            Sắp tới sẽ có <b className="text-red-600">sự kiện hot</b>, hãy chờ nhé!!!
                        </div>
                        <div className="flex justify-center items-center text-lg mt-1">
                            <button
                                className="bg-red-500 hover:bg-red-600 transition duration-200 text-white cursor-pointer h-10 rounded px-8 font-extrabold  w-4/5">
                        <span className="">
                            NẠP THẺ NGAY
                        </span>
                            </button>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex items-center justify-center text-gray-600">
                        Chưa có thông báo mới!
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    </>
}
export default function SectionFirst() {
    return <>
        <div className="grid grid-cols-12 gap-2 md:gap-4 my-4 px-2 md:px-0">
            <div className="col-span-12 md:col-span-8">
                <BannerSwiper/>
            </div>
            <div className="col-span-12 md:col-span-4">
                <TopRecharge/>
            </div>
        </div>
    </>
}