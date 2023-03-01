import MenuProfileLayout from "@/components/layout/LayoutProfile";
import Head from "next/head";
import * as Input from "@/components/layout/Input";
import React from "react";
import {Form, Schema} from "rsuite";
import {StringType} from "schema-typed";

function Password() {
    const model = Schema.Model({
        password: StringType().isRequired('Mật khẩu hiện tại không được bỏ trống!'),
        password_new: StringType().isRequired('Mật khẩu không được bỏ trống!'),
        confirm_password: StringType()
            .addRule((value, data) => {
                return value === data.password_new;
            }, 'Mật khẩu nhập lại không khớp!')
            .isRequired('Mật khẩu nhập lại không được bỏ trống.')
    });
    return <>
        <Head>
            <title>Đổi mật khẩu</title>
        </Head>

        <div className=" bg-white rounded p-4 md:py-4 md:px-5 w-full ">
            <div className="border-b border-gray-200 pb-2 mb-4 text-gray-800">
                <h2 className="text-lg font-semibold">
                    Đổi Mật Khẩu
                </h2>
                <p className="text-xs">Để bảo mật tài khoản, vui lòng không chia sẻ cho người khác.</p>
            </div>
            <div className="max-w-sm">
                <Form model={model}
                      fluid
                      className={'mt-5'}>
                    <Input.TextFieldGray name="password" label="Mật khẩu hiện tại *" type={'password'} placeholder="Mật khẩu hiện tại..."/>
                    <Input.TextFieldGray name="password_new" label="Mật khẩu *" type={'password'} placeholder="Điền mật khẩu..."/>
                    <Input.TextFieldGray name="confirm_password" label="Nhập lại mật khẩu *" type={'password'} placeholder="Nhập lại mật khẩu..."/>

                    <button className=" px-8 h-10 bg-red-500 hover:bg-red-600 text-white font-semibold rounded ">
                        Xác Nhận
                    </button>
                </Form>
            </div>
        </div>
    </>
}

Password.Layout = MenuProfileLayout
export default Password