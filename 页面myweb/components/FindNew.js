import React from 'react'
import { Card, Col, Row, List, Avatar, Image } from 'antd'
import '../styles/components/recommend.css'

const { Meta } = Card
export default (props) => {

    const listData = [];
    for (let i = 0; i < 3; i++) {
        listData.push({
            href: 'https://ant.design',
            title: `ant design part ${i}`,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description:
                'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content:
                '近日，罗技推出了K835机械键盘，整体的设计风格与去年推出的K845基本相同，配列方面为84键设计，更加小巧便捷，依旧是定位办公、游戏双重使用需求，实用性很强，下面就为大家带来这款键盘的评测内容。',
        });
    }
    return (
        <div>
            <h1 className="recommend-title">新品发现</h1>
            <Row type="flex" justify="center">
                <Col xs={10} sm={10} md={10} lg={10} xl={10} >
                    <Card>
                        <div className="findnew-image">
                            <Image height={659} src="https://m.360buyimg.com/mobilecms/s1125x1230_jfs/t1/131722/1/19212/311493/5fcf40c4E4d1a8b3d/2fac1c5d011db1a6.jpg!q70.jpg"></Image>
                        </div>
                    </Card>
                </Col>
                <Col xs={10} sm={10} md={10} lg={10} xl={10} >
                    <Card style={{ height: 709 }}>
                        <List
                            itemLayout="vertical"
                            size="small"
                            dataSource={listData}
                            renderItem={item => (
                                <List.Item
                                    style={{ height: 240 }}
                                    extra={
                                        <img
                                            width={272}
                                            alt="logo"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                        />
                                    }
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.avatar} />}
                                        title={<a href={item.href}>{item.title}</a>}
                                        description={item.description}
                                    />
                                    <div style={{ height: 65, overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.content}</div>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}