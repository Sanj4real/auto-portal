import React, { useEffect } from 'react'
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import { useState } from 'react';
import Login from '../auth/login/Login';
import { isAuthenticated } from 'src/helpers/token';

export default function LoginModal({ setLoginModel }) {

    const [isVisible, setIsVisible] = useState(true);

    // useEffect(() => {
    //     setIsVisible(!isVisible)
    //     setLoginModel(isVisible)
    // }, [isAuthenticated()])
    return (
        <>
            <Modal
                // title="Login"
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ style: { display: 'none' } }}
                // centered
                visible={isVisible}
                // onOk={() => { setIsVisible(false); setLoginModel(false) }}
                onCancel={() => { 
                setIsVisible(false);
                setLoginModel(false) }}
                width={1000}
            >
                <Login setLoginModel={setLoginModel}></Login>
            </Modal>

        </>
    )

}
