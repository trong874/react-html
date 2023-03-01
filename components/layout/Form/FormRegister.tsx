import * as Input from "@/components/layout/Input";
import {Form, Schema} from "rsuite";
import React, {useRef, useState} from "react";
import {StringType} from "schema-typed";
import * as request from "@/utils/request";
import * as Cookie from 'cookies-next';
import {actions, useStore} from "@/store";


interface FormRegister{
    callback: () => void | undefined;
}
export default function FormRegister(props:FormRegister) {
    const [state, dispatch] = useStore();
    const model = Schema.Model({
        username: StringType().isRequired('Tên tài khoản không được bỏ trống!'),
        phone: StringType().isRequired('Số điện thoại không được bỏ trống!'),
        password: StringType().isRequired('Mật khẩu không được bỏ trống!'),
        confirm_password: StringType()
        .addRule((value, data) => {
            return value === data.password;
        }, 'Mật khẩu nhập lại không khớp!')
        .isRequired('Mật khẩu nhập lại không được bỏ trống.')
    });

    const formRef = useRef<any>();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {
        if (formRef.current?.check()) {
            setIsLoading(true);
            request.post('register', {username, password,password_confirmation})
                .then(res => {
                    if (res.status === 1) {

                        Cookie.setCookie('auth-token',res.token,{maxAge:res.exp_token * 60});

                        dispatch(actions.setIsLogin(true))

                        dispatch(actions.setProfileUser(res.user))

                        dispatch(actions.setToggleModalLogin(false))

                    } else if (res.status === 0) {
                        setErrorMessage(res.message)

                    }
                })
                .finally(() => {

                    setIsLoading(false)

                }).catch(data => {

                const response = data.response.data;
                if (response.status === 0) {
                    setErrorMessage(response.message);
                }

                setIsLoading(false)
            })
        }
    }

    return <>
        <Form model={model}
              fluid
              ref={formRef}
              onSubmit={handleSubmit}
              className={'mt-5'}>
            {
                errorMessage && <div className="mb-4">
                    <div
                        className="py-2 px-3 border rounded text-sm w-full block font-semibold bg-red-100 border-red-300 text-red-500">
                        {errorMessage}
                    </div>
                </div>
            }
            <div className="grid grid-cols-12 mt-2 mb-3 gap-2">
                <div className="col-span-7">
                    <Input.TextField value={username}
                                     name="username"
                                     label="Tài khoản *"
                                     placeholder="Nhập tên tài khoản..."
                                     onChange={setUsername}
                    />
                </div>
                <div className="col-span-5">
                    <Input.TextField name="phone" label="Số điện thoại *" placeholder="Số điện thoại..."/>
                </div>
            </div>
            <Input.TextField value={password}
                             name="password"
                             label="Mật khẩu"
                             type={'password'}
                             placeholder="Điền mật khẩu..."
                             onChange={setPassword}
            />
            <Input.TextField value={password_confirmation}
                             name="confirm_password"
                             label="Nhập lại mật khẩu *"
                             type={'password'}
                             placeholder="Nhập lại mật khẩu..."
                             onChange={setPasswordConfirmation}
            />
            <button type={"submit"}
                    disabled={isLoading}
                    className={`border border-red-600 rounded h-11 px-3 font-semibold w-full bg-red-500 hover:bg-red-600 focus:outline-none text-white mb-3 relative ${isLoading && 'opacity-50'}`}>
                {isLoading && <span className="loader"/>}
                ĐĂNG KÍ
            </button>
            <button
                type="button"
                className="border border-gray-400 rounded h-11 px-3 font-semibold w-full bg-white text-gray-700"
                onClick={props.callback}
            >
                <span className="relative">
                    Đăng nhập
                </span>
            </button>
        </Form>
    </>
}