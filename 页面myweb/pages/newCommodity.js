import React from 'react'
import { Card, Col, Row, Carousel } from 'antd'
import Head from 'next/head'
import Header from '../components/Header'
import '../styles/pages/commodity.css'
import NewReacommend from '../components/newReacommend'
import FindNew from '../components/FindNew'

export default (props) => {
    const contentStyle = {
        height: '400px',
        color: '#fff',
        lineHeight: '400px',
        textAlign: 'center',
        // backgroundImage: url('https://imgcps.jd.com/ling4/2922989/6L-O5paw5b-F5aSH5aW96LSn/5L2O6Iez5ruhMTk55YePMTAw/p-5bd8253082acdd181d02fa1f/fc28467d/cr/s/q.jpg'),
    };
    return (
        <div>
            <Head>
                <title>新品发布</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="commodity-image">
                        <div className="commodity-solider">

                            <Carousel autoplay>
                                <div>
                                    <h3 style={contentStyle}>
                                        <img style={{ width: '100%' }} src='https://m.360buyimg.com/mobilecms/s849x837_jfs/t1/167312/24/27/273518/5fec3620E5ea14360/3ea853e35f31f3f8.png!q70.jpg' />
                                    </h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>
                                        <img style={{ width: '100%' }} src='https://m.360buyimg.com/mobilecms/s849x837_jfs/t1/167312/24/27/273518/5fec3620E5ea14360/3ea853e35f31f3f8.png!q70.jpg' />
                                    </h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>
                                        <img style={{ width: '100%' }} src='https://m.360buyimg.com/mobilecms/s849x837_jfs/t1/167312/24/27/273518/5fec3620E5ea14360/3ea853e35f31f3f8.png!q70.jpg' />
                                    </h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>
                                        <img style={{ width: '100%' }} src='https://m.360buyimg.com/mobilecms/s849x837_jfs/t1/167312/24/27/273518/5fec3620E5ea14360/3ea853e35f31f3f8.png!q70.jpg' />
                                    </h3>
                                </div>
                            </Carousel>

                        </div>
                    </div>
                </Col>
            </Row>
            <div style={{ marginTop: 100 }}>
                <Row type="flex" justify='center'>
                    <Col style={{ backgroundColor: '#eee' }} className="comm-left" xs={24} sm={24} md={24} lg={24} xl={24}>
                        <NewReacommend />
                        <FindNew />
                    </Col>
                </Row>
            </div>
        </div>
    )
}