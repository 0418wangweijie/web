import { Button, Carousel, Row, Col, Card, Tag } from 'antd'
import Head from 'next/head'
import Header from '../components/Header'
import BlogCard from '../components/blogCard'
import Channel from '../components/Channel'
import Recommend from '../components/Recommend'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils'

const { Meta } = Card
export default function Home(props) {
  console.log(props)
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
        <title>web页面</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header data={props?.url?.query?.username} />
      <div className="showsolid">
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              <img style={{ width: '100%' }} src='https://res9.vmallres.com/shopdc/pic/20201229/cfaa99f6-87dd-46d8-bb31-68bbc4c0f3ce.jpg' />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img style={{ width: '100%' }} src='https://res9.vmallres.com/shopdc/pic/20201229/cfaa99f6-87dd-46d8-bb31-68bbc4c0f3ce.jpg' />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img style={{ width: '100%' }} src='https://res9.vmallres.com/shopdc/pic/20201229/cfaa99f6-87dd-46d8-bb31-68bbc4c0f3ce.jpg' />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img style={{ width: '100%' }} src='https://res9.vmallres.com/shopdc/pic/20201229/cfaa99f6-87dd-46d8-bb31-68bbc4c0f3ce.jpg' />
            </h3>
          </div>
        </Carousel>
      </div>

      <Row style={{ backgroundColor: '#eee' }} className="comm-main" type="flex" justify="center">
        <Col style={{ backgroundColor: '#eee' }} className="comm-left" xs={24} sm={24} md={24} lg={24} xl={24}>
          <BlogCard />
          <Channel />
          <Recommend />
        </Col>
      </Row>

    </div>

  )
}
