import MenuProfileLayout from "@/components/layout/LayoutProfile";
import Head from "next/head";
import React, {useState} from "react";
import {Form, SelectPicker} from "rsuite";
import * as Input from "@/components/layout/Input";
import {numb} from "@/utils/helper";

function Recharge() {
    const [cardSelected, setCardSelected] = React.useState('');
    const valueCard = [10000, 20000, 50000, 100000, 200000, 500000, 1000000].map(item => ({
        label: numb(item, {suffix: ' đ'}),
        value: item
    }))
    return <>
        <Head>
            <title>Nạp thẻ cào tự động</title>
        </Head>

        <div className=" bg-white rounded p-4 md:py-4 md:px-5 w-full ">
            <div className="border-b border-gray-200 pb-2 mb-4 text-gray-800">
                <h2 className="text-lg font-semibold">
                    Nạp Thẻ Cào
                </h2>
                <p className="text-xs">Tự động 24/7 - Nhập sai mệnh giá sẽ mất thẻ.</p>
            </div>
            <div className="max-w-sm">
                <div className="mb-2">
                    <label className="text-gray-700 text-sm">Nhà mạng <b>(Ưu tiên Viettel, Vinaphone)</b></label>
                    <div className="grid grid-cols-12 gap-2 text-sm">
                        <button type="button"
                                onClick={() => setCardSelected('viettel')}
                                className={`col-span-4 border-gray-300 border-2 h-10 px-3 rounded font-bold ${cardSelected == 'viettel' ? 'border-red-500' : ''}`}>
                            <img src={"/viettel.png"}
                                 style={cardSelected === 'viettel' ? {} : {filter: "grayscale(100%)"}} alt=""/>
                        </button>

                        <button type="button"
                                onClick={() => setCardSelected('vinaphone')}
                                className={`col-span-4 border-gray-300 border-2 h-10 px-3 rounded font-bold ${cardSelected == 'vinaphone' ? 'border-red-500' : ''}`}>
                            <img src={"/vinaphone.png"}
                                 style={cardSelected === 'vinaphone' ? {} : {filter: "grayscale(100%)"}} alt=""/>
                        </button>

                        <button type="button"
                                onClick={() => setCardSelected('mobifone')}
                                className={`col-span-4 border-gray-300 border-2 h-10 px-3 rounded font-bold ${cardSelected == 'mobifone' ? 'border-red-500' : ''}`}>
                            <img src={"/mobifone.png"}
                                 style={cardSelected === 'mobifone' ? {} : {filter: "grayscale(100%)"}} alt=""/>
                        </button>
                    </div>
                </div>
                <Form fluid>
                    <div className="custom-select">
                        <label className={'block text-sm mb-0 rs-form-control-label'}>
                            Mệnh giá
                        </label>
                        <SelectPicker data={valueCard} placeholder={'Chọn mệnh giá'} searchable={false}
                                      className={'block'}/>
                    </div>
                    <Input.TextFieldGray name="pin" label="Mã thẻ" placeholder="Nhập mã thẻ..."/>
                    <Input.TextFieldGray name="serial" label="Serial thẻ" placeholder="Nhập serial thẻ..."/>
                    <Form.Group>
                        <button type="submit"
                                className="text-center h-10 bg-red-500 w-32 hover:bg-red-600 text-white font-semibold rounded">
                            Nạp Thẻ
                        </button>
                    </Form.Group>
                </Form>
            </div>
        </div>
        <div className="border-2 border-amber-300 bg-white rounded text-sm leading-7 px-3 py-1 my-2">
            <div className="relative">
                <p>
                        <span style={{color: "rgb(220, 38, 38)"}}>
                            <strong>
                                Khi nạp thẻ mua nick tại web shop nạp thẻ không trừ chiết khấu nạp 100k card = 100k tiền shop
                            </strong>
                        </span>
                </p>
                <p>
                        <span  style={{color: "rgb(220, 38, 38)"}}>
                            <strong>
                                Lưu ý: Vui lòng nạp đúng mệnh giá, sai mệnh giá sẽ không được cộng tiền vào tài khoản.
                            </strong>
                        </span>
                </p>
            </div>
        </div>
        <div className="mt-4 bg-white rounded w-full">
            <div className="border-b border-gray-200 pb-2 text-gray-800 p-3 md:py-3 md:px-5">
                <h2 className="text-lg font-semibold">
                    Thẻ Nạp Gần Nhất
                </h2>
            </div>
            <div className="p-2 md:p-4">

            </div>
        </div>
    </>
}

Recharge.Layout = MenuProfileLayout
export default Recharge