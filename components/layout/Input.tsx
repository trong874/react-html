import React from "react";
import {Form, Input} from "rsuite";

type PropTextField = { [x: string]: any; name: any; label: any; }

export function TextField (props: PropTextField) {
    const { name, label, ...rest } = props;
    return <>
        <Form.Group controlId={`${name}-3`} style={{marginBottom: '.75rem'}}>
            <Form.ControlLabel
                className={'block font-semibold text-sm text-blue-900 mb-0'}>
                {label}
            </Form.ControlLabel>
            <Form.Control name={name} 
                          className={'custom-input'}
                          {...rest} />
        </Form.Group>
    </>
}
export function TextFieldGray (props: PropTextField) {
    const { name, label, ...rest } = props;
    return <>
        <Form.Group controlId={`${name}-3`} style={{marginBottom: '.75rem'}}>
            <Form.ControlLabel
                className={'block text-sm mb-0'}>
                {label}
            </Form.ControlLabel>
            <Form.Control name={name}
                          className={'custom-input-gray h-10'}
                          {...rest} />
        </Form.Group>
    </>
}
export function Text (props: PropTextField) {
    const { name, label, ...rest } = props;
    return <>
        <Input className="h-10 px-3 rounded font-semibold border border-gray-400 w-full focus:outline-none" {...rest} />
        <p className="mt-1 mb-2 text-sm text-gray-600"><i>{label}</i></p>
    </>
}