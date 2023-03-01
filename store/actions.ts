import * as constants from "@/store/Constants";

const setToggleModalLogin = (payload:boolean) => ({
    type: constants.SET_OPEN_MODAL_LOGIN,
    payload
})

const setToggleModalRecharge = (payload:boolean) => ({
    type: constants.SET_OPEN_MODAL_RECHARGE,
    payload
})

const setIsLogin = (payload:boolean) => ({
    type: constants.SET_IS_LOGIN,
    payload
})
const setProfileUser = (payload:object) => ({
    type: constants.SET_PROFILE_USER,
    payload
})
const setPreUrl = (payload:string) => ({
    type: constants.SET_PRE_URL,
    payload
})

export {
    setToggleModalLogin,
    setToggleModalRecharge,
    setIsLogin,
    setProfileUser,
    setPreUrl
}
