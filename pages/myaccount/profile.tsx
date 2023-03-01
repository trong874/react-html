import MenuProfileLayout from "@/components/layout/LayoutProfile";

function Profile() {
    return <>
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
                <div className=" grid grid-cols-12 gap-2 bg-white rounded p-2 px-3 mb-1 font-semibold ">
                    <div className="col-span-5">
                        Tên Hiển Thị
                    </div>
                    <div className="col-span-7 truncate">
                        Phạm Văn Trọng
                    </div>
                </div>
                <div className=" grid grid-cols-12 gap-2 bg-white rounded p-2 px-3 mb-1 font-semibold ">
                    <div className="col-span-5">
                        Tên Tài Khoản
                    </div>
                    <div className="col-span-7 truncate">
                        ----------
                    </div>
                </div>
                <div className=" grid grid-cols-12 gap-2 bg-white rounded p-2 px-3 mb-1 font-semibold ">
                    <div className="col-span-5">
                        Số Điện Thoại
                    </div>
                    <div className="col-span-7 truncate">
                        ----------
                    </div>
                </div>
                <div className=" grid grid-cols-12 gap-2 bg-white rounded p-2 px-3 mb-1 font-semibold ">
                    <div className="col-span-5">
                        Email
                    </div>
                    <div className="col-span-7 truncate">
                        ----------
                    </div>
                </div>
                <div className=" grid grid-cols-12 gap-2 bg-white rounded p-2 px-3 mb-1 font-semibold ">
                    <div className="col-span-5">
                        Ngày Tham Gia
                    </div>
                    <div className="col-span-7 truncate">
                        11/02/2023 16:27:38
                    </div>
                </div>
                <div className=" grid grid-cols-12 gap-2 bg-white rounded p-2 px-3 mb-1 font-semibold ">
                    <div className="col-span-5">
                        Thoát
                    </div>
                    <div className="col-span-7 truncate">
                        <button className=" text-xs focus:outline-none px-2 py-1 bg-red-500 rounded text-white font-bold ">
                            Đăng xuất
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}
Profile.Layout = MenuProfileLayout

export default Profile