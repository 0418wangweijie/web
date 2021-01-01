import React, { useState, useEffect } from 'react'
import '../styles/components/header.css'
import { Row, Col, Menu, Button, Input } from 'antd'
import { HomeOutlined, createFromIconfontCN } from '@ant-design/icons'
import Router from 'next/router'
import Link from 'next/link'
// import Link from "next/link";
// import axios from "axios";
// import servicePath from '../config/apiUrl';
const { Search } = Input

export default (props) => {
    console.log(props)
    let loginBlock = 'block', userName = 'none'
    if (props.data) {
        loginBlock = 'none'
        userName = 'block'
    }

    const handleClick = (e) => {
        if (e.key == 0) {
            Router.push('/')
        } else {
            Router.push('/list?id=' + e.key)
        }
    }

    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_2273731_7do9v58oe9p.js'
    })
    return (
        <div className="header">
            <Row type="flex" justify='cneter' style={{ placeItems: 'baseline' }}>
                <Col xs={7} sm={8} md={8} lg={6} xl={6}>
                    <span className="header-logo">购物商城</span>

                    {/* <span className="header-button"><Button type="primary">登录</Button></span> */}
                </Col>
                <Col xs={11} sm={8} md={8} lg={12} xl={12}>
                    <span className="header-input"><Search placeholder="请输入你想要的搜索的内容" /></span>
                </Col>
                <Col xs={6} sm={8} md={8} lg={6} xl={6}>
                    <div className="header-button">
                        <span style={{ marginRight: 10 }}><Link href={{ pathname: '/register' }}><Button style={{ display: loginBlock }}>注册</Button></Link></span>
                        <span ><Link href={{ pathname: '/login' }}><Button style={{ display: loginBlock }} type="primary">登录</Button></Link></span>
                        <span style={{ display: userName }}><span>用户：</span>{props?.data}</span>
                    </div>
                </Col>
            </Row>
        </div >
    )
}

