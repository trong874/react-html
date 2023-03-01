import axios from "axios";

const request = axios.create({
    baseURL: 'https://backend.dev.tichhop.pro/api/v1',
})
const payload = {
    domain: 'frontend.dev.tichhop.pro',
    secret_key: 'RFVQRXdjOStnMjRlbjlIT0QwSXVGbTVuZ0RMMS9pSzM2Mk1vYXVFZ1dyOD0=',
}

const get = async (path:string,options = {}) => {
    let query = {
        ...options,
        ...payload,
    }

    const res = await request.get(path, {params: query});
    return res.data;
}

const post = async (path:string,options = {}) => {
    let query = {
        ...options,
        ...payload,
    }

    const res = await request.post(path, query);
    return res.data;
}

export {
    get,
    post
}
export default request