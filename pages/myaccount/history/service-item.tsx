import MenuProfileLayout from "@/components/layout/LayoutProfile";
import Head from "next/head";
import React from "react";

function ServiceItem() {
    return <>
        <Head>
            <title>Danh sách thông báo</title>
        </Head>

        <div className=" bg-white rounded p-4 md:py-4 md:px-5 w-full ">
            <div className="border-b border-gray-200 pb-2 mb-4 text-gray-800">
                <h2 className="text-lg font-semibold">
                    Danh Sách Mua Vật Phẩm (Dịch Vụ)
                </h2>
                <p className="text-xs">
                    {'Đơn hàng bị từ chối sẽ tự động hoàn lại tiền shop, dùng điện thoại vui lòng kéo "bảng danh sách" ngang để xem hết thông tin.'}
                </p>
            </div>
        </div>
    </>
}

ServiceItem.Layout = MenuProfileLayout
export default ServiceItem