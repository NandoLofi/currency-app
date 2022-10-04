import React from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from "antd"
import { useState, useEffect } from 'react'

import { useGetCurrencyQuery } from '../services/currencyApi'

export default function Currencies({ simplified }) {
  const count = simplified ? 10 : 100;
  const { data: currencyList, isFetching } = useGetCurrencyQuery(count)
  const [ currency, setCurrency ] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(()=>{
    const filteredData = currencyList ?.data ?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))

    setCurrency(filteredData)

  }, [currencyList, searchTerm])

  if (isFetching) return "Loading..."


  console.log(currency)
  
  return (
    <>
    <div className="search-crypto">
      <Input placeholder='Search' onChange={(e)=> setSearchTerm(e.target.value)}/>
    </div>
      <Row gutter={[32, 32]} className='crypto-card-container'>
        {currency ?.map((currency)=> (
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
