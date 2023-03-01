import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
    };
    return <>
        <div className="mt-8 py-5" style={{backgroundColor:'#1b1a1a'}}>
            <div className="mt-2 mb-12 md:mb-0 px-4 md:px-0 relative max-w-6xl w-full mx-auto text-white grid grid-cols-12 gap-4 font-semibold text-gray-300">
                <div className="col-span-12 md:col-span-4 font-bold mb-2">
                    <span className="mt-4 border-2 border-trueGray-700 py-4 px-4 flex flex-col items-center">
                        <Image src="https://cdn.upanh.info/storage/upload/images/Logo%20shop/LOGO-SHOPNGOCRONG-NET.png" alt="" width={150} height={0} className="mb-2 h-auto" style={{maxWidth:'150px'}}/>
                        <span className="uppercase text-center">
                            ShopNgocRong.Net - Shop Acc Roblox Chính Chủ Stream
                        </span>
                    </span>
                    <p className="mt-2">
                        <Link href="/">
                            Privacy Policy
                        </Link>
                    </p>
                    <p>
                        <Link href="/">
                            Terms of Service
                        </Link>
                    </p>
                </div>
                <div className="col-span-12 md:col-span-5 py-2">
                    <h2 className="text-2xl mb-2">
                        VỀ CHÚNG TÔI
                    </h2>
                    <p className="text-base font-medium mb-2">
                        Chúng tôi luôn lấy uy tín đặt trên hàng đầu đối với khách hàng, hy
                        vọng chúng tôi sẽ được phục vụ các bạn. Cám ơn!
                    </p>
                    <p>
                        Thời gian hỗ trợ:
                        <br/>
                        <span className="font-medium">
                            {'Sáng: 7h30 -> 11h30 | Chiều: 13h00 -> 21h00'}
                        </span>
                    </p>
                </div>
                <div className="col-span-12 md:col-span-3 py-2">
                    <h3 className="text-2xl uppercase mb-2">
                        ShopNgocRong.Net
                    </h3>
                    HỆ THỐNG BÁN ACC TỰ ĐỘNG
                    <br/>
                    ĐẢM BẢO UY TÍN VÀ CHẤT LƯỢNG.
                    <br/>
                    <Link href={'https://www.facebook.com/pham.v.trong.334'} >
                        <Image src="https://cdns.diongame.com/static/messenger-01.svg" alt="" width={220} height={0} className="h-auto" style={{maxWidth:'220px'}}/>
                    </Link>
                </div>
            </div>
        </div>
        <div className="py-2 text-white font-medium" style={{backgroundColor:'#151212'}}>
            <div className="max-w-6xl mx-auto text-center">
                ShopNgocRong.Net - V1.0
            </div>
        </div>
        <button
            type="button"
            className="h-10 w-10 border-2 border-blue-600 fixed opacity-90 rounded text-2xl text-white bg-blue-500 rounded-full font-bold flex items-center justify-center focus:outline-none"
            style={{bottom:'45px',right:'2%',zIndex:1000}}
            onClick={scrollToTop}
        >
            <i className="bx bx-up-arrow-alt"/>
        </button>
    </>
}