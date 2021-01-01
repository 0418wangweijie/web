import React from 'react'
import { Card, Col, Row } from 'antd'
import '../styles/components/recommend.css'

const { Meta } = Card
export default (props) => {
    return (
        <div>
            <h1 className="recommend-title">上新推荐</h1>
            <Row type="flex" justify="center">
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Card
                        hoverable
                        style={{ width: 246 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Card
                        hoverable
                        style={{ width: 246 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Card
                        hoverable
                        style={{ width: 246 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Card
                        hoverable
                        style={{ width: 246 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Card
                        hoverable
                        style={{ width: 246 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}