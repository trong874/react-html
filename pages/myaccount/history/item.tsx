import MenuProfileLayout from "@/components/layout/LayoutProfile";
import Head from "next/head";
import React from "react";

function Item() {
    return <>
        <Head>
            <title>Danh sách thông báo</title>
        </Head>

        <div className=" bg-white rounded p-4 md:py-4 md:px-5 w-full ">
            <div className="border-b border-gray-200 pb-2 mb-4 text-gray-800">
                <h2 className="text-lg font-semibold">
                    Danh Sách Mua Vật Phẩm
                </h2>
                <p className="text-xs">
                    Lịch sử hòm vật phẩm mà bạn đã mua.
                </p>
            </div>


        </div>
    </>
}

Item.Layout = MenuProfileLayout
export default Item