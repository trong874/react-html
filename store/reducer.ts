import * as constants from './Constants'

const initState = {
    isOpenModalLogin: false,
    isOpenModalRecharge: false,
    isLogin: false,
    profileUser: {},
    preUrl: '/',
    imgPlaceholder: '/placeholder-image.png',
}

function reducer(state:any,action:any) {
    switch (action.type) {
        case constants.SET_OPEN_MODAL_LOGIN:
            return {
                ...state,
                isOpenModalLogin:action.payload
            }
        case constants.SET_OPEN_MODAL_RECHARGE:
            return {
                ...state,
                isOpenModalRecharge:action.payload
            }
        case constants.SET_IS_LOGIN:
            return {
                ...state,
                isLogin:action.payload
            }
        case constants.SET_PROFILE_USER:
            return {
                ...state,
                profileUser:action.payload
            }
        case constants.SET_PRE_URL:
            return {
                ...state,
                preUrl:action.payload
            }
        default:
            throw new Error('Invalid action...')
    }
}

export {initState}
export default reducer