import React from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from "antd"
import { useState } from 'react'

import { useGetCurrencyQuery } from '../services/currencyApi'

export default function Currencies() {
  const { data: currencyList, isFetching } = useGetCurrencyQuery()
  const [ currency, setCurrency ] = useState(currencyList ?.data ?.coins)
  console.log(currency)
  
  return (
    <>
      <Row gutters={[32, 32]} className='crypto-card-container'>
        {currency.map((currency)=> (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/currencies/${currency.id}`}>
              <Card title={`${currency.rank}. ${currency.name}`} extra={<img className='crypto-image' src={currency.iconUrl}/>} hoverable>
                <p> Price: {millify(currency.price)}</p>
                <p>MarketCap: {millify(currency.marketCap)}</p>
                <p>DailyChange: {millify(currency.change)}%</p>
                
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}
