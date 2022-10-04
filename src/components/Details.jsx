import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useCurrencyDetailsQuery, useGetCurrencyDetailsQuery } from '../services/currencyApi'


const {Title, Text } = Typography
const { Option } = Select;

export default function Details() {
const { coinId } = useParams();
const [timPeriod, setTimeperiod] = useState('7d')
const { data, isFetching } = useGetCurrencyDetailsQuery(coinId)
const cryptoDetails = data?.data?.coin

const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

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
  )
}
