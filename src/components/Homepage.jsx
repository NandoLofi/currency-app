import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCurrencyQuery } from '../services/currencyApi'
import Currencies from './Currencies'
import News from './News'

const { Title } = Typography

export default function Homepage() {
  const { data, isFetching } = useGetCurrencyQuery();
  const globalStats = data ?.data ?.stats



  if(isFetching) return 'Loading...'

  return (
    <>
        <Title leve={2} className="heading">Global Currency Stats </Title>
        <Row>
            <Col span={12}><Statistic title="Total Currency" value={globalStats.total}/></Col>
            <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
            <Col span={12}><Statistic title="Total 24 Hour Volume" value={millify(globalStats.total24hVolume)} /></Col>
            <Col span={12}><Statistic title="Total Market" value={millify(globalStats.totalMarkets)} /></Col>
        </Row>
        <div className="home-heading-container">
          <Title level={2} className="home-title">Top 10 Currencies in the World</Title>
          <Title level={3} className="show-more"><Link to="/currencies">Show More</Link></Title>
        </div>
        <Currencies simplified />
        <div className="home-heading-container">
          <Title level={2} className="home-title">Latest News</Title>
          <Title level={3} className="show-more"><Link to="/currencies">Show More</Link></Title>
        </div>
        <News simplified />
    </>
  )
}
