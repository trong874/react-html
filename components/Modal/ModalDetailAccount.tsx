import {Modal} from "rsuite";
import React, {useRef, useState} from "react";
import {useRouter} from "next/router";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";

type props_type = {
    open: boolean | undefined;
    data: any;
    callback: ((event: React.SyntheticEvent<Element, Event>) => void) | undefined;
}
export default function ModalAccount(props: props_type) {
    const router = useRouter()
    const swiperRef = useRef(null);
    const toSlide = (num: number) => {
        // @ts-ignore
        swiperRef.current?.swiper.slideTo(num);
    };
    const [isActive, setIsActive] = useState(0);
    return <>
        <Modal open={props.open}
               size="lg"
               overflow={false}
               data-centered="true"
               onClose={props.callback}
        >
            <Modal.Body style={{marginTop: 0, paddingBottom: 0}}>
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-8">
                        <Swiper
                            slidesPerView={1}
                            className={'rounded-md swiper-home'}
                            pagination={{
                                type: "fraction",
                            }}
                            modules={[Pagination]}
                            ref={swiperRef}
                            onSlideChange={(swiperCore) => setIsActive(swiperCore.activeIndex)}
                        >
                            {props.data.map((slideContent:undefined, index:number) => (
                                <SwiperSlide key={index}>
                                    <img src="https://cdn.upanh.info/storage/upload/images/BANNER-SHOPNGOCRONG-NET.gif"
                                         className="object-center object-fill w-full rounded-md"
                                         alt=""/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="col-span-4">
                        <div className="my-3 md:mb-3 md:mt-0 bg-red-700 text-white py-1 px-2 rounded">
                            <div className="uppercase font-bold text-xl">
                                MÃ SỐ: {router.query.id}
                            </div>
                            <div className="text-xs text-red-100 relative font-medium uppercase">
                                Mục:
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-2 list-image-account">
                            {
                                props.data.map((item:undefined, index:number) => (
                                    <div className="col-span-3" key={index} onClick={() => toSlide(index)}>
                                        <div
                                            className={`relative cursor-pointer border-2 hover:border-red-500 ${isActive === index ? 'border-red-500' : ''}`}>
                                            <img
                                                src="https://cdns.diongame.com/static/image-21c7c3ee-c8be-494a-b7b2-3c5a2a2ef2c0.jpeg"
                                                alt=""
                                                className="w-full h-16 border-2 object-cover object-center rounded hover:border-red-500 border-transparent"/>
                                            <span className={`absolute inline-block px-2 rounded-sm text-xs font-semibold text-white ${isActive === index ? 'bg-red-700' : 'bg-gray-500 '}`}
                                                  style={{top: 3, right: 3}}>
                                             {index + 1}
                                         </span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    </>
}
