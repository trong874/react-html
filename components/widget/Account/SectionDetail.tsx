import Link from "next/link";
import Image from 'next/image'

type SectionDetail = {
    title:string;
    data:{}[];
}
function SectionDetail(props:SectionDetail) {
    return <>
        <div className="mt-10 text-xl font-bold">
            {props.title}
        </div>

        <div className="grid grid-cols-12 gap-3 py-2">
            {
                props.data.map((item,index) => (
                    <div className="col-span-12 md:col-span-3 bg-white relative border border-transparent hover:border-red-500 transition duration-200 rounded" key={index}>
                        <Link href={'123'}>
                            <div className="relative mb-20">
                                <div className="tw-new-id absolute inline-flex items-center px-2 h-6 bg-red-600 text-white font-semibold rounded text-sm" style={{top:8,left:8}}>
                                    MS 275492
                                </div>
                                <img src="https://cdns.diongame.com/static/image-81f157fd-9142-446e-80da-6187a215cd70.jpeg" alt=""
                                     className="h-56 md:h-40 w-full object-fill object-center rounded-t-sm"/>
                                <div className=" border-b border-gray-100 py-2 text-sm px-2 truncate ">
                                    <i className="text-red-500 bx bxs-hot"/> Best Valhein sv4 + cá mập
                                </div>
                                <div className="my-2 py-1 px-2 relative">
                                    <div className="grid grid-cols-12 gap-y-1 leading-6 text-gray-700 text-xs font-medium">
                                        <div className="col-span-12 text-base md:text-sm">
                                            <i className="block md:hidden relative bx bx-caret-right" style={{top:1}}/> Tướng: <b className={'text-gray-800'}>114</b>
                                        </div>
                                        <div className="col-span-12 text-base md:text-sm">
                                            <i className="block md:hidden relative bx bx-caret-right" style={{top:1}}/> Trang phục: <b className={'text-gray-800'}>114</b>
                                        </div>
                                        <div className="col-span-12 text-base md:text-sm">
                                            <i className="block md:hidden relative bx bx-caret-right" style={{top:1}}/> Rank: <b className={'text-gray-800'}>114</b>
                                        </div>
                                        <div className="col-span-12 text-base md:text-sm">
                                            <i className="block md:hidden relative bx bx-caret-right" style={{top:1}}/> Trạng thái: <b className={'text-gray-800'}>114</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute right-0 bottom-0 left-0">
                                <div className="border-t rounded-b-sm border-gray-100 px-2 py-1">
                                    <div className="rounded-sm w-full font-medium">
                                <span className="w-full text-center inline-block px-2">
                                    <span className="text-gray-600 inline-block text-xs line-through mr-2">
                                        1.300.000 <small>đ</small>
                                    </span>
                                    <span className="text-red-500 text-lg font-extrabold">
                                        1.000.000 <small>đ</small>
                                    </span>
                                </span>
                                    </div>
                                </div>
                                <div className=" w-full text-center cursor-pointer border rounded-b-sm border-red-500 hover:border-red-600 bg-red-500 transition duration-200 hover:bg-red-600 text-white uppercase font-semibold py-1 px-3 ">
                                    <i className="text-2xl bx bxs-cart-add"/>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    </>
}

export default SectionDetail