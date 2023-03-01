import * as Input from "@/components/layout/Input";
import {Form, Loader, Schema} from "rsuite";
import React, {useState} from "react";
import {StringType} from "schema-typed";
import {actions, useStore} from "@/store";
import * as request from "@/utils/request";
import * as Cookie from 'cookies-next';
import {useRouter} from "next/router";

interface FormLogin {
    callback: () => void | undefined;
}

export default function FormLogin(props: FormLogin) {
    const model = Schema.Model({
        username: StringType().isRequired('Tên tài khoản không được bỏ trống!'),
        password: StringType().isRequired('Mật khẩu là bắt buộc!')
    });

    const [state, dispatch] = useStore();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter();
    const {preUrl} = state;
    const handleSubmit = () => {
        setIsLoading(true);

        request.post('login', {username, password})
            .then(res => {
                if (res.status === 1) {
                    Cookie.setCookie('auth-token',res.token,{maxAge:res.exp_token * 60});
                    dispatch(actions.setIsLogin(true))
                    dispatch(actions.setProfileUser(res.user))
                    dispatch(actions.setToggleModalLogin(false))
                    router.push(preUrl);
                }
            }).finally(() => {
                setIsLoading(false)
        }).catch(data => {
            const response = data.response.data;
            if (response.status === 0) {
                setErrorMessage(response.message);
            }
        })
    }
    return <>
        <Form model={model}
              fluid
              className={'mt-5'}
              onSubmit={handleSubmit}
        >
            {
                errorMessage && <div className="mb-4">
                    <div
                        className="py-2 px-3 border rounded text-sm w-full block font-semibold bg-red-100 border-red-300 text-red-500">
                        {errorMessage}
                    </div>
                </div>
            }
            <Input.TextField name="username"
                             value={username}
                             label="Tài khoản *"
                             placeholder="Nhập tên tài khoản..."
                             onChange={setUsername}
            />
            <Input.TextField name="password"
                             value={password}
                             label="Mật khẩu *"
                             type={'password'}
                             placeholder="Nhập mật khẩu..."
                             onChange={setPassword}
            />
            <div className="text-right mb-2 text-blue-900 text-sm font-semibold">
                Quên mật khẩu
            </div>
            <button type={"submit"}
                    disabled={isLoading}
                    className={`border border-red-600 rounded h-11 px-3 font-semibold w-full bg-red-500 hover:bg-red-600 focus:outline-none text-white mb-3 relative ${isLoading && 'opacity-50'}`}
            >
                {isLoading && <span className="loader"/>}
                ĐĂNG NHẬP
            </button>
            <button
                type="button"
                className="border border-gray-400 rounded h-11 px-3 font-semibold w-full bg-white text-gray-700"
                onClick={props.callback}
            >
                            <span className="relative">
                                Tạo tài khoản
                            </span>
            </button>
        </Form>
    </>
}