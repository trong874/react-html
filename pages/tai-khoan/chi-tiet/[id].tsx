import {useRouter} from "next/router";
import {Swiper, SwiperSlide} from "swiper/react";
import React, {useRef, useState} from "react";
import {Navigation, Pagination} from "swiper";
import "swiper/css/pagination";
import ModalAccount from "@/components/Modal/ModalDetailAccount";
import SectionDetail from "@/components/widget/Account/SectionDetail";
import ModalBuyAcc from "@/components/Modal/ModalBuyAcc";

const SwiperAccount = () => {
    const slides = Array.from({ length: 10 }).map(
        (el, index) => `Slide ${index + 1}`
    );
    const swiperRef = useRef(null);
    const toSlide = (num:number) => {
        // @ts-ignore
        swiperRef.current?.swiper.slideTo(num);
    };

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    const [isActive,setIsActive] = useState(0);
    const [isOpen,setIsOpen] = useState(false);
    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);
    return <>
        <div className="relative">
            <Swiper
                slidesPerView={1}
                className={'rounded-md swiper-home h-56 md:h-72 cursor-pointer'}
                pagination={{
                    type: "fraction",
                }}
                ref={swiperRef}
                modules={[Pagination]}
                onSlideChange = {(swiperCore) => setIsActive(swiperCore.activeIndex)}
            >
                {slides.map((slideContent, index) => (
                    <SwiperSlide key={index} onClick={handleOpenModal}>
                        <img src="https://cdn.upanh.info/storage/upload/images/BANNER-SHOPNGOCRONG-NET.gif"
                             className="object-center object-fill h-full w-full object-cover rounded-md"
                             alt=""/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <span className="absolute inline-block px-2 rounded text-sm cursor-pointer font-semibold text-white bg-gray-800" style={{bottom:5,left:5,zIndex:1}}>
                Click để phóng to
            </span>
        </div>

        <div className="px-10 mt-4 relative">
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                breakpoints={{
                    640: {
                        slidesPerView: 5,
                    }
                }}
                navigation={{
                    // Both prevEl & nextEl are null at render so this does not work
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper:any) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                modules={[Navigation]}
                className={'rounded-md navigation-custom h-12'}
                style={{position:'static'}}
            >
                {slides.map((slideContent, index) => (
                    <SwiperSlide key={index} onClick={() => {
                        setIsActive(index)
                        toSlide(index)
                    }}>
                        <div className={`w-full h-full rounded-md cursor-pointer ${index === isActive ? 'border-2 border-red-500' : ''}`}>
                            <img src="https://cdn.upanh.info/storage/upload/images/BANNER-SHOPNGOCRONG-NET.gif"
                                 className="object-center object-fill w-full h-full rounded-md object-cover" alt=""/>
                            <span className={`absolute inline-block px-1 rounded-sm text-xs font-semibold text-white ${index === isActive ? 'active' : ''}`}
                                  style={{top:3,right:3}}>{index +1 }</span>
                        </div>
                    </SwiperSlide>
                ))}

                <div ref={navigationPrevRef} className={'left-0 absolute swiper-button-prev z-50 swiper-button-disabled'}>
                    <button className="w-10 text-2xl bg-amber-500 h-12 rounded text-white">
                        <i className="bx bx-chevron-left"/>
                    </button>
                </div>
                <div ref={navigationNextRef} className={'absolute right-0 swiper-button-next z-50'}>
                    <button className="w-10 text-2xl bg-amber-500 h-12 rounded text-white">
                        <i className="bx bx-chevron-right"/>
                    </button>
                </div> 
            </Swiper>
        </div>

        <ModalAccount open={isOpen} data={slides} callback={handleCloseModal}/>
    </>
}

function DetailAccount() {
    const router = useRouter();
    const [isOpen,setIsOpen] = useState(false);
    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);

    return <>
        <div className="md:bg-white grid grid-cols-12 gap-4 md:p-3 rounded">
            <div className="col-span-12 md:col-span-6">
                <SwiperAccount/>
            </div>
            <div className="col-span-12 md:col-span-6">

                <div className="my-3 md:mb-3 md:mt-0 bg-red-700 text-white py-1 px-2 rounded"
                     style={{backgroundImage: 'url(/bg-1.jpeg)'}}>
                    <div className="uppercase font-bold text-xl">
                        MÃ SỐ: {router.query.id}
                    </div>
                    <div className="text-xs text-red-100 relative font-semibold uppercase">
                        Danh Mục: <span>ACC ROBLOX TỰ CHỌN</span>
                    </div>
                </div>

                <div className="rounded-t bg-red-100 py-2 px-2 flex justify-between items-center relative">
                    <div className="text-red-600">
                        <div className="relative text-sm font-semibold" style={{top: 2}}>
                            <small>
                                <b className="font-bold">
                                    THẺ CÀO
                                </b>
                            </small>
                        </div>
                        <b className="text-2xl">
                            610.000 <small>đ</small>
                        </b>
                    </div>
                    <div className="text-xs font-bold text-red-400">
                        <small>hoặc</small>
                    </div>
                    <div className="text-red-600">
                        <div className="relative text-sm font-semibold" style={{top: 2}}>
                            <small>
                                <b className="font-bold">
                                    ATM/MOMO chỉ cần
                                </b>
                            </small>
                        </div>
                        <b className="text-2xl">
                            554.545 <small>đ</small>
                        </b>
                    </div>
                </div>
                <div className="mb-3 border rounded-b">
                    <div className="grid grid-cols-12 gap-2 py-1 border-b">
                        <div className="col-span-5">
                            <i className="relative bx bx-caret-right" style={{top:1}}/>
                            Level
                        </div>
                        <div className="col-span-7 font-semibold capitalize">
                            <span>230</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 py-1 border-b">
                        <div className="col-span-5">
                            <i className="relative bx bx-caret-right" style={{top:1}}/>
                            Thông tin
                        </div>
                        <div className="col-span-7 font-semibold capitalize">
                            <span className={'selector_wrap'}>
                                Nick Bloxfruit Level 2450,Third World, Trắng Thông Tin , Thức Tỉnh Df ,Nhiều Melee V2 Và Nhiều Phụ Kiện, Kiếm , Beli Như Hình
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 py-1">
                        <div className="col-span-5">
                            <i className="relative bx bx-caret-right" style={{top:1}}/>
                            Nổi bật
                        </div>
                        <div className="col-span-7 font-semibold capitalize">
                            <span>
                                Trái Leopard, Dragon, Gravity, Dual Katana, Scythe, Godhuman, 21tr Beli
                            </span>
                        </div>
                    </div>
                </div>
                <div className="sticky top-14 my-3 px-3 rounded py-2 cursor-pointer text-xl text-white font-bold bg-red-600 hover:bg-red-500 rounded w-full z-50 text-center" onClick={handleOpenModal}>
                    <span className="relative pl-8">
                        <i className="absolute text-3xl bx bxs-cart-add mr-1" style={{top: -4, left: -8}} />
                        MUA NGAY
                    </span>
                </div>
                <div className="my-3 w-full text-center md:text-xl text-gray-800 rounded font-bold">
                    NẠP QUA ATM/MOMO
                    <p>
                        <span className="focus:outline-none cursor-pointer text-red-600 font-bold">
                            XEM TẠI ĐÂY
                        </span>
                    </p>
                </div>
            </div>
        </div>

        <SectionDetail title={'TÀI KHOẢN ĐỒNG GIÁ'} data={Array.from({length:8})}/>
        <SectionDetail title={'TÀI KHOẢN ĐỀ XUẤT'} data={Array.from({length:4})}/>

        <ModalBuyAcc open={isOpen} data={{}} callback={handleCloseModal}/>
    </>
}

export default DetailAccount