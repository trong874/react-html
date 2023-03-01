import {useRouter} from "next/router";

function Account() {
    const router = useRouter();

    return (<>
        <h2>Trang tài khoản: {router.query.slug}</h2>
    </>)
}
export default Account