// import {useRouter} from "next/router";
// import {useEffect} from "react";
//
// function Account() {
//     const router = useRouter();
//     console.log(router.query)
//
//     useEffect(() => {
//         console.log(router.query)
//     },[])
//
//     return (<>
//         <h2>Trang tài khoản: {router.query.slug}</h2>
//     </>)
// }
// export default Account


import React, {ReactNode, useEffect, useState} from "react";
// import MenuBlog from "@/pages/blog/_menu_blog";
// import BlogCategory from "@/components/widget/_category";
// import ItemFeatured from "@/components/widget/_item_featured";
// import Support from "@/components/widget/_support";
// import ItemRelate from "@/pages/blog/_item_relate";
// import axios from "axios";
// import Link from 'next/link';
// import {API_HOST} from '@/config/api';
// import {TIME_OUT_REQUEST_API} from '@/config/api';
// import {SECRET_KEY} from '@/config/api';
// import {DOMAIN} from '@/config/api';
import { differenceInHours } from 'date-fns';
import { useRouter } from "next/router";
export default function blog_item(){
    // const res = axios.create({
    //     baseURL: API_HOST,
    //     timeout: TIME_OUT_REQUEST_API,
    // })
    // var params_get = {
    //     params: {
    //         secret_key: SECRET_KEY,
    //         domain:DOMAIN,
    //     }
    // }
    const router = useRouter();
    var slug = router.query.slug;
    var PATH_GET_ARTICLE = "/article/"+slug;
    const [data,setData] = useState([]);
    useEffect(() => {
        console.log(slug)
        // res.get("/article/"+slug,params_get)
        //     .then(res => {
        //         if(res.data.status == 1){
        //             setData(res.data);
        //         }
        //         else{
        //             alert(res.data.message);
        //         }
        //     })
        //     .finally(() => {
        //
        //     })
        //     .catch((e) => {
        //         // alert("Lỗi hệ thống");
        //     })

    },[])
    return <>
        {/*<MenuBlog></MenuBlog>*/}
        <div className="site-content-body bg-white last">
            <nav className="site-breadcrumb mb-3">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a href="#">Tin tức</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Games</li>
                </ol>
            </nav>
            <div className="row">
                <div className="col-lg-9">
                    <div className="article-single mb-4">
                        <div className="article-thumb mb-4">
                            <div className="media-placeholder ratio-2-1 rounded">
                                <div className="bg rounded" style={{backgroundImage:"url(img/temp/dr-mundo-lan-dau-tro-lai-dau-truong-chuyen-nghiep-sau-7-nam-vang-bong-1.jpg)"}}></div>
                                <div className="media-inner d-flex aling-items-end">
                                    <div className="d-flex align-items-end h-100 p-lg-4 p-3 text-white">
                                        <h3 className="item-title"><a href="single.html" className="text-white">Dr. Mundo đi rừng lần đầu trở lại đấu trường LEC sau 7 năm vắng bóng</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="article-main d-flex pt-4 elsticky-wrap">
                            <div className="social-share">
                                <ul className="nav social-icons flex-column elsticky">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link"><i className="las la-share"></i></a>
                                    </li>
                                    <li className="nav-item facebook">
                                        <a href="#" className="nav-link"><i className="lab la-facebook-f"></i></a>
                                    </li>
                                    <li className="nav-item twitter">
                                        <a href="#" className="nav-link"><i className="lab la-twitter"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="article-content flex-grow-1">
                                <p>Vậy là vòng bảng LPL Mùa Xuân 2021 đã kết thúc sau gần ba tháng tranh tài. Những thế lực cũ tưởng như đã tàn lụi bất ngờ trỗi dậy, đánh bật những gã khổng lồ mới nổi một vài mùa gần đây.</p>
                                <p>
                                    Royal Never Give Up và EDward Gaming không còn là những “bóng ma” tại LPL, họ đã hồi sinh mạnh mẽ sau những nỗ lực cải tổ đầu mùa hiệu quả. Còn nhớ tại vòng bảng Mùa Hè năm ngoái, RNG và EDG đã nắm tay nhau đứng ngoài cuộc chơi, chứng kiến Top Esports, JD Gaming và Suning cạnh tranh tấm vé đi CKTG. Không ai dám chắc chừng nào họ trở lại trong bối cảnh LMHT Trung Quốc cạnh tranh quá khốc liệt.
                                </p>
                                <p className="small text-center op-5">Chú thích cho hình ảnh</p>
                                <p>Đội đầu bảng Mùa Xuân năm nay là RNG, thật khó tin khi một RNG thất thường năm 2020 lại thi đấu chắc chắn đến thế. Ngay cả cựu xạ thủ huyền thoại Uzi cũng từng nhận định một cách bi quan, rằng RNG không còn là đối thủ xứng tầm với Suning. Kết quả RNG thắng 2-1. Trận thắng SN là khởi đầu của một chuỗi “hiệu ứng” bộc phát giúp RNG bùng nổ xuyên suốt mùa giải. Công thần Xiaohu lần đầu tiên trong sự nghiệp chơi vai trò đường trên, anh và đồng đội thi đấu xuất sắc như thể trong đội hình vẫn còn những Mlxg, Uzi, AmazingJ thời đỉnh cao phong độ.</p>
                                <p>
                                    Về phần EDG, đội tuyển này đã biến mất khỏi top đầu LPL kể từ sau năm 2018. Họ thi đấu nhạt nhòa với những đội hình gồm nhiều nhân tố mới. Một mình đường giữa Scout không thể làm nên chuyện khi xung quanh anh là những người đồng đội vẫn còn thiếu kinh nghiệm. Giờ đây, mọi thứ đã thay đổi, Viper và Flandre đã trở thành hai mảnh ghép hoàn hảo đưa EDG trở lại top đầu LPL. </p>
                                <p>Với ngôi nhất và nhì bảng LPL, RNG và EDG có cơ hội gặp nhau trong trận chung kết. Vòng Playoffs năm nay được chia thành 2 nhánh riêng biệt, các đội từ vòng 1 đến vòng 3 sẽ bị loại trực tiếp chỉ sau một trận BO5. </p>
                            </div>
                        </div>
                    </div>
                    {/*<ItemRelate></ItemRelate>*/}
                </div>
                <div className="col-lg-3">
                    {/*<BlogCategory></BlogCategory>*/}
                    {/*<ItemFeatured></ItemFeatured>*/}
                    {/*<Support></Support>*/}
                </div>
            </div>
        </div>
    </>
}