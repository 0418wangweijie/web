import React from 'react';
import { Carousel, Row, Col, Card, Tag, List, Avatar, Image } from 'antd'
import Route from 'next/router'

const { Meta } = Card;
export default (props) => {

    const contentStyle = {
        height: '280px',
        color: '#fff',
        lineHeight: '300px',
        textAlign: 'center',
        // background: '#364d79',
    };
    const onClick = () => {
        Route.push('/newCommodity')
    }
    return (
        <div >
            <Row type="flex" justify="center">
                <Col xs={5} sm={5} md={5} lg={5} xl={5} >
                    <Card className="cardlist" bordered={false}
                        style={{ height: 400 }}
                        onClick={onClick}
                        hoverable
                        cover={
                            <Carousel autoplay>
                                <div>
                                    <h3 style={contentStyle}>
                                        <img style={{ width: '100%' }} src="https://res3.vmallres.com/shopdc/pic/a0ad3ee8-1736-4869-9e00-2d9d9ecb3837.png" />
                                    </h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>
                                        <img style={{ width: '100%' }} src="https://res3.vmallres.com/shopdc/pic/a0ad3ee8-1736-4869-9e00-2d9d9ecb3837.png" />
                                    </h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>
                                        <img style={{ width: '100%' }} src="https://res3.vmallres.com/shopdc/pic/a0ad3ee8-1736-4869-9e00-2d9d9ecb3837.png" />
                                    </h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>
                                        <img style={{ width: '100%' }} src="https://res3.vmallres.com/shopdc/pic/a0ad3ee8-1736-4869-9e00-2d9d9ecb3837.png" />
                                    </h3>
                                </div>
                            </Carousel>
                        }
                    >
                        <h1 className="fontWeight">新品首发</h1>
                    </Card>
                </Col>
                <Col xs={5} sm={5} md={5} lg={5} xl={5} >
                    <Card bordered={false} className="cardlist"
                        style={{ height: 400 }}
                        hoverable
                    >
                        <h1 className="fontWeight">排行榜</h1>
                        <span className="tagList">
                            <Tag color="red">卧室家具</Tag>
                            <Tag color="red">卧室家具</Tag>
                            <Tag color="red">卧室家具</Tag>
                        </span>
                        <List
                            itemLayout="horizontal"

                        >
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar shape="square" size={64} />}
                                    title="莱迪卡森"
                                    description="软包实木床"
                                />
                            </List.Item>
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar shape="square" size={64} />}
                                    title="乐远"
                                    description="xim全身镜落地镜穿衣全身服装大试"
                                />
                            </List.Item>
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar shape="square" size={64} />}
                                    title="美家星"
                                    description="简易衣柜 布衣柜超大号非实木单人"
                                />
                            </List.Item>
                        </List>
                    </Card>
                </Col>
                <Col xs={5} sm={5} md={5} lg={5} xl={5} >
                    <Card bordered={false} className="cardlist"
                        style={{ height: 400 }}
                        hoverable
                    >
                        <h1 className="fontWeight">逛好店</h1>
                        <List
                            itemLayout="vertical"
                        // size="large"
                        >
                            <List.Item
                                extra={
                                    <img
                                        width={100}
                                        alt="logo"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                    />
                                }
                                actions={["10万人关注"]}
                                style={{ marginBottom: 22, backgroundColor: 'rgb(241,248,247)' }}>
                                <List.Item.Meta
                                    title="尤尼科斯"
                                    description="（YONEX）"

                                >
                                </List.Item.Meta>
                            </List.Item>
                            <List.Item
                                extra={
                                    <img
                                        width={100}
                                    // alt="logo"
                                    />
                                }
                                actions={["2.3万人关注"]}
                                style={{ backgroundColor: 'rgb(241,248,247)', marginBottom: 22 }}>

                                <List.Item.Meta

                                    title="海康威视"
                                    description="（HIKVISION）"
                                />
                            </List.Item>
                        </List>
                    </Card>
                </Col>
                <Col xs={5} sm={5} md={5} lg={5} xl={5} >
                    <Card bordered={false} className="cardlist"
                        style={{ height: 400 }}
                    >
                        <h1 className="fontWeight">休闲</h1>
                        <Image height={300} src='https://img30.360buyimg.com/babel/s290x370_jfs/t1/144790/18/18997/58929/5fdb216fEc54cc607/aed7404ca0d50b70.jpg!cc_290x370.webp' />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}