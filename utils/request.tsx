import axios from "axios";

const request = axios.create({
    baseURL: 'https://qltt.truongdang.online/api/v1/',
})
const payload = {
    domain: 'qltt-v2.frontend.theme.tichhop.pro',
    secret_key: 'cEhRc1ZhODdzT2xxR0FZTFZkZGcrY3Z0OVF0N3JYeWd0aGVKbjllV2t4Yz0=',
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