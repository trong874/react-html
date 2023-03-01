import {useRouter} from "next/router";
import * as request from "@/utils/request";
import {ContextType} from "react";
import {GetServerSideProps} from "next";


export const getServerSideProps: GetServerSideProps = async (context) => {
    const service = await request.get(`service/${context.query.slug}`,);
    return {
        props: {
            service
        }
    }
}
export default function Service({service}:{service:any}) {
    console.log(service)
    return <>

    </>
}