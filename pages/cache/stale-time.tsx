import * as request from '@/utils/request';
import {GetServerSideProps} from "next";

export const getServerSideProps:GetServerSideProps = async ({res}) => {
    const article = await request.get('/article/huong-dan-nap-game-anh-hung-loan-chien-don-gian-gia-re',{});
    await setTimeout(()=>{},1000)
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=15'
    )
    return {
        props: {
            article: article.data
        }
    }
}
function CacheStaleTime({article}:any) {
   return <>
       {article.seo_title}
   </>
}

export default CacheStaleTime