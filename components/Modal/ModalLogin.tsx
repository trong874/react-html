import {Modal} from "rsuite";
import React, {useState} from "react";
import FormLogin from "@/components/layout/Form/FormLogin";
import FormRegister from "@/components/layout/Form/FormRegister";
import Image from "next/image";
import {actions, useStore} from "@/store";

export default function ModalLogin() {
    const [formToggle,setFormToggle] = useState(true);
    const handleToggle = () => {
        setFormToggle(!formToggle);
    }

    const [state,dispatch] = useStore();
    return <>
        <Modal open={state.isOpenModalLogin}
               size="xs"
               overflow={false}
               onClose={() => dispatch(actions.setToggleModalLogin(false))}
               data-centered="true"
        >
            <Modal.Header>
            </Modal.Header>
            <Modal.Body>
                <Image src="https://cdn.upanh.info/storage/upload/images/Logo%20shop/LOGO-SHOPNGOCRONG-NET.png" alt="" width={192} height={64} className="h-12 mx-auto"/>
                <h3 className="text-center text-lg font-bold text-blue-900 mb-8">
                    ĐĂNG NHẬP TÀI KHOẢN
                </h3>
                <button
                    type="button"
                    className="border border-blue-700 rounded h-11 px-3 font-semibold w-full bg-blue-700 text-white">
                        <span className="ml-8 relative">
                            <i className="absolute bx bxl-facebook-circle text-2xl" style={{top: '-3px', left: '-30px',}}/>
                            Đăng nhập bằng Facebook
                        </span>
                </button>
                {formToggle ? <FormLogin callback={handleToggle}/> : <FormRegister callback={handleToggle} />}
            </Modal.Body>
        </Modal>
    </>
}
