import React from 'react'
import { Card, Col, Row, Carousel, Image, Tag } from 'antd'
import Head from 'next/head'
import Header from '../components/Header'
import '../styles/pages/rankingList.css'

const { Meta } = Card

export default (props) => {

    const rankingList = {
        position: 'absolute',
        zIndex: "1",
        width: "30px",
        marginTop: "-20px",
        height: "20px",
        background: 'red',
        textAlign: 'center',
        marginLeft: "-27px",
        boxShadow: '1px 1px 5px #000'
    }
    return (
        <div>
            <Head>
                <title>排行榜</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Row type="flex" justify="center">

                <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                    <div className="ranking-div"><span className="ranking-title">大家电热卖榜</span></div>
                    <div style={{ marginTop: 10 }}>
                        <Row type="flex" justify='center'>
                            <Col style={{ backgroundColor: '#eee' }} className="comm-left" xs={7} sm={7} md={7} lg={7} xl={7}>
                                <Card hoverable>
                                    <div style={rankingList}>1</div>
                                    <div>
                                        <div style={{ float: 'left' }}>
                                            <Image src="https://img11.360buyimg.com/n1/s160x160_jfs/t1/138012/14/16204/132634/5fc0c3bbE7786c873/5bef1e8a278ed482.jpg!q80.webp" />
                                        </div>
                                        <div>
                                            <span className="ranking-size">小米电视4A 70英寸 4K超高清 HDR 二级能效 2GB+16GB L70M5-4A 内置小爱 智能网络液晶平板教育电视</span>
                                            <div><Tag className="ranking-tag" color="orange">好评率98%</Tag></div>
                                            <div className="ranking-price">￥3599.00</div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col style={{ backgroundColor: '#eee' }} className="comm-left" xs={7} sm={7} md={7} lg={7} xl={7}>
                                <Card hoverable>
                                    <div style={rankingList}>2</div>
                                    <div>
                                        <div style={{ float: 'left' }}>
                                            <Image src="https://img11.360buyimg.com/n1/s160x160_jfs/t1/138012/14/16204/132634/5fc0c3bbE7786c873/5bef1e8a278ed482.jpg!q80.webp" />
                                        </div>
                                        <div>
                                            <span className="ranking-size">小米电视4A 70英寸 4K超高清 HDR 二级能效 2GB+16GB L70M5-4A 内置小爱 智能网络液晶平板教育电视</span>
                                            <div><Tag className="ranking-tag" color="orange">好评率98%</Tag></div>
                                            <div className="ranking-price">￥3599.00</div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col style={{ backgroundColor: '#eee' }} className="comm-left" xs={7} sm={7} md={7} lg={7} xl={7}>
                                <Card hoverable>
                                    <div style={rankingList}>3</div>
                                    <div>
                                        <div style={{ float: 'left' }}>
                                            <Image src="https://img11.360buyimg.com/n1/s160x160_jfs/t1/138012/14/16204/132634/5fc0c3bbE7786c873/5bef1e8a278ed482.jpg!q80.webp" />
                                        </div>
                                        <div>
                                            <span className="ranking-size">小米电视4A 70英寸 4K超高清 HDR 二级能效 2GB+16GB L70M5-4A 内置小爱 智能网络液晶平板教育电视</span>
                                            <div><Tag className="ranking-tag" color="orange">好评率98%</Tag></div>
                                            <div className="ranking-price">￥3599.00</div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row type="flex" justify='center'>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                <Card
                                    hoverable

                                    cover={<img alt="example" src="https://img12.360buyimg.com/n1/s160x160_jfs/t1/148886/30/15914/111313/5fc0c535E522d1eaf/7858b423853e04f0.jpg!q80.webp" />}
                                >
                                    <div>
                                        <div><Tag className="ranking-tag" color="orange">好评率98%</Tag></div>
                                        <span className="ranking-sizeSmall">小米电视4A 70英寸 4K超高清 HDR 二级能效 2GB+16GB L70M5-4A 内置小爱 智能网络液晶平板教育电视</span>
                                        <div className="ranking-price" style={{ marginTop: 10 }}>￥3599.00</div>
                                    </div>
                                </Card>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                <Card
                                    hoverable
                                    cover={<img alt="example" src="https://img12.360buyimg.com/n1/s160x160_jfs/t1/148886/30/15914/111313/5fc0c535E522d1eaf/7858b423853e04f0.jpg!q80.webp" />}
                                >
                                    <div>
                                        <div><Tag className="ranking-tag" color="orange">好评率98%</Tag></div>
                                        <span className="ranking-sizeSmall">小米电视4A 70英寸 4K超高清 HDR 二级能效 2GB+16GB L70M5-4A 内置小爱 智能网络液晶平板教育电视</span>
                                        <div className="ranking-price" style={{ marginTop: 10 }}>￥3599.00</div>
                                    </div>
                                </Card>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                <Card
                                    hoverable
                                    cover={<img alt="example" src="https://img12.360buyimg.com/n1/s160x160_jfs/t1/148886/30/15914/111313/5fc0c535E522d1eaf/7858b423853e04f0.jpg!q80.webp" />}
                                >
                                    <div>
                                        <div><Tag className="ranking-tag" color="orange">好评率98%</Tag></div>
                                        <span className="ranking-sizeSmall">小米电视4A 70英寸 4K超高清 HDR 二级能效 2GB+16GB L70M5-4A 内置小爱 智能网络液晶平板教育电视</span>
                                        <div className="ranking-price" style={{ marginTop: 10 }}>￥3599.00</div>
                                    </div>
                                </Card>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                <Card
                                    hoverable
                                    cover={<img alt="example" src="https://img12.360buyimg.com/n1/s160x160_jfs/t1/148886/30/15914/111313/5fc0c535E522d1eaf/7858b423853e04f0.jpg!q80.webp" />}
                                >
                                    <div>
                                        <div><Tag className="ranking-tag" color="orange">好评率98%</Tag></div>
                                        <span className="ranking-sizeSmall">小米电视4A 70英寸 4K超高清 HDR 二级能效 2GB+16GB L70M5-4A 内置小爱 智能网络液晶平板教育电视</span>
                                        <div className="ranking-price" style={{ marginTop: 10 }}>￥3599.00</div>
                                    </div>
                                </Card>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                <Card
                                    hoverable
                                    cover={<img alt="example" src="https://img12.360buyimg.com/n1/s160x160_jfs/t1/148886/30/15914/111313/5fc0c535E522d1eaf/7858b423853e04f0.jpg!q80.webp" />}
                                >
                                    <div>
                                        <div><Tag className="ranking-tag" color="orange">好评率98%</Tag></div>
                                        <span className="ranking-sizeSmall">小米电视4A 70英寸 4K超高清 HDR 二级能效 2GB+16GB L70M5-4A 内置小爱 智能网络液晶平板教育电视</span>
                                        <div className="ranking-price" style={{ marginTop: 10 }}>￥3599.00</div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>

        </div>
    )
}