import {Modal, Tooltip, Whisper} from "rsuite";
import React, {useState} from "react";
import {handleCopy, numb} from "@/utils/helper";
import {actions, useStore} from "@/store";
type props_type = {
    open: boolean | undefined;
    callback: (() => void);
}
const StateDefault = () => {
    const [currencyConverted, SetCurrencyConverted] = useState('0 đ');
    const [currency, SetCurrency] = useState('0');
    const handleConvert = (num: any) => {
        const options = {
            suffix: '',
        }
        num = num.replace(/\D/g, '');
        SetCurrency(numb(num, options))
        const numConverted = numb((num * 1.1).toFixed(0), options) + ' đ';
        SetCurrencyConverted(numConverted)
    }
    return <>
        <div className="mt-4">
            <div className="text-sm font-semibold text-gray-700">
                <p>
                    <i className="bx bx-caret-right"/> Hệ thống nạp <b className="text-red-600">ATM/MOMO tự động
                    24/24</b> Nạp 100k nhận 110k tiền shop
                </p>
                <p>
                    <i className="bx bx-caret-right"/> <b>Lưu ý:</b>Chuyển tiền nhanh 24/7 để tránh bị treo, chậm tiền!
                    Nếu gửi đúng stk và nội dung mà 30p không nhận được tiền hoặc chuyển ghi sai nội dung vui lòng liên
                    hệ page để được hỗ trợ.
                </p>
            </div>
        </div>

        <div className="mt-4">
            <div className="uppercase text-red-600 font-bold text-sm mb-2">QUY ĐỔI TIỀN NẠP ATM/MOMO</div>
            <div className="flex justify-between items-center">
                <div className="2/5">
                    <div className="w-full relative">
                        <label className="inline-block text-gray-600 absolute text-xs font-medium"
                               style={{left: 10, top: 6}}>
                            Số tiền bạn chuyển
                        </label>
                        <input type="text"
                               value={currency}
                               onChange={
                                   (e) => {
                                       handleConvert(e.target.value)
                                   }
                               }
                               className="focus:outline-none pt-3 px-2 h-12 rounded border-2 border-gray-300 w-full text-sm font-semibold placeholder-gray-800 focus:placeholder-white focus:border-red-500 transition duration-200"/>
                    </div>
                </div>
                <div className="1/5">
                    <i className="bx bx-transfer-alt text-gray-600 text-lg"/>
                </div>
                <div className="2/5">
                    <div className="w-full relative">
                        <label className="inline-block text-gray-600 absolute text-xs font-medium"
                               style={{left: 10, top: 6}}>
                            Tiền nhận trên shop
                        </label>
                        <input type=""
                               readOnly
                               value={currencyConverted}
                               className="focus:outline-none pt-3 px-2 h-12 rounded border-2 border-gray-300 w-full text-sm font-semibold placeholder-gray-800"/>
                    </div>
                </div>
            </div>
        </div>
    </>
}
const StateAtm = () => {
    const accountNumber = '8802567899999';
    const transferContent = 'nap123321';
    return <>
        <div className="mt-4">
            <div className="relative text-sm text-red-600 leading-6">
                <p><span style={{color: "rgb(0, 0, 0)"}}><strong>THÔNG TIN TÀI KHOẢN NGÂN HÀNG</strong></span></p>
                <p><strong>CHỦ TÀI KHOẢN: </strong><span style={{color: "rgb(230, 77, 77);"}}><strong>Nguyễn Văn A</strong></span></p>
                <p><strong>NGÂN HÀNG : </strong><span style={{color: "rgb(230, 77, 77);"}}><strong>MB Bank</strong></span></p>
                <p><strong>SỐ TÀI KHOẢN : </strong><span style={{color: "rgb(230, 77, 77);"}}><strong>{accountNumber}</strong></span></p>
            </div>
            <Whisper preventOverflow
                     trigger="click"
                     placement={'bottom'}
                     speaker={<Tooltip>Đã copy số tài khoản</Tooltip>}>
                <button
                    className="mt-1 focus:outline-none px-2 h-6 bg-gray-500 hover:bg-gray-600 rounded text-xs font-bold text-white uppercase"
                    onClick={() => handleCopy(accountNumber)}
                >
                    COPY SỐ TÀI KHOẢN
                </button>
            </Whisper>
            <div className="border-b border-gray-200 my-3"/>
            <div className="my-2">
                <p className="font-semibold text-sm mb-1">
                    Nội dung chuyển khoản:
                </p>
                <div className="relative">
                    <input type="text"
                           value={transferContent}
                           readOnly
                           className="h-10 px-3 border-2 border-red-500 text-lg border-dashed rounded w-full text-red-600 font-extrabold focus:outline-none"/>
                    <Whisper preventOverflow
                             trigger="click"
                             placement={'bottom'}
                             speaker={<Tooltip>Đã copy nội dung chuyển khoản</Tooltip>}>
                        <button
                            className="bg-red-600 hover:bg-red-500 px-4 h-6 text-white flex items-center py-1 absolute text-sm font-semibold rounded" style={{top:8,right:8}}
                            onClick={() => handleCopy(transferContent)}
                        >
                            COPY NỘI DUNG
                        </button>
                    </Whisper>
                    <div className="mt-2 font-semibold text-sm">
                        <i className="ml-3 bx bxs-upvote"/> Khi chuyển khoản qua Ngân hàng (ATM) bạn cần ghi nội dung <b className="mx-1 text-red-600">nap1645481</b> bên trên.
                    </div>
                    <div className="mt-1 text-sm font-semibold text-red-600">
                        <i>
                            {'Lưu ý: Sau khi chuyển khoản xong, hãy chờ "vài phút" rồi ấn '}<b>{'"Xác nhận. Tôi đã chuyển"'}</b>.
                        </i>
                    </div>
                    <button className="my-2 text-uppercase bg-green-600 hover:bg-green-500 h-10 font-semibold rounded text-white px-3">
                        Xác nhận. Tôi đã chuyển
                    </button>
                    <div className="mt-1 font-semibold text-sm text-red-600">
                        <i>
                            {'Giao dịch chuyển sai "Nội dung chuyển khoản" sẽ không được xử lý tự động. Hãy liên hệ Fanpage để được hỗ trợ.'}
                        </i>
                    </div>
                </div>
            </div>
        </div>
    </>
}
const StateMomo = () => {
    const accountNumber = '0123456789';
    const transferContent = 'nap12345';
    return <>
        <div className="mt-4">
            <div className="relative text-sm text-pink-700 leading-6">
                <p><strong>THÔNG TIN VÍ MOMO</strong></p>
                <p><strong>CHỦ TÀI KHOẢN: </strong><span style={{color: "rgb(230, 77, 77)"}}><strong>Nguyễn Văn A</strong></span></p>
                <p><strong>﻿VÍ MOMO: </strong><span style={{color: "rgb(230, 77, 77)"}}><strong>{accountNumber}</strong></span></p>
            </div>
            <Whisper preventOverflow
                     trigger="click"
                     placement={'bottom'}
                     speaker={<Tooltip>Đã copy số tài khoản</Tooltip>}>
                <button
                    className="mt-1 focus:outline-none px-2 h-6 bg-gray-500 hover:bg-gray-600 rounded text-xs font-bold text-white uppercase"
                    onClick={() => handleCopy(accountNumber)}
                >
                    COPY SỐ TÀI KHOẢN
                </button>
            </Whisper>
            <div className="border-b border-gray-200 my-3"/>
            <div className="my-2">
                <p data-v-2823ba62="" className="font-semibold text-sm mb-1">
                    Nội dung <b className="text-red-500">ghi chú</b> khi chuyển:
                </p>
                <div className="relative">
                    <input readOnly
                           value={transferContent}
                           className="h-10 px-3 border-2 border-pink-700 text-lg border-dashed rounded w-full text-pink-700 font-extrabold focus:outline-none"/>
                    <Whisper preventOverflow
                             trigger="click"
                             placement={'bottom'}
                             speaker={<Tooltip>Đã copy nội dung chuyển khoản</Tooltip>}>
                        <button className="bg-pink-700 hover:bg-pink-600 px-4 h-6 text-white flex items-center py-1 absolute text-sm font-semibold rounded"
                                onClick={() => handleCopy(transferContent)}
                                style={{top:8,right:8}}>
                            COPY NỘI DUNG
                        </button>
                    </Whisper>
                </div>
                <div className="mt-2 font-semibold text-sm">
                    <i className="ml-3 bx bxs-upvote"/> Khi chuyển khoản qua ví Momo bạn cần ghi nội dung ghi chú
                    <b className="mx-1 text-pink-700">{transferContent}</b> bên trên.
                </div>
                <div className="mt-1 font-semibold text-sm text-red-600">
                    <p>Lưu ý: Nếu quá 30 phút không nhận được tiền, vui lòng liên hệ page hỗ trợ! </p>
                    <i>{'- Giao dịch chuyển sai "Nội dung ghi chú" sẽ không được xử lý tự động. Hãy liên hệ Fanpage để được hỗ trợ.'}</i>
                </div>
                <div className="border-b border-gray-200 my-3"/>
                <div className="mt-1">
                    <p className="font-semibold text-sm mb-1">Vui lòng chuyển trên 5000đ để được cộng tự động.</p>
                </div>
            </div>
        </div>
    </>
}

function ModalAtmMomo() {
    const [typeCharge, SetTypeCharge] = useState('default');
    const [state,dispatch] = useStore();
    return <>
        <Modal open={state.isOpenModalRecharge}
               size="xs"
               overflow={false}
               onClose={
                   () => {
                       dispatch(actions.setToggleModalRecharge(false))
                       SetTypeCharge('default')
                   }
               }
               data-centered="true"
               data-padding-zero
        >
            <Modal.Header className={"close-white"} style={{padding: 0}}>
                <div className="bg-red-600 text-xl text-white font-bold border-b rounded-t py-3.5 px-5">
                    <small>
                        <span>NẠP TIỀN - CHUYỂN KHOẢN QUA</span>
                    </small>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="px-5 pb-5">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 md:col-span-6">
                            <button
                                className={`w-full rounded flex items-center h-12 px-4 bg-gray-200 text-gray-800 ${typeCharge === 'atm' ? 'bg-red-600 text-white' : 'hover:bg-gray-300'}`}
                                onClick={() => SetTypeCharge('atm')}
                            >
                                <img src={'/bank.png'} alt="" className="w-6"/>
                                <span className="ml-2 font-semibold">
                                    Ngân Hàng (ATM)
                                </span>
                            </button>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <button
                                onClick={() => SetTypeCharge('momo')}
                                className={`w-full rounded flex items-center h-12 px-4 bg-gray-200 text-gray-800 ${typeCharge === 'momo' ? 'bg-red-600 text-white' : 'hover:bg-gray-300'}`}
                            >
                                <img src={'/momo.png'} alt="" className="w-6"/>
                                <span className="ml-2 font-semibold">
                                    Ứng dụng MOMO
                                </span>
                            </button>
                        </div>
                    </div>
                    {
                        typeCharge === 'default' && <StateDefault/>
                    }
                    {
                        typeCharge === 'momo' && <StateMomo/>
                    }
                    {
                        typeCharge === 'atm' && <StateAtm/>
                    }
                </div>
            </Modal.Body>
        </Modal>
    </>
}

export default ModalAtmMomo