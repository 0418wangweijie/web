import React, { useState } from 'react';
import 'antd/dist/antd.css'
import { Card, Input, Button, Form, Spin, message } from 'antd'
import '../styles/pages/login.css'
import {
    UserOutlined,
    LockTwoTone
} from '@ant-design/icons';
import axios from 'axios';
import servicePath from '../config/apiUrl'
import Link from 'next/link'
import Router from 'next/router'


function Login(props) {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = (value) => {
        setIsLoading(true)
        // 获取cookies的方法
        // function getCookie(name) {
        //     var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        //     // eslint-disable-next-line no-cond-assign
        //     if (arr = document.cookie.match(reg))
        //         return unescape(arr[2]);
        //     else
        //         return null;
        // }
        axios({
            url: servicePath.login,
            method: "POST",
            data: {
                username: value.username,
                password: value.password
            },
            withCredentials: true
        })
            .then(
                res => {
                    setIsLoading(false)
                    if (res.data.data == '登录成功') {
                        console.log(res)
                        // localStorage.setItem('openId', res.data.openId)
                        message.success('登录成功')
                        Router.push("/?username=" + res.data?.username)
                    } else {
                        message.error('登录失败')
                    }

                }
            )
    }
    return (
        <div className='login-div'>
            <Spin tip="Loading..." spinning={isLoading}>
                <Card title='登录页面' bordered={true} style={{ width: 400, textAlign: 'center' }}>
                    <Form
                        onFinish={onSubmit}
                        form={form}
                    >
                        <Form.Item name="username" rules={[{ required: true, message: '请输入账号' }]}>
                            <Input prefix={<UserOutlined color="#40a9ff" />} placeholder="请输入账号" />
                        </Form.Item>
                        <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
                            <Input.Password prefix={<LockTwoTone />} placeholder="请输入密码" />
                        </Form.Item>
                        <Form.Item>
                            <Button style={{ width: '100%' }} htmlType="submit" type="primary">登录</Button>
                            <Link href={{ pathname: '/register' }}><Button style={{ width: '100%', marginTop: 10 }}>去注册</Button></Link>
                        </Form.Item>
                    </Form>
                </Card>
            </Spin>
        </div>
    )
}
export default Login