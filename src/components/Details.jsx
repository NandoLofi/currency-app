import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useGetCurrencyDetailsQuery } from '../services/currencyApi'


const {Title, Text } = Typography
const { Option } = Select;

export default function Details() {
const { coinId } = useParams();
const { data, isFetching } = useGetCurrencyDetailsQuery(coinId)
const cryptoDetails = data?.data?.coin


const stats = [
  { title: 'Price to USD', value: `$ ${cryptoDetails?.btcPrice && millify(cryptoDetails?.btcPrice)}`, icon: <DollarCircleOutlined /> },
  { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
  { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
  { title: 'All-time-high(daily avg.)', value: `$ ${millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
];

const genericStats = [
  { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
  { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
  { title: 'Aprroved Supply', value: cryptoDetails?.supply.supplyAt ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
  { title: 'Total Supply', value: `$ ${millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
  { title: 'Circulating Supply', value: `$ ${millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
];

  return (
    <>
    <Col className='coin-detail-container'>
      <Col className='coin-heading-container'>
        <Title level={2} className="coin-name">
          {cryptoDetails?.name} ({cryptoDetails?.slug}) Price
        </Title>
        <p>
          {cryptoDetails?.name} Price in USD
        </p>
      </Col>
    </Col>
    <Col className='stats-container'>
      <Col className="coin-value-statistics">
        <Col className="coin-value-statistic-heading">
          <Title level={3} className="coin-details-heading">{cryptoDetails?.name} Value Statistics</Title>
          <p>An Overview</p>
        </Col>
        {stats.map(({icon, title, value})=> (
          <Col className='coin-stats'> 
            <Col className='coin-stats-name'>
              <Text>{icon}</Text>
              <Text>{title}</Text>
            </Col>
            <Text className='stats'>{value}</Text>
          </Col>
        ))}
      </Col>
      <Col className="other-stats-info">
        <Col className="coin-value-statistic-heading">
          <Title level={3} className="coin-details-heading">Other Statistics</Title>
        </Col>
        {genericStats.map(({icon, title, value})=> (
          <Col className='coin-stats'> 
            <Col className='coin-stats-name'>
              <Text>{icon}</Text>
              <Text>{title}</Text>
            </Col>
            <Text className='stats'>{value}</Text>
          </Col>
        ))}
      </Col>
    </Col>
    </>
  )
}
