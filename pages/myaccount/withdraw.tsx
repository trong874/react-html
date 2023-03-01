import MenuProfileLayout from "@/components/layout/LayoutProfile";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import React from "react";
import * as Input from "@/components/layout/Input";
import {Radio} from "rsuite";

function Withdraw() {
    return <>
        <h2 className="mb-2 font-bold text-xl">
            RÚT VẬT PHẨM (GAME)
        </h2>
        <Tabs>
            <TabList className={'react-tabs__tab-list grid grid-cols-12 mb-4 bg-white tabs-game'}>
                <Tab>
                    <div className="py-2 font-semibold border-b-2 relative focus:outline-none hover:border-red-500 text-center">
                        <img src="https://tngshop.vn/icon_ff.png" className="hidden md:block h-12 absolute left-2" style={{top:6}}/>
                        <span>Rút <span className="hidden md:inline-block">Kim Cương</span><span className="inline-block md:hidden">KC</span>
                        </span>
                        <p className="text-xs md:text-sm font-semibold">
                        (FreeFire)
                        </p>
                    </div>
                </Tab>
                <Tab>
                    <div className="py-2 font-semibold border-b-2 relative focus:outline-none hover:border-red-500 text-center">
                        <img src="https://tngshop.vn/icon_lq.png" className="hidden md:block h-12 absolute left-2" style={{top:6}}/>
                        <span>Rút <span className="hidden md:inline-block">Quân huy</span><span className="inline-block md:hidden">QH</span>
                        </span>
                        <p className="text-xs md:text-sm font-semibold">
                            (Liên quân)
                        </p>
                    </div>
                </Tab>
                <Tab>
                    <div className="py-2 font-semibold border-b-2 relative focus:outline-none hover:border-red-500 text-center">
                        <img src="https://tngshop.vn/icon_lm.png" className="hidden md:block h-12 absolute left-2" style={{top:6}}/>
                        <span>Rút <span className="hidden md:inline-block">RP</span><span className="inline-block md:hidden">RP</span></span>
                        <p className="text-xs md:text-sm font-semibold">
                            (Liên minh)
                        </p>
                    </div>
                </Tab>
            </TabList>
            <div className=" bg-white rounded p-4 md:py-4 md:px-5 w-full ">
                <div className="">
                    <div className="pb-2 mb-2 border-b border-gray-200 font-bold">
                        Hiện có: <b className="text-red-500 uppercase">0 KC</b>
                    </div>
                </div>
                <TabPanel>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 md:col-span-6">
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-semibold">
                                    <b>Bước 1:</b> Chọn gói rút
                                </label>

                                <div className=" border-b py-1 px-2 grid grid-cols-12 gap-2 text-sm ">
                                    <div className="col-span-4 text-center font-semibold">
                                        Gói
                                    </div>
                                    <div className="col-span-8 text-center font-semibold">
                                        Tỉ lệ thêm
                                    </div>
                                </div>
                                <div className=" py-2 px-2 grid grid-cols-11 gap-2 text-sm border-b opacity-50 cursor-default">
                                    <div className="col-span-1 flex items-center">
                                        <span className="block h-5 w-5 border-2 border-red-600 rounded-full cursor-pointer"/>
                                    </div>
                                    <div className=" col-span-3 border-r flex font-semibold items-center uppercase ">
                                        90 KC
                                    </div>
                                    <div className="col-span-7">
                                        Rút 90 KC (80% Nhận Thêm 150 KC)
                                    </div>
                                </div>

                                <div className=" py-2 px-2 grid grid-cols-11 gap-2 text-sm border-b opacity-50 cursor-default">
                                    <div className="col-span-1 flex items-center">
                                        <span className="block h-5 w-5 border-2 border-red-600 rounded-full cursor-pointer"/>
                                    </div>
                                    <div className=" col-span-3 border-r flex font-semibold items-center uppercase ">
                                        90 KC
                                    </div>
                                    <div className="col-span-7">
                                        Rút 90 KC (80% Nhận Thêm 150 KC)
                                    </div>
                                </div>

                                <div className=" py-2 px-2 grid grid-cols-11 gap-2 text-sm border-b opacity-50 cursor-default">
                                    <div className="col-span-1 flex items-center">
                                        <span className="block h-5 w-5 border-2 border-red-600 rounded-full cursor-pointer"/>
                                    </div>
                                    <div className=" col-span-3 border-r flex font-semibold items-center uppercase ">
                                        90 KC
                                    </div>
                                    <div className="col-span-7">
                                        Rút 90 KC (80% Nhận Thêm 150 KC)
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="block mb-1 text-sm font-semibold">
                                    <b>Bước 2: </b> Nhập ID game (FreeFire)
                                </label>
                                <Input.Text name="username" label="Ví dụ: 3098435880" placeholder="Nhập ID game của bạn..."/>
                            </div>
                            <button className=" h-10 px-3 text-center font-semibold bg-red-500 text-white w-full rounded focus:outline-none ">
                                RÚT NGAY
                            </button>
                        </div>
                        <div className="col-span-12 md:col-span-6 text-sm">
                            <div className=" border-2 border-amber-300 bg-white rounded text-sm leading-7 px-3 py-1 my-2" style={{overflowY:'auto',height:'26.9rem'}}>
                                <div className="relative">
                                    <p>
                                        <strong>Tăng tỉ lệ kim cương nhận thêm khi rút lên tới 80%</strong>
                                    </p>
                                    <p>
                                        <strong>bạn có cơ hội nhận thêm kim cương khi rút</strong>
                                    </p>
                                    <p>
                                        <strong>Lưu ý: nếu bạn gặp vấn đề khi rút vật phẩm hãy liên hệ chăm sóc khách hàng để
                                            được hỗ trợ. Trường hợp rút nhầm về tài khoản khác shop không chịu trách
                                            nhiệm</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 md:col-span-6">
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-semibold">
                                    <b>Bước 1:</b> Chọn gói rút
                                </label>

                                <div className=" border-b py-1 px-2 grid grid-cols-12 gap-2 text-sm ">
                                    <div className="col-span-4 text-center font-semibold">
                                        Gói
                                    </div>
                                    <div className="col-span-8 text-center font-semibold">
                                        Tỉ lệ thêm
                                    </div>
                                </div>
                                <div className=" py-2 px-2 grid grid-cols-11 gap-2 text-sm border-b opacity-50 cursor-default">
                                    <div className="col-span-1 flex items-center">
                                        <span className="block h-5 w-5 border-2 border-red-600 rounded-full cursor-pointer"/>
                                    </div>
                                    <div className=" col-span-3 border-r flex font-semibold items-center uppercase ">
                                        90 KC
                                    </div>
                                    <div className="col-span-7">
                                        Rút 90 KC (80% Nhận Thêm 150 KC)
                                    </div>
                                </div>

                                <div className=" py-2 px-2 grid grid-cols-11 gap-2 text-sm border-b opacity-50 cursor-default">
                                    <div className="col-span-1 flex items-center">
                                        <span className="block h-5 w-5 border-2 border-red-600 rounded-full cursor-pointer"/>
                                    </div>
                                    <div className=" col-span-3 border-r flex font-semibold items-center uppercase ">
                                        90 KC
                                    </div>
                                    <div className="col-span-7">
                                        Rút 90 KC (80% Nhận Thêm 150 KC)
                                    </div>
                                </div>

                                <div className=" py-2 px-2 grid grid-cols-11 gap-2 text-sm border-b opacity-50 cursor-default">
                                    <div className="col-span-1 flex items-center">
                                        <span className="block h-5 w-5 border-2 border-red-600 rounded-full cursor-pointer"/>
                                    </div>
                                    <div className=" col-span-3 border-r flex font-semibold items-center uppercase ">
                                        90 KC
                                    </div>
                                    <div className="col-span-7">
                                        Rút 90 KC (80% Nhận Thêm 150 KC)
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="block mb-1 text-sm font-semibold">
                                    <b>Bước 2: </b> Nhập Tài khoản, mật khẩu game (Liên Quân)
                                </label>
                                <Input.Text name="username" label="" placeholder="Nhập tài khoản game..."/>
                                <Input.Text name="username" label="" placeholder="Nhập mật khẩu game..."/>
                            </div>
                            <button className=" h-10 px-3 text-center font-semibold bg-red-500 text-white w-full rounded focus:outline-none ">
                                RÚT NGAY
                            </button>
                        </div>
                        <div className="col-span-12 md:col-span-6 text-sm">
                            <div className=" border-2 border-amber-300 bg-white rounded text-sm leading-7 px-3 py-1 my-2" style={{overflowY:'auto',height:'26.9rem'}}>
                                <div className="relative"><p><strong>Tăng tỉ lệ Quân Huy nhận thêm khi rút lên tới
                                    80%</strong></p><p><strong>Lưu ý: nếu bạn gặp vấn đề khi rút vật phẩm hãy liên hệ
                                    chăm sóc khách hàng để được hỗ trợ. Trường hợp rút nhầm về tài khoản khác shop không
                                    chịu trách nhiệm</strong></p></div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 md:col-span-6">
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-semibold">
                                    <b>Bước 1:</b> Chọn gói rút
                                </label>

                                <div className=" border-b py-1 px-2 grid grid-cols-12 gap-2 text-sm ">
                                    <div className="col-span-4 text-center font-semibold">
                                        Gói
                                    </div>
                                    <div className="col-span-8 text-center font-semibold">
                                        Tỉ lệ thêm
                                    </div>
                                </div>
                                <div className=" py-2 px-2 grid grid-cols-11 gap-2 text-sm border-b opacity-50 cursor-default">
                                    <div className="col-span-1 flex items-center">
                                        <span className="block h-5 w-5 border-2 border-red-600 rounded-full cursor-pointer"/>
                                    </div>
                                    <div className=" col-span-3 border-r flex font-semibold items-center uppercase ">
                                        90 KC
                                    </div>
                                    <div className="col-span-7">
                                        Rút 90 KC (80% Nhận Thêm 150 KC)
                                    </div>
                                </div>

                                <div className=" py-2 px-2 grid grid-cols-11 gap-2 text-sm border-b opacity-50 cursor-default">
                                    <div className="col-span-1 flex items-center">
                                        <span className="block h-5 w-5 border-2 border-red-600 rounded-full cursor-pointer"/>
                                    </div>
                                    <div className=" col-span-3 border-r flex font-semibold items-center uppercase ">
                                        90 KC
                                    </div>
                                    <div className="col-span-7">
                                        Rút 90 KC (80% Nhận Thêm 150 KC)
                                    </div>
                                </div>

                                <div className=" py-2 px-2 grid grid-cols-11 gap-2 text-sm border-b opacity-50 cursor-default">
                                    <div className="col-span-1 flex items-center">
                                        <span className="block h-5 w-5 border-2 border-red-600 rounded-full cursor-pointer"/>
                                    </div>
                                    <div className=" col-span-3 border-r flex font-semibold items-center uppercase ">
                                        90 KC
                                    </div>
                                    <div className="col-span-7">
                                        Rút 90 KC (80% Nhận Thêm 150 KC)
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="block mb-1 text-sm font-semibold">
                                    <b>Bước 2: </b> Nhập Tài khoản, mật khẩu game (Liên Minh)
                                </label>
                                <Input.Text name="username" label="" placeholder="Nhập tài khoản game..."/>
                                <Input.Text name="username" label="" placeholder="Nhập mật khẩu game..."/>
                            </div>
                            <button className=" h-10 px-3 text-center font-semibold bg-red-500 text-white w-full rounded focus:outline-none ">
                                RÚT NGAY
                            </button>
                        </div>
                        <div className="col-span-12 md:col-span-6 text-sm">
                            <div className=" border-2 border-amber-300 bg-white rounded text-sm leading-7 px-3 py-1 my-2" style={{overflowY:'auto',height:'26.9rem'}}>
                                <div className="relative"><p><strong>Tăng tỉ lệ Quân Huy nhận thêm khi rút lên tới
                                    80%</strong></p><p><strong>Lưu ý: nếu bạn gặp vấn đề khi rút vật phẩm hãy liên hệ
                                    chăm sóc khách hàng để được hỗ trợ. Trường hợp rút nhầm về tài khoản khác shop không
                                    chịu trách nhiệm</strong></p></div>
                            </div>
                        </div>
                    </div>
                </TabPanel>

            </div>
        </Tabs>
    </>
}
Withdraw.Layout = MenuProfileLayout

export default Withdraw