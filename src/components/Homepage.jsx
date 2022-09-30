import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
 
const { Title } = Typography

export default function Homepage() {
  return (
    <>
        <Title leve={2} className="heading">Global Currency Stats </Title>
        <Row>
            <Col span={12}><Statistic title="Total Currency" value="5"/></Col>
            <Col span={12}><Statistic title="Total Exchanges" value="5"/></Col>
            <Col span={12}><Statistic title="Total Market Cap" value="5"/></Col>
            <Col span={12}><Statistic title="Total 24 Hour Volume" value="5"/></Col>
            <Col span={12}><Statistic title="Total Market" value="5"/></Col>
        </Row>
    </>
  )
}
