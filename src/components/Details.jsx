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

console.log(data)


  return (
    <div>
      CurrencyDetaul
    </div>
  )
}
