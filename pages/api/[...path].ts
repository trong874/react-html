import httpProxy from 'http-proxy';
import type { NextApiRequest, NextApiResponse } from 'next';

const proxy = httpProxy.createProxyServer();

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
        return new Promise((resolve) => {
            req.headers.cookie = '';

            proxy.web(req,res,{
                target:process.env.API_URL,
                changeOrigin:true,
                selfHandleResponse:false,
            })
            proxy.once('proxyRes',() => {
                resolve(true)
            })
        })
}

export const config = {
    api: {
        bodyParser:false,
    }
}