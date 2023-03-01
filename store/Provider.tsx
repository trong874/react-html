import Context from "@/store/Context";
import {PropsWithChildren, useReducer} from "react";
import reducer, {initState} from '@/store/reducer'
function Provider({children}: PropsWithChildren) {
    const [state,dispatch] = useReducer(reducer,initState)
    return (
        <Context.Provider value={[state,dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider