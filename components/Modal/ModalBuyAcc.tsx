import {Modal, SelectPicker} from "rsuite";
import React from "react";
import {useRouter} from "next/router";

type props_type = {
    open: boolean | undefined;
    data: any;
    callback: (() => void) | undefined;
}
function ModalBuyAcc(props:props_type) {
    const router = useRouter();
    return <>
        <Modal open={props.open}
               size="xs"
               overflow={false}
               onClose={props.callback}
               data-centered="true"
               data-padding-zero
        >
            <Modal.Body>
                <div className=" bg-red-600 px-2 pb-1 text-xl text-white font-bold text-center border-b rounded-t ">
                    <small>
                        <span>XÁC NHẬN MUA TÀI KHOẢN</span>
                    </small>
                    <p className="text-2xl">
                        #{router.query.id}
                    </p>
                </div>
                <div className="p-2 md:p-4">
                    <div className="mb-3 border rounded-b">
                        <div className="grid grid-cols-12 gap-2 py-1 border-b">
                            <div className="col-span-5">
                                <i className="relative bx bx-caret-right" style={{top:1}}/> Tướng
                            </div>
                            <div className="col-span-7 font-semibold capitalize">
                                <span>64</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-2 py-1 border-b">
                            <div className="col-span-5">
                                <i className="relative bx bx-caret-right" style={{top:1}}/> Trang phục
                            </div>
                            <div className="col-span-7 font-semibold capitalize">
                                <span>69</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-2 py-1 border-b">
                            <div className="col-span-5">
                                <i className="relative bx bx-caret-right" style={{top:1}}/> Rank
                            </div>
                            <div className="col-span-7 font-semibold capitalize">
                                <span>Tinh Anh</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-2 py-1 border-b">
                            <div className="col-span-5">
                                <i className="relative bx bx-caret-right" style={{top:1}}/> Nổi bật
                            </div>
                            <div className="col-span-7 font-semibold capitalize">
                                <span>Paine Công Tước Máu, Raz Thái, Allain Thần Mặt Trời</span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="grid grid-cols-12 gap-2 mb-2 text-gray-700">
                            <div className="relative col-span-6 font-semibold text-base">
                                <span>Số dư của bạn</span>
                            </div>
                            <div className="col-span-6 text-right font-bold">
                                0đ
                            </div>
                        </div>
                        <div className="border-b border-gray-100 my-2" />
                        <div className="my-4">
                            <div className="flex items-center justify-between">
                                <div className=" font-medium flex items-center text-gray-700 block mb-1 mr-8 ">
                                    <span className=" h-5 w-5 flex items-center justify-center rounded bg-red-500 text-white inline-block relative mr-2 " style={{top:1}}>
                                        <i className="bx bxs-purchase-tag"/>
                                    </span>
                                    Voucher
                                </div>

                                <SelectPicker data={[{label:'Đăng nhập để dùng voucher',value:''}]} searchable={false}
                                              className={'w-full c-control'}
                                              disabledItemValues={['']}
                                              onChange={(value: string | null) => {

                                              }}
                                              placeholder="Chọn mã voucher"
                                />
                            </div>
                            <div className="border-b border-gray-100 my-2" />
                            <div className="grid grid-cols-12 gap-2">
                                <div className=" col-span-6 font-semibold text-base relative text-red-600 ">
                                    GIÁ TÀI KHOẢN
                                </div>
                                <div className=" col-span-6 text-right font-bold text-xl text-red-600 ">
                                    1.000.000đ
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-8">
                            <button className=" bg-red-500 border border-red-500 px-2 py-2 rounded text-white font-bold w-full ">
                                XÁC NHẬN MUA
                            </button>
                        </div>
                        <div className="col-span-4">
                            <button className="py-2 px-3 text-center border rounded w-full"  onClick={props.callback}>
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    </>
}

export default ModalBuyAcc